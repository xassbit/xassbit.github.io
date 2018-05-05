module.exports = function (env) {
    global.ENVIRONMENT = env;
    return require(`./webpack/${env}.js`)
};