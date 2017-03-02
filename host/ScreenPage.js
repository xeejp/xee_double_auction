import React, { Component } from 'react'
import { connect } from 'react-redux'

import BidsTable from 'components/BidsTable'
import Chart from 'components/Chart'

const mapStateToProps = ({ buyerBids, sellerBids, deals, users }) => ({
  buyerBids,
  sellerBids,
  deals,
  users
})

const ScreenPage = ({ buyerBids, sellerBids, deals, users }) => (
  <div>
    <BidsTable
      buyerBids={buyerBids}
      sellerBids={sellerBids}
      deals={deals}
    />
    <Chart
      users={users}
      deals={deals}
      expanded={true}
    />
  </div>
)

export default connect(mapStateToProps)(ScreenPage)
