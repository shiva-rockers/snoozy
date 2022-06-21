module.exports.isEmail = function(email) {
    const regeX = /[a-z0-9._%+-]+@[a-z0-9-]+[.]+[a-z]{2,5}$/;
    return regeX.test(email);
};

module.exports.isPassword = function(password) {
    // const regeX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/;
    const regeX = /^(?=.*?[a-z])(?=.*?[0-9]).{6,12}$/;
    return regeX.test(password);
};