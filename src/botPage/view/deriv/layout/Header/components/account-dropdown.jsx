import React from "react";
import { translate } from "../../../../../../common/utils/tools";
import TabContent from "./tab-content.jsx";
import { observer as globalObserver } from '../../../../../../common/utils/observer';

const Separator = () => <div className="account__switcher-seperator"></div>;

const AccountDropdown = React.forwardRef(({ clientInfo, hideDropdown }, dropdownRef) => {
    const [activeTab, setActiveTab] = React.useState(clientInfo.tokenList[0].loginInfo.is_virtual === 0 ? "real" : "demo");

    React.useEffect(() => {
        window.addEventListener("click", hideDropdown);

        return () => window.removeEventListener("click", hideDropdown);
    })

    return(
        <div id="account__switcher-dropdown" className="account__switcher-dropdown show" ref={dropdownRef}>
            <div className="account__switcher-container">
                <ul className="account__switcher-tabs">
                    <li className={`account__switcher-tab ${activeTab === "real" ? "ui-tabs-active" : ""}`} 
                        onClick={() => setActiveTab("real")}
                    >
                        <a>{translate("Real")}</a>
                    </li>
                    <li 
                        className={`account__switcher-tab ${activeTab === "real" ? "" : "ui-tabs-active"}`} 
                        onClick={() => setActiveTab("demo")}
                    >
                        <a>{translate("Demo")}</a>
                    </li>
                </ul>
                <TabContent tab="real" clientInfo={clientInfo} isActive={activeTab === "real"}/>
                <TabContent tab="demo" clientInfo={clientInfo} isActive={activeTab === "demo"}/>
            </div>
            <Separator />
            <div className="account__switcher-total">
                <div className="account__switcher-total-balance">
                    <span className="account__switcher-total-balance-text">{translate("Total assets")}</span>
                    <span className="account__switcher-total-balance-amount account__switcher-balance">
                        {clientInfo.balance.total[activeTab === "real" ? "deriv" : "deriv_demo"].amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        <span className="symbols">&nbsp;{clientInfo.balance.total[activeTab === "real" ? "deriv" : "deriv_demo"].currency}</span>
                    </span>
                </div>
                <div className="account__switcher-total-text">{translate("Total assets in your Deriv accounts")}</div>
            </div>
            <Separator />
            <div 
                id="deriv__logout-btn"
                className="account__switcher-logout logout"
                onClick= {()=>{globalObserver.emit('ui.logout')}}   
            >
                <span className="account__switcher-logout-text">{translate("Log out")}</span>
                <img className="account__switcher-logout-icon logout-icon" src="image/deriv/ic-logout.svg" />
            </div>
        </div>
    )
});

export default AccountDropdown;