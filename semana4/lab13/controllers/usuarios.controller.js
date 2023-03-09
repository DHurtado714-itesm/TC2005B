exports.logout = (request, response, next) => {
  request.session.destroy(() => {
    response.redirect("/pilotos");
  });
};