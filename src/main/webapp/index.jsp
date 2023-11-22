<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<!DOCTYPE html>
<html lang="ru">
<head>

    <link href="styles/style.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Lab №1</title>

    <meta name="description" content="Web-programming first lab">
    <meta name="author" content="Niagin Mikhail Alexeyevich">

    <link rel="icon" type="pictures/icon" href="pictures/icon.png">
</head>
<body>
<%--<header>--%>
    <table id = "header">

        <th><img src="pictures/head.png" class = "header-images">
        <img src="pictures/head.png" class = "header-images">
            <img src="pictures/head.png" class = "header-images"></th>
        <th><div class="header-info">Нягин Михаил Алексеевич</div></th>
        <th><div class="header-info">Группа: P3213</div></th>
        <th><div class="header-info">Вариант: 2321</div></th>
        <th><img src="pictures/head.png" class = "header-images">
            <img src="pictures/head.png" class = "header-images">
            <img src="pictures/head.png" class = "header-images"></th>
    </table>
<div id = "main-entrance">
    <table id = "table-maine-entrance">
        <td>
            <table  id = "text-holder">
                <form id = "coordinatesForm" action="controller" method="POST">
                    <tr>
                        <td>
                            <div id="x-header">Выберите x:</div>
                            <br>
                            <div class="x-buttons" id="first-row">
                                <% for (float i = -2; i <= 0; i+=0.5) { %>
                                <input  autocomplete="off" class="x" type="radio" name="x" value="<%= i %>"> <%= i %>
                                <%} %>
                            </div>
                            <div class="x-buttons" id="second-row">
                                <% for(float i = 0.5F; i <= 2;i+=0.5){ %>
                                <input autocomplete="off" class="x" type="radio" name="x" value="<%=i%>"> <%=i%>
                                <% } %>
                            </div>
                            <br>
                            <label for="yValue" id="y-header">Выберите y:</label><br>

                            <input autocomplete='off' maxlength="5" id="yValue" type="text" name="y" placeholder="(от -5 до 3)" title="Введите число от -5 до 3"><br>

                            <label id="R-header">Выберите R:</label><br>
                            <div id = "Rinput">
                                <select class="R" name="R" autocomplete='off'>
                                    <option class = "R" value="">Выбрать</option>
                                    <% for(int i=1;i<6;i++){%>
                                    <option class= "R" value="<%=i%>"><%=i%></option>
                                    <%}%>
                                </select>
                            </div><br>
                        </td>
                    </tr>

                </form>
            </table>
        </td>
        <td id = "area-image-holder">

            <canvas id="myCanvas" width="350" height="350"></canvas>
<%--            <img id = "areaImage" src="pictures/areaSecondLab.png">--%>
        </td>
    </table><br>
    <input id="submit-button" type="submit" disabled="" name="button" value="отправить"><br>
    <span id = "notification"></span>
    <p id = "stat">Статистика</p>
    <table id = "data">
        <thead>
        <tr><td>Координата x</td>
            <td>Координата y</td>
            <td>Координата R</td>
            <td>Статус попадания</td>
            <td>Дата</td>
        </tr>
        </thead>
        <tbody id="result">

        </tbody>

    </table>

</div>
<%--<br>--%>
<%--<h1>PLS WORK </h1>--%>
<%--<form action="ControllerServlet" method="POST">--%>
<%--    <label for="x">x:</label>--%>
<%--    <input type="text" id="x" name="x" required><br>--%>
<%--    <label for="y">y:</label>--%>
<%--    <input type="text" id="y" name="y" required><br>--%>
<%--    <label for="R">R:</label>--%>
<%--    <input type="text" id="R" name="R" required><br>--%>
<%--    <input type="submit" value="Send">--%>
<%--</form>--%>
<%--<script src="js/image.js"></script>--%>

<script src="js/image.js">
</script>
<script src="js/script.js"></script>
<%--<script src = "js/clickingProcessing.js"></script>--%>
</body>
</html>
