'use strict'
const { apiFailurMessage, httpsConstants } = require('../common/constants');

class Utils {
    static response(res, data, message, success, code) {
        const responseObj = {
            responseData: data,
            message: message,
            success: success,
            responseCode: code
        }
        res.format({
            json: () => {
                res.send(responseObj);
            }
        })
    }


    static responseForValidation(res, errorArray, success, code = 400) {
        const responseObj = {
            message: 'Invalid Request',
            errors: errorArray,
            success: success,
            responseCode: code
        }
        res.format({
            json: () => {
                res.send(responseObj);
            }
        })
    }

    static handleError(err, req, res) {
        if (!res) { return false; }
        err = err || {};
        const msg = err.message ? err.message : apiFailurMessage.INTERNAL_SERVER.ERROR
        const code = err.code ? err.code : httpsConstants.RESPONSE.CODES.SERVER_ERROR
        this.response(res, {}, msg, httpsConstants.RESPONSE_STATUS_FAILURE, code);
    }

    /**
     * To throw error 
     * @param data 
     * @message 
     * @code 
     * @return {{code : number , data : * , message : *}}
     */

    static error(data, message, code = 500) {
        return {
            data: data,
            message: message,
            code: code
        }
    }

    static getFormattedDate() {
        const date = new Date()
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '_' + date.getDate() + ' ' + date.getHours() + date.getMinutes() + ':' + date.getSeconds();
    }

    /**
     * @param functionName 
     * @param message 
     * @param payload : should be in object form 
     * @param developerAlias 
     * @param logType ["INFO" , "WARNING" , "ERROR"] 
     * @constrctor
     */

    static printLog(functionName, message, payload, developerAlias, logType = 'INFO') {
        console.log(`[${this.getFormattedDate()}] ${logType}:${functionName} : ${message} : ${JSON.stringify(payload)}:Developer:${developerAlias}`);
    }
}

module.exports = Utils;