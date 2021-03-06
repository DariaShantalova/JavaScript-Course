/**
 * @param {String} date
 * @returns {Object}
 */

module.exports = function date(date) {
    return {
        _value: new Date(date),
        get value() {
            var minute = this._value.getMinutes();
            var hour = this._value.getHours();
            var day = this._value.getDate();
            var month = this._value.getMonth() + 1;

            if (minute < 10) {
                minute = '0' + minute;
            }
            if (hour < 10) {
                hour = '0' + hour;
            }
            if (day < 10) {
                day = '0' + day;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return this._value.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute;
        },
        add: function (count, param) {
            if (count < 0 || (param !== 'years' && param !== 'months' && param !== 'days' && param !== 'hours' && param !== 'minutes')) {
                throw new TypeError('Передано неверное значение');
            }
            if (param === 'years') {
                this._value.setFullYear(this._value.getFullYear() + count);
            } else if (param === 'months') {
                this._value.setMonth(this._value.getMonth() + count);
            } else if (param === 'days') {
                this._value.setDate(this._value.getDate() + count);
            } else if (param === 'hours') {
                this._value.setHours(this._value.getHours() + count);
            } else if (param === 'minutes') {
                this._value.setMinutes(this._value.getMinutes() + count);
            }
            return this;
        },
        subtract: function (count, param) {
            if (count < 0 || (param !== 'years' && param !== 'months' && param !== 'days' && param !== 'hours' && param !== 'minutes')) {
                throw new TypeError('Передано неверное значение');
            }
            if (param === 'years') {
                this._value.setFullYear(this._value.getFullYear() - count);
            } else if (param === 'months') {
                this._value.setMonth(this._value.getMonth() - count);
            } else if (param === 'days') {
                this._value.setDate(this._value.getDate() - count);
            } else if (param === 'hours') {
                this._value.setHours(this._value.getHours() - count);
            } else if (param === 'minutes') {
                this._value.setMinutes(this._value.getMinutes() - count);
            }
            return this;
        }
    }
}
