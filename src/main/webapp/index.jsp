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

    <link rel="icon" type="pictures/icon" href="picterus/icon.png">
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
                <form id = "coordinatesForm" action="ControllerServlet" method="POST">
                    <tr>
                        <td>
                            <div id="x-header">Выберите x:</div>
                            <br>
                            <div class="x-buttons" id="first-row">
                                <% for (int i = -5; i < 0; i++) { %>
                                <input autocomplete="off" class="x" type="radio" name="x" value="<%= i %>"> <%= i %>
                                <% } %>
                            </div>
                            <div class="x-buttons" id="second-row">
                                <% for(int i=0; i < 4;i++){ %>
                                <input autocomplete="off" class="x" type="radio" name="x" value="<%=i%>"> <%=i%>
                                <% } %>
                            </div>
                            <br>
                            <label for="yValue" id="y-header">Выберите y:</label><br>

                            <input autocomplete='off' maxlength="5" id="yValue" type="text" name="y" placeholder="(от -3 до 5)" title="Введите число от -3 до 5"><br>

                            <label for = "Rinput" id="R-header">Выберите R:</label><br>
                            <label id = "Rinput">
                                <select class="R" name="R" autocomplete='off'>
                                    <option class = "R" value="">Выбрать</option>
                                    <% for(int i=1;i<6;i++){%>
                                    <option class= "R" value="<%=i%>"><%=i%></option>
                                    <%}%>
                                </select>
                            </label><br>
                        </td>
                    </tr>
            </table>
        </td>
        <td id = "area-image-holder">
            <img id = "areaImage" src="pictures/areaSecondLab.png">
        </td>
    </table><br>
    <input id="submit-button" type="button" disabled="" name="button" value="отправить">
    </form>
    <table class="result">
        <div id="test">

        </div>
    </table>

</div>
<br>

<script src="js/script.js"></script>
</body>
</html>
