import React ,{useState}from 'react'

function constShowSideBar() {
    const [sidebar,setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);
    return (
             <>
             {sidebar}
             {showSidebar}
             </>
    )
}

export default constShowSideBar
