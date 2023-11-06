package serverlets;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }


    public void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException
    {
        try{
//            Float x = Float.parseFloat(request.getParameter("x"));
//            Double y = Double.parseDouble(request.getParameter("y"));
//            Integer R = Integer.parseInt(request.getParameter("R"));
            PrintWriter out = response.getWriter();
            out.println("<body>ПРивет мираэ</body>");
        }catch (Exception e){
            request.getRequestDispatcher("index.jsp").forward(request,response);
        }
    }

}

