
Date.prototype.ToUnixEpoch = function () {
    return Math.floor(this.getTime() / 1000.0)
}

Date.ToDateFormat = function (unixEpoch) {
    let date = new Date(unixEpoch * 1000)
    return date;
}
