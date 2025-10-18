import React from 'react'
import classNames from 'classnames'

import {
  CCard,
  CCardBody,
  CCol,
  CRow,

} from '@coreui/react'


// import WidgetsBrand from '../widgets/WidgetsBrand'
// import WidgetsDropdown from '../widgets/WidgetsDropdown'
// import MainChart from './MainChart'

const Dashboard = () => {
  return (
    <>
      {/* <WidgetsDropdown className="mb-4" /> */}
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Traffic
              </h4>
              <div className="small text-body-secondary">January - July 2023</div>
            </CCol>
          </CRow>
          {/* <MainChart /> */}
        </CCardBody>
      </CCard>
    </>
  )
}

export default Dashboard
