'use strict'

const Database = use('Database')
const moment = require('moment')

class DashboardKpiController {

  async listRangeKpi({auth, request, response, params, view}){
    const query = await Database.raw(`select "Range Monitoring" as range from "dashboard_kpi"."f_filter_range_monitoring"()`)
    let list = []
    query.rows.map(it => {
      list.push(it.range)
    })
    return list
  }

}

module.exports = DashboardKpiController
