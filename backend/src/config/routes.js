const express = require('express')

module.exports = function(server){
    //definir a URL base para as rotas
    const router = express.Router()
    server.use('./api', router)

    //mapeamento das rodas do ciclo de pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}