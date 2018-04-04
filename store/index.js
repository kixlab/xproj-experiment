import Vuex from 'vuex'
// import {firebaseMutations, firebaseAction } from 'vuexfire'
// import db from '~/firebase.js'

const store = () => new Vuex.Store({
  strict: true,
  state: {
    userId: '',
    articles: [
      {
        title: '임대료·최저임금 쇼크 … 백종원 거리 ‘백종원 식당’ 다 떠났다',
        content: `새마을식당·홍콩반점·미정식당 같은 ‘백종원 식당’의 1호점이 19개나 모여 있어 ‘백종원 거리’라는 별칭까지 붙은 서울 강남구 영동시장 인근. 하지만 최근 이런 백종원 식당이 모두 사라졌다.
        백종원 식당을 관리하는 더본코리아 관계자는 “2년 전 하나둘 옮기기 시작해 최근 마지막으로 성성식당과 빽다방까지 철수했다”며 “고향과도 같은 이곳을 떠나게 된 것은 가파르게 오르는 임대료를 감당하기 어려웠기 때문”이라고 말했다.
        더본코리아에 따르면 2012년부터 2017년까지 5년간 백종원 거리 내 A식당의 임대료는 39% 올랐고, B식당과 C식당도 각각 33%, 31%씩 상승했다.
        영동시장 일대 상가를 취급하는 해준부동산중개법인의 이인구 부장은 “백종원 거리에서는 건물주가 매년 10%씩 임대료를 올리는 경우도 있다”고 말했다. 모 점포의 경우 2016년 3.3㎡당 28만원이었던 월세가 올해 37만원으로 올랐다. 99㎡(30평) 크기 식당의 월세가 1000만원이 넘어간 셈이다.
        백종원 거리의 부동산 중개업소와 상인들은 백종원 식당 철수를 놓고 더본코리아가 주식으로 치면 상투에 팔고 나간 셈이라고 말한다. 매년 오르는 임대료에 올해부터는 최저임금 인상 쇼크까지 겹치면서 영업환경이 크게 악화했다는 것이다. 익명을 요구한 논현동의 김모 공인중개사는 “백종원 거리 인근에서 최근 몇 년 새 처음으로 2층 점포가 무권리금(영업권 프리미엄인 권리금이 안 붙은 점포) 상태로 매물로 나오고, 권리금을 손해 보더라도 백종원 거리에서 빠져나가려는 음식점 사장님들도 나타나기 시작했다”고 말했다.
        실제 올해 들어 최저임금이 큰 폭으로 오르면서 ‘임대료 상승+인건비 상승’의 이중고를 버티지 못하고 폐점하는 대형 프랜차이즈 점포가 늘고 있다.
        맥도날드의 경우 지난 16일 20년 넘게 운영하던 서울 강남구 대치점과 서울대점을 폐업했고, 신촌점 등 10여 개의 매장도 이달 말에서 다음 달까지 폐점할 예정이다. 맥도날드 홍보팀의 장고운 팀장은 “건물주들이 임대료 인상을 요청하는 것은 매년 있었던 일이지만 올해는 예년보다 요구하는 인상 폭이 유독 크다”며 “점포당 100명이 넘는 인력을 운용하는 경우도 적지 않다 보니 지난해보다 크게 오른 최저임금도 부담 요인”이라고 덧붙였다. 토종 커피브랜드 탐앤탐스의 김도균 대표도 “5년 계약 후 임대료가 심하면 배로 올라 문을 닫을 수밖에 없는 경우도 있다”고 토로했다.
        맥도날드 외에 KFC는 명동중앙점을 지난달 19일 폐점했고, 빕스 여의도점도 지난 20일 문을 닫았다. 외식업계에서는 프랜차이즈 본점 또는 대표매장의 최근 폐점 움직임이 ‘프랜차이즈 폐점 쓰나미’의 전조 현상이 될 수도 있다고 우려한다. 문재인 대통령의 ‘최저임금 1만원’이란 대선 공약에 따라 올해 지난해보다 16.4% 오른 시간당 최저임금(7530원)이 내년과 후년에도 올해와 비슷한 폭으로 인상될 예정이고, 최근 몇 년간 이어온 부동산 시장 활황 여파로 건물주의 임대료 인상 또한 지속할 전망이기 때문이다. 부동산114 자료에 따르면 지난해 서울 종각역 상권의 경우 임대료가 전년보다 38%나 급등했다.
        이 때문에 영세 가맹점주들은 요즘 좌불안석이다. 중소 프랜차이즈의 서울 강남역점을 운영하는 권모(54) 씨는“요즘 휴대폰 전화벨이 울릴 때마다 건물주의 임대료 올려달라는 전화면 어떡하나 하는 생각에 심장병이 다 걸릴 지경”이라고 말했다.
        정부는 임대료 상승에 따른 상인들의 어려움을 덜기 위해 상가임대차보호법을 강화하는 등 대책을 마련하고 있다. 김상조 공정거래위원장은 최근 “임대료 문제는 범정부 차원의 개선 대책이 마련돼야 할 사항”이라며 “어려움을 해결해 줄 수 있는 방안을 찾겠다”고 말했다.
        하지만 정부 대책이 실효성이 있을지는 의문이다. 정부는 상가 임대료 인상률을 제한하는 상가임대차보호법을 시행하고 있고, 올 1월에는 시행령을 개정해 상가임대료인상률 상한을 기존 9%에서 5%로 낮췄다. 그러나 이 제도는 기존 임차인과 재협상할 때 적용되는 규정이고 건물주가 새로운 임차인과 계약할 때는 해당하지 않는다. 기존 임차인도 제대로 보호받지 못하는 것은 마찬가지다.
        현행법상 건물주가 상가임대료 인상률을 안 지켜도 별도의 벌금이나 과태료 등의 규제도 없다. 그렇다고 직접적인 규제를 하게 되면 자본주의경제를 떠받치는 사유재산권 보호와 상충하는 모순이 있다. 두성규 한국건설산업연구원 선임연구위원은 “강화된 법을 내놓더라도 건물주가 임차인에 ‘갑’인 포지션은 변하지 않기 때문에 건물주가 자신의 불이익을 어떤 식으로든 임차인에게 떠넘기는 부작용이 나올 수 있다”고 지적했다.
        함종선 기자 jsham@joongang.co.kr
        출처: http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=101&oid=025&aid=0002807781`
      },
      {
        title: '강북 따릉이가 더 위험한 이유…#서울자전거도로맵',
        content: `
        뉴스래빗 데이터저널리즘 [DJ래빗] 서울자전거도로맵 편, 서울 특히 강북 지역의 자전거 출퇴근 가능성을 점검합니다. 뉴스래빗은 국내 최초로 2018년 1월 서울시가 보유한 자전거도로 지도 데이터를 단독 확보했습니다.
        이를 지도에 올려 시각화한 결과, 강북과 강남 그리고 자전거전용도로와 자전거(보행자)겸용도로의 비중이 명확히 드러납니다. 뉴스래빗은 특히 서울 '도로변' 자전거도로에 주목합니다. 자전거 출근길로 가장 많이 선택하지만, 차-보행자와 계속 뒤섞이는 탓에 가장 사고 위험이 높기 때문이죠. 과연 서울의 자전거가 나들이나 운동용이 아니라 이동 수단 역할도 가능할지 함께 따져보시죠 !.!
        # 이렇게 분석했습니다
        서울시 열린데이터광장엔 '자전거도로 현황' 데이터가 있습니다. 자전거도로 목록 뿐 아니라 지도 데이터도 공개합니다. 2013년엔 자전거도로 목록과 지도 데이터까지 모두 공개했습니다.
        서울 자전거도로는 도로변, 공원, 교량(다리), 하천 등 다양한 환경에 위치해 있습니다. 서울 내 자전거도로는 2016년 최신 자료(서울시 집계) 기준 총 868.7km 입니다. 차도와 인도와 혼재한 도로변 자전거길이 601.7km로 가장 깁니다. 이어 한강 등 하천(254.4km), 교량(7.3km), 공원(5.3km) 순으로 포진합니다.
        서울시는 지난 1월 이 목록을 업데이트했습니다. 다만 2013년과 다르게 지도 데이터(위치 정보)는 포함하지 않았습니다. 뉴스래빗은 서울시에 요청해 최신 자전거도로 지도 데이터를 단독 입수했습니다.
        상세 분석엔 서울시가 집계한 자전거도로 현황 통계표를 활용했습니다. 지도 데이터 상 도로 범위가 실제 현장만큼 세밀하지 않을 수 있기 때문입니다.
        #1. 국내 최초 #서울자전거도로맵
        :) 강북에서 자전거 타기 힘든 이유
        자전거도로의 종류. (출처=서울시 도시교통본부 '자전거이용시설 설치 기준')
        서울 시내 자전거도로는 총 네 종류입니다.
        자전거만을 위해 따로 지정한 도로는 ①자전거전용도로, 차로 가장자리에 자전거 도로를 마련한 곳은 ②자전거전용차로, 차도에 자전거가 함께 달리는 ③자전거우선도로, 보도에 자전거가 함께 다닐 수 있는 ④자전거보행자겸용도로 등 입니다.
        자전거전용도로를 빼면 나머지 3곳 도로는 기존 도로와 인도에 자전거 통행 용도를 추가한 지역입니다. 차도, 인도 등 기존 도로 일부에 자전거 모양을 색칠하거나 표지판을 놓은 곳들이죠. 서울시 자료에 따르면 자전거전용도로를 제외한 나머지 도로엔 '보행자와 상충', '차량 간섭'의 우려가 늘 존재합니다. 자전거-사람과 자전거-차량 출동 가능성이 늘 있다는 거죠.
        실제로 자전거를 타고 광화문 일대를 돌아보면 차와 보행자 그리고 자전거가 뒤엉키는 상황에 수없이 직면합니다. 종로구 구기동에서 서울역까지 자전거로 출퇴근하는 직장인 김민성 씨(39)도 이 같은 자전거길의 위험성을 호소합니다.
        자전거전용도로는 손에 꼽을 정도로 드물고, 자전거우선도로를 쌩쌩 달리는 자동차와 주정차 차량 등과 부딪힐 뻔한 일이 부지기수입니다. 차량과 매연을 피해 자전거보행자겸용도로로 올라타면 이번엔 보행자의 따가운 시선을 받을 때가 많습니다. "자전거가 차도를 달려야지 왜 인도로 올라오냐"고 따지는 이들도 많았다고 합니다. 자칫 어린아이가 인도로 튀어나오기라도 하면 급정거하며 놀란 가슴을 쓸어내립니다.
        강남에 거주한 적이 있는 김 씨는 "강북은 강남보다 자전거도로 인프라가 열악한 느낌"이라며 "따릉이를 이용하는 외국인 관광객들이 가끔 사고가 나지 않을까 걱정된다"고 말했습니다.
        #2. 강남 자전거전용도로, 강북의 6배
        :) 강남 4구에 서울자전거도로 35% 집중
        김 씨의 이 같은 우려는 뉴스래빗 #서울자전거도로맵 조사 결과 타당한 사실로 증명됐습니다. 뉴스래빗이 입수한 자전거도로 위치 데이터를 인터랙티브(interactive) 지도 위에 표시해보니 강북(한강 이북)에 특히 자전거전용도로가 드물었습니다.
        서울 내 도로변 자전거전용도로는 총 74.7km(2016년)에 불과했습니다. 4종류 도로변 자전거도로 총 601.7km의 12% 수준입니다. 그나마 자전거길과 차로를 구분해놓은 자전거전용차로는 54.9km로 가장 적었습니다.
        보행자와 자전거가 뒤섞이는 자전거보행자겸용도로가 359.1km로 가장 깁니다. 자전거우선도로(113km)가 뒤를 잇고 있죠.
        서울시가 공개한 통계에 따르면 도로변 자전거전용도로 74.7km 중 63.1km, 약 84%가 강남(한강 이남)에 위치합니다. 강북은 11.6km에 불과합니다. 강북에 상대적으로 자전거전용도로가 부족하다는 겁니다.
        강남 자전거전용도로는 흔히 '강남 4구(강남·강동·서초·송파구)'에 약 35%(26.1km)가 밀집해 있습니다. 강북 전체 도로변 자전거전용도로의 2배가 넘습니다.
        #3. 강북 도심 더 달리는 따릉이
        :) 외국 관광객들, 과연 안전할까요
        그런데 또 다른 문제가 있습니다. 바로 서울시가 도입한 공공자전거 대여 서비스 '따릉이'.
        유럽이나 미국의 대도시처럼 자전거 이용을 활성화하기 위해 서울시가 2015년 10월 야심차게 시작한 공공서비스입니다. 서울 시내 곳곳에 설치한 대여소에서 따릉이를 빌려 이용하고 원하는 지점까지 이동해 반납하면 됩니다. 2018년 3월 현재 서울자전거 웹사이트에 나와 있는 따릉이 대여소만 1055곳에 달합니다. 서비스 시작 3년만에 따릉이는 서울 전역을 누비고 있습니다.
        문제는 바로 따릉이를 주로 빌려 타는 곳이 강남이 아닌 강북이란 사실입니다. 대여 횟수 상위 10개소 중 8개소가 강북이죠.
        서울시는 2016년 10월 중 일주일치 따릉이 이용 내역 전수 데이터를 견본으로 공개하고 있습니다. 이 데이터로 따릉이 이용자들의 대략적 패턴을 확인해볼까요.
        가장 대여 횟수가 많은 대여소는 여의나루역 2번 출구 앞입니다. 강남 쪽 한강을 따라 시원하게 뚫린 자전거도로를 따릉이로 달리는 나들이객이 많기 때문이죠. 2016년 10월 17일부터 23일까지 일주일 간 1203회 대여해갔습니다. 바로 뒤를 이은 뚝섬유원지역 1번 출구 앞(927회)과 격차도 큽니다. 뚝섬유원지 인근은 강북 쪽 한강 자전거도로가 뻗은 곳입니다.
        3위부턴 줄줄이 강북 소재 대여소가 상위권에 올랐습니다. 홍대입구역 2번 출구 앞(888회), 성대입구 사거리(553회), 종로4가 사거리(500회), 월드컵경기장 홈플러스 앞(495회), 한양대병원 사거리(474회), 합정역 7번 출구 앞(473회), 서울광장 옆(459회) 순입니다. 총 3842회, 1위 여의나루역, 2위 뚝섬유원지 일주일치 2130회의 2배 수준입니다.
        특히 홍대, 종로, 성균관대, 서울광장 등은 외국 관광객이 따릉이를 많이 이용하는 곳으로 분류됩니다. 고궁과 광화문, 대학가 주변은 강북의 주요 관광지입니다. 강북 자전거도로 인프라는 강남에 비해 부족하지만 따릉이 이용객은 상대적으로 많은 셈입니다. 외국 관광객이 더 많이 따릉이를 이용할수록 보행자나 차와 뒤엉킬 위험은 더 커집니다. 게다가 대부분 초행길, 한국 도로 법규에 익숙치 않은 상황에서 말이죠.
        #4. 서울자전거도로의 문제점
        :) 전용도로 찔끔, 우선·겸용도로 대다수
        따릉이 대여소도 강남(500곳)보다 강북(550곳)에 더 많습니다. 강북 시민이 따릉이 등 자전거를 탈 기회나 수요가 더 많다는 뜻입니다. 강북 시민이나 관광객은 어디로 자전거를 달릴까요. 자전거전용도로도 많지 않은데 말이죠.
        2017 서울 자전거길 안내 지도. (출처=서울시 도시교통본부)
        서울 자전거보행자겸용도로 길이는 360.1km입니다. 차도-인도와 뒤섞이는 도로변 자전거길(601.7km)의 60%를 차지합니다. 도로변 자전거전용도로보다 5배나 많습니다.
        강남에 240.8km로 자전거전용도로의 약 4배, 강북엔 119.3km로 무려 자전거전용도로의 10배에 달하는 길이의 자전거보행자겸용도로가 있죠. 위 지도를 눈으로만 봐도 강북은 강남보다 자전거우선도로와 자전거보행자겸용도로 비중이 높음을 확인할 수 있습니다.
        강남 역시 자전거전용도로 비중이 높지는 않습니다. 강북보단 낫지만 한강 이남 지역 가운데 여의도, 강서구 마곡지구, 송파구 인근 정도에만 있을 뿐입니다. 출·퇴근 인구가 많은 영등포구, 강남구 인근은 강북처럼 차도-인도와 뒤섞이는 도로변 자전거우선도로, 자전거보행자겸용도로가 대부분입니다.
        #5. 서울 자전거 패러다임 바꿔야
        :) 봄 미세먼지 마시며 '자출' 할까요?
        따릉이 대여소를 이용 시간 순서로 보면 상위권은 여전히 공원이나 강변입니다. 아직 나들이 수단 이상의 역할을 못한다는 뜻입니다. 서울 도심에서 자전거로 출퇴근하기엔 여전히 사고 위험성이 큰 탓이죠.
        서울시는 최근 미세먼지 저감 비상대책 방안으로 시행했던 대중교통 무료 정책을 폐기했습니다. 2018년 1월 3차례(15·17·18일) 혈세 150억원을 무료 대중교통비로 쏟아부었지만 정착 미세먼지 감소 효과를 증명하지 못한 탓입니다.
        단기적 자가용 이용 억제책과 무료 정책보다 시민의 이동 수단 패러다임을 보다 친환경적으로 바꾸는 본질적 변화가 필요하다는 지적이 많습니다. 자전거 이용자가 안전하게 달릴 수 있는 서울 자전거전용도로를 확대하는 일. 해외 유수의 도시 교훈처럼 자전거는 훌륭한 대안입니다. 서울시가 야심차게 따릉이 사업을 추진한 주요 배경 중 하나이기도 합니다.
        봄이 오고 날씨가 따뜻해진다고 해도 서울 시민들은 여전히 안심하고 '자출'할 수 없습니다. 특히 강북 도심에선 더더욱 어렵습니다. 공원, 강변뿐 아니라 시내 곳곳에 설치한 수많은 따릉이의 사용성을 높이려면 자전거전용도로 확대가 절실합니다.
        서울 시민과 관광객은 올 봄에도 자동차, 보행자와 뒤섞여 위험천만하게 달려야만 합니다. 상쾌한 서울의 공기 대신 짙은 미세먼지를 한가득 들이 마시면서 말입니다 !.!
        책임= 김민성, 연구= 강종구 한경닷컴 기자 jonggu@hankyung.com
        출처: http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=015&aid=0003906221`,
      }, 
      {
        title: `[서울시 여성 '안심이' 앱 시범 가동 현장 가보니] 폰 흔들면 위치 전송…"밤길 무섭지 않아요"`,
        content: `즉각 중단하십시오! 현재 경찰이 CCTV 모니터링 중입니다. 곧 순찰차가 출동합니다. 즉각 중단하십시오!”
        2일 오전11시30분께 서울 은평구청 5층 통합관제센터 상황실에 긴박감이 흘렀다. 대형 화면에는 검정 티셔츠에 흰색 바지, 마스크를 쓴 20대 추정의 한 남성이 뒤에서 한 여성을 껴안아 강제 추행하는 모습이 보였다. 화면에 잡힌 여성의 현재 위치는 서울 은평구 역촌동의 한 주택가. 피해 여성은 손에 쥐고 있던 스마트폰을 세게 흔들었고 서울시 ‘안심이’ 애플리케이션에서 긴급호출(SOS) 기능이 작동돼 여성의 현재 주소인 ‘은평구 진흥로 7가길 3-11’이 바로 통합관제센터로 접수됐다.
        범행 장면을 확인한 관제센터 직원은 곧바로 경고방송을 내보냈다. 센터에 상주하고 있던 경찰관은 도주하고 있는 범인의 인상착의와 대형 화면에 실시간으로 반영되고 있는 범인 동선을 인근 경찰서에 알렸다. 달아난 범인의 현재 위치와 가장 인접한 경찰이 출동했고 성추행범은 곧바로 체포됐다.
        긴박했던 이 상황은 서울시가 이날 안심이 앱을 내놓으면서 시연해낸 장면이다. 귀가하고 있는 여성을 상대로 강제 추행을 저지른 가상의 범인이 안심이 앱 신고로 경찰에 현장 검거되기까지의 상황을 담았다.
        서울시는 갈수록 증가하고 있는 강간·강제추행 등 여성 대상 강력 범죄를 막기 위해 안심이 앱을 출시했다. 은평구를 포함해 성동·동작구·서대문 등 4개 자치구에서 시험 가동한 뒤 연내 14개구로 확대 시행할 계획이다. 이 앱은 현재 서울시 전 지역에 방범용, 교통단속용, 쓰레기 무단 투기 등 환경 감시용의 목적으로 설치돼 있는 3만2,000여개 폐쇄회로(CC)TV와 25개 자치구별로 구축돼 있는 통합관제센터를 스마트폰 앱으로 연계, 여성 대상 범죄 등 비상상황을 실시간 대응 가능하도록 만들어졌다.
        앱을 다운받아 실행한 상태로 이동하면 이용자 위치가 실시간으로 해당 자치구 통합관제센터 상황판에 표시되고 모니터링이 시작된다. 이용자가 위험한 상황을 맞았을 때 휴대폰 전원 버튼을 누르거나 흔들면 자신의 위치는 물론 인근 CCTV 영상, 연락처 등의 정보가 센터로 자동 전송된다. 긴급 상황이 인지되면 관제센터에서 경고 방송을 하고 인근 경찰이 출동해 상황을 해결한다.
        현장 시연회에서 김항곤 은평경찰서장은 “이 앱을 통한 신고 접수 때는 기존 112를 통한 신고 때보다 경찰 출동 시간이 2∼3분 정도 단축될 것”이라고 말했다.
        김민정기자 jeong@sedaily.com
        출처 : http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=011&aid=0003026074`
      }
    ],
    promises: [
      {
        title: '‘서울형 장기 안심상가’시범 도입',
        goals: ['도시재생지역 등 임대료 상승 제한 및 적정 임대료로 자영업자 장기간 (5～7년) 영업 보장'],
        plans: [
          '상가건물임대차 보호 국내 외 사례조사 용역 실시',
          '서울형 장기안심상가 도입을 위한 모델 개발',
          '2016 서울형 장기안심상가 시범도입',
          '상가임대차 상생프로젝트 서울형 장기안심상가 사업 지속추진'
        ],
        links: [

          {
            title: `서울시, 장기안심상가 리모델링 비용 최대 3000만원 지원`,
            link: `http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=008&aid=0004026037`
          }, //보도자료 받아쓰기 -- 긍정적 측면
          {
            title: `서울시 '안심상가' 실효성 의문`,
            link: `http://www.naeil.com/news_view/?id_art=239356`
          }, // 비판적 기사
          {
            title: `2017년 「장기안심상가」선정 심사계획`,
            link: `https://opengov.seoul.go.kr/sanction/12218996`
          } // 서울시 내부 문서
        ],
        pros: [
          '임대인-임차인 협약을 통한 상생문화 정착',
          '젠트리피케이션 방지'
        ],
        cons: [
          '혜택이 건물주에게만 집중됨',
          '건물주가 위약금을 감수하고 협약을 깰 수 있음'
        ],
        choices: [
          ''
        ],
        budget: 19.3
      },
      {
        title: '도심 광폭도로에 대한 도로 다이어트 추진',
        goals: ['시민이 안전하고 편리하게 생활할 수 있도록 도심 도로의 차량 공간을 축소하여 보행중심의 시민활동 공간으로 재편 추진'],
        plans: [
          '우정국로, 퇴계로, 소월로 도로공간 재편', 
          '광화문광장 재구조화 사업'
        ],
        links: [
          {
            title: '4대문안 ‘교통 다이어트’…모든 차도, 4~6차로로 줄인다',
            link: 'http://www.hani.co.kr/arti/society/area/834655.html'
          }, 
          {
            title: `서울 줄줄이 '도로 다이어트'… 도심교통 괜찮을까`,
            link: 'http://news.hankyung.com/article/2017121079091' 
          },
          // {
          //   title: '사대문안 도로줄여 친환경 도시로..',
          //   link: 'http://radio.ytn.co.kr/program/?f=2&id=54655&s_mcd=0201&s_hcd=09'
          // },
          {
            title: `2016 서울시 도로다이어트 현황과 평가`,
            link: `http://www.auri.re.kr/auriTidings/researchReport_view.asp?bbs_code=4&idx=1673`
          },
          {
            title: `(2018) 한양도성안 도로공간재편(퇴계로)`,
            link: `https://opengov.seoul.go.kr/budget/14608644`
          }
        ],
        pros: [
          '도심 내 차량 감소를 통한 미세먼지 감축',
          '보행 공간, 자전거 도로 및 문화 활동 공간 확충',
          '조업시설을 위한 공간 확보'
        ],
        cons: [
          '도심 교통 혼잡 증대'
        ],
        choices: [
          ''
        ],
        budget: 48.4
      },
      {
        title: '음악으로 지키는 안전한 우리 동네!',
        goals: ['지하도 등 불안을 느끼는 지역에 클래식 음악방송으로 범죄예방', '우범지역 선정 후 스피커 설치, 위험시간대 클래식 음악 송출'],
        plans: [
          '관악구 난곡동 652번지일대 안전마을사업 대상지내 범죄안전 취약장소 3개소에 스피커 설치', 
          '심야시간(밤11시~새벽4시) 클래식 음악 송출', 
          '성과평가 후 확대 추진여부 검토'
        ],
        links: [
          {
            title: '어두운 밤 난곡동 골목길에 음악을 틀었더니…',
            link: `https://opengov.seoul.go.kr/mediahub/7108247`
          },
          {
            title: `「음악으로 지키는 안전한 우리 동네」 추진계획`,
            link: `http://opengov.seoul.go.kr/sanction/3671765`
          }
        ],
        pros: [
          '클래식 음악을 활용한 범죄예방 사례 존재',
        ],
        cons: [
          '음악만으로 범죄를 예방하는 것에 한계가 있음',
        ],
        choices: [
          ''
        ],
        budget: 0.2
      }
    ],
    prompts: [
      {
        promptContent: '주위에 이 공약과 직/간접적으로 연관있는 사람이 있나요? 있다면 누구인지, 그리고 이 공약이 어떻게 그 사람에게 영향을 주는지 적어주세요.',
        type: 'openended',
      }, 
      {
        promptContent: `이 공약을 초등학교 1학년 아이에게 설명해야 한다면, 어떻게 설명하실 것인가요?`,
        type: 'openended'
      }, 
      {
        promptContent: `이 공약을 이행하기 위해 필요한 4년간 총 예산은 대략 얼마일까요? 왜 그렇게 생각하셨나요?
        ※ 2018년 서울시 예산: 28조 179억원
        ※ 서울로 7017 프로젝트 총 사업비: 647억원
        `,
        type: 'budget',
        options: [50, 100, 500, 1000, 5000]
      },
      {
        promptContent: '이 공약의 긍정적인 효과는 무엇이 있을까요?',
        type: 'openended'
      },
      {
        promptContent: '이 공약의 부작용은 무엇이 있을까요?',
        type: 'openended'
      },
      {
        promptContent: `이 공약에 대해 어떻게 생각하시나요? 찬성/반대 입장을 선택하고, 그 이유를 적어주세요.`,
        type: 'yesno'
      }
    ],
    promptIdx: 0
    // responses: []
  },
  mutations: {
    setUserId: function (state, payload) {
      state.userId = payload.userId
    },
    incrementPromptIdx: function (state) {
      state.promptIdx += 1
    },
    resetPromptIdx: function (state) {
      state.promptIdx = 0
    }
    // ...firebaseMutations
  },
  // actions: {
  //   setResponsesRef: firebaseAction(({ bindFirebaseRef, unbindFirebaseRef }, userId) => {
  //     return bindFirebaseRef('responses', db.ref('responses/' + state.userId))
  //   }),
  //   addResponse: function (response) {
  //     db.ref('responses/' + state.userId).push(response)
  //   }
  // }
})

export default store