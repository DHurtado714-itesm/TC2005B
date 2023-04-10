module.exports = (request, response, next) => {
  if (!(request.session.privilegios.indexOf("crear_piloto") >= 0)) {
    return response.redirect("/pilotos");
  }
  next();
};
