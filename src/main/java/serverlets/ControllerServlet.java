package serverlets;

import model.rowResult;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.LinkedList;


/**
 * ControllerServlet, определяющий тип запроса, и, в зависимости от того,
 * содержит ли запрос информацию о координатах точки и радиусе, делегирующий его обработку одному из перечисленных ниже компонентов.
 * Все запросы внутри приложения должны передаваться этому сервлету (по методу GET или POST в зависимости от варианта задания),
 * остальные сервлеты с веб-страниц напрямую вызываться не должны.
 */
@WebServlet("/controller")
public class ControllerServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        try {

            if (request.getParameter("R").isEmpty() || request.getParameter("x").isEmpty() || request.getParameter("y").isEmpty()) {
                sendError(response,"some data is empty");
            }
            if (request.getParameter("R") == null || request.getParameter("x") == null || request.getParameter("y") == null) {
                sendError(response,"data is invalid");
            }
            double x = Double.parseDouble(request.getParameter("x"));
            double y = Double.parseDouble(request.getParameter("y").replace(",", "."));
            int R = Integer.parseInt(request.getParameter("R"));

            if(!(x>=-2.0) || !(x<=2.0)){
                sendError(response,"x is out of range");
            }
            if(!(y >= -5 && y <= 3)){
                sendError(response,"y is out of range");
            }
            if(!(R>=1 && R<=5)){
                sendError(response,"R is out of range");
            }
            request.getRequestDispatcher("areaCheckServlet").forward(request,response);
        }catch (Exception e){
            sendError(response,"invalid data");
        }
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        try{
            int i = Integer.parseInt(request.getParameter("codePing"));
            ServletContext context = getServletContext();
            LinkedList<rowResult> rowResults ;
            if(i == 0){// && ((rowResults = (LinkedList<rowResult>) context.getAttribute("checkResults")) != null)){
                request.getRequestDispatcher("areaCheckServlet").forward(request,response);

//                PrintWriter out = response.getWriter();
//                for (rowResult row: rowResults) {
//                    out.println(row.getAllByTableRow());
//                }
//                out.close();
            }
            else{
                response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, "Method is not allowed,btw row len:" );
            }
        }catch (NumberFormatException | ServletException e){
            response.sendError(HttpServletResponse.SC_BAD_REQUEST, "invalid code or no data in context");
        }
    }
    private void sendError(HttpServletResponse response, String errorMessage) throws IOException {
        response.sendError(HttpServletResponse.SC_BAD_REQUEST, errorMessage);
    }
}
