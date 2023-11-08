package serverlets;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;


/**
 * ControllerServlet, определяющий тип запроса, и, в зависимости от того,
 * содержит ли запрос информацию о координатах точки и радиусе, делегирующий его обработку одному из перечисленных ниже компонентов.
 * Все запросы внутри приложения должны передаваться этому сервлету (по методу GET или POST в зависимости от варианта задания),
 * остальные сервлеты с веб-страниц напрямую вызываться не должны.
 */
@WebServlet("/ControllerServlet")
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
            int x = Integer.parseInt(request.getParameter("x"));
            double y = Double.parseDouble(request.getParameter("y"));
            Integer R = Integer.parseInt(request.getParameter("R"));
            if(!(-5<x) || !(x<3)){
                sendError(response,"x is out of range");
            }
            if(!(-3 < y && y<5)){
                sendError(response,"y is out of range");
            }
            if(!(1<R && R<5)){
                sendError(response,"R is out of range");
            }
//            response.sendError(222,"FINALLY");
//            response.sendRedirect("areaCheckServlet");
            request.getRequestDispatcher("areaCheckServlet").forward(request,response);
//            PrintWriter out = response.getWriter();
//            out.println("<html>");
//            out.println("<head>");
//            out.println("<title>Hi</title>");
//            out.println("<body>");
//            out.println("x coordinate: " + request.getParameter("x") + "<br>");
//            out.println("y coordinate: " + request.getParameter("y") + "<br>");
//            out.println("R coordinate: " + request.getParameter("R") + "<br>");
//            out.println("</body>");
//            out.println("</html>");
//            out.close();
        }catch (Exception e){
            sendError(response,"invalid data");
        }
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, "Method is not allowed");
    }
    private void sendError(HttpServletResponse response, String errorMessage) throws IOException {
        response.sendError(HttpServletResponse.SC_BAD_REQUEST, errorMessage);
    }
}
