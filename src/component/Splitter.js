import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import { Splitter, SplitterPanel } from 'primereact/splitter';
import Iframe from 'react-iframe'

function Spiltter() {
    return (
      <>
        <Splitter style={{ height: '680px', }}>
            <SplitterPanel size={80}>
            <Splitter layout="vertical">
                <SplitterPanel size={100}>
                    <Splitter>
                        <SplitterPanel className="flex align-items-center justify-content-center" size={50}>
                        <Iframe url="https://mobile.efinancethai.com/HTML5/StockChartX/index.asp?user_id=98-juggrit"
                        position="absolute"
                        width="572px"
                        id="myId"
                        className="myClassname"
                        height="337px"
                        styles={{height: "337px" }}/>
                        </SplitterPanel>
                        <SplitterPanel className="flex align-items-center justify-content-center" size={50}>
                        <Iframe url="https://mobile.efinancethai.com/HTML5/StockChartX/index.asp?user_id=98-juggrit"
                        position="absolute"
                        width="572px"
                        id="myId"
                        className="myClassname"
                        height="337px"
                        styles={{height: "337px" }}/>
                        </SplitterPanel>
                    </Splitter>
                </SplitterPanel>
                <SplitterPanel size={100}>
                    <Splitter>
                        <SplitterPanel className="flex align-items-center justify-content-center" size={50}>
                        <Iframe url="https://mobile.efinancethai.com/HTML5/StockChartX/index.asp?user_id=98-juggrit"
                        position="absolute"
                        width="572px"
                        id="myId"
                        className="myClassname"
                        height="337px"
                        styles={{height: "337px" }}/>
                        </SplitterPanel>
                        <SplitterPanel className="flex align-items-center justify-content-center" size={50}>
                        <Iframe url="https://mobile.efinancethai.com/HTML5/StockChartX/index.asp?user_id=98-juggrit"
                        position="absolute"
                        width="572px"
                        id="myId"
                        className="myClassname"
                        height="337px"
                        styles={{height: "337px" }}/>
                        </SplitterPanel>
                    </Splitter>
                </SplitterPanel>
            </Splitter>
            </SplitterPanel>
            {/* <SplitterPanel className="flex align-items-center justify-content-center" size={80}>
            <Iframe url="https://mobile.efinancethai.com/HTML5/StockChartX/index.asp?user_id=98-juggrit"
                        position="absolute"
                        width="1145px"
                        id="myId"
                        className="myClassname"
                        height="678px"
                        styles={{height: "678px" }}/>
            </SplitterPanel> */}
            <SplitterPanel className="flex align-items-center justify-content-center" size={20} minSize={10}>
            <img src={require('../image/barright.png')} style={{width:'100%'}} />
            </SplitterPanel>
        </Splitter>
      </>
  );
}

export default Spiltter;