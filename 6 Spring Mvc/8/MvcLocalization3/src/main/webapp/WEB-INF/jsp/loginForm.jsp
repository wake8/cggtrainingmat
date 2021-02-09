<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" isELIgnored="false"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Login</title>
</head>
<body>
<a href="/MvcLocalization3/loginForm.html?siteLanguage=en">English</a>|
<a href="/MvcLocalization3/loginForm.html?siteLanguage=fr">French</a>|
<a href="/MvcLocalization3/loginForm.html?siteLanguage=vi">Vietnamese</a>
<form action="/MvcLocalization3/submitLogin">
	<p><label><spring:message code="login.username" /> <input type="text" name="username"/></label></p>
	<p><label><spring:message code="login.password" /> <input type="password" name="password"/></label></p>
	<input type="submit" value="<spring:message code="login.submit" />"/>

</form>
</body>
</html>