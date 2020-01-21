import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabsHeader'
import tabsContent from '../common/tab/tabsContent'

class BillingCycle extends Component {
    render(){
        return(
            <div>
                <ContentHeader title='Ciclos de Pagameto' small='Cadastro' />
                <Content>
                <Tabs>
                        <TabHeader>

                        </TabHeader>
                        <tabsContent>
                            
                        </tabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

export default BillingCycle