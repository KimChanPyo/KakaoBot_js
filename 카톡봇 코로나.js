/*이 코로나 현황 소스 저작은 김찬표에게 있습니다. 
무단으로 배포 및 수정 할 경우 저작권 법 위반 할시 엄격한 처벌을 가해 집니다.*/

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) 
    {
    if (msg== "/완치현황"){
        var u=Utils.getWebText("http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&amp;brdGubun=11");
        var a=u.split("결과음성으로 구성</span>")[1].split("합계로 구성</span>")[0].split("누적 검사현황</h5>")[0].replace(/(<([^>]+)>)/g,"").replace(/ /g, "")
        var b=u.split("<caption><span class=\hdn\>\격리해제\">");
        replier.reply("완치자: "+a+"")
 }
   
    {
    if (msg== "/격리중현황"){
        var u=Utils.getWebText("http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&amp;brdGubun=11");
        var a=u.split("결과음성으로 구성</span>")[1].split("합계로 구성</span>")[0].split("누적 검사현황</h5>")[0].replace(/(<([^>]+)>)/g,"").replace(/ /g, "")
        var b=u.split("<span class=\hdn\>\확진자(%)\">");
        replier.reply("격리자: "+a+"")
 }
    
   {
    if (msg== "/사망자"){
        var u=Utils.getWebText("http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&amp;brdGubun=11");
        var a=u.split("결과음성으로 구성</span>")[1].split("합계로 구성</span>")[0].split("누적 검사현황</h5>")[0].replace(/(<([^>]+)>)/g,"").replace(/ /g, "")
        var b=u.split("<span class=\hdn\>\사망자(%)\">");
        replier.reply("사망자: "+a+"")
}
   
}
    }
}