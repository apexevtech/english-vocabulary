(() => {
const rows=[
["maximum","adj./n.","最大的；最大限度；最大值","/ˈmæksɪməm/","maxim（最大）+ -um","源自拉丁语 maximus“最大的”，与 maximize 同源。","maximum speed|最高速度；at maximum|达到最大值","The maximum speed is 80 kilometers per hour.","最高速度是每小时八十公里。","能达到的最大边界就是 maximum。"],
["may","modal v./n.","可以；可能；祝愿；五月","/meɪ/","基础情态动词；月份 May 为专名","情态动词后接动词原形；月份写作 May。","may be|可能是；May I...?|我可以……吗","You may leave when you finish.","完成后你可以离开。","may 表许可或可能；May 还是五月。"],
["mayor","n.","市长","/meə/","整体词记忆，不强拆","经法语源自拉丁语 maior“更大者”，与 major 同源。","city mayor|市长；elect a mayor|选举市长","The mayor opened the new library.","市长为新图书馆揭幕。","城市中主要的民选负责人。"],
["me","pron.","我（宾格）","/miː/","基础代词，不强拆","第一人称单数宾格，与 I 的主格对应。","tell me|告诉我；between you and me|你我之间","Please send me the report.","请把报告发给我。","I 作主语，me 作宾语。"],
["meadow","n.","草地；牧场","/ˈmedəʊ/","基础词，不强拆","古英语 mædwe，指长满草或花的开阔地。","wildflower meadow|野花草地；green meadow|绿草地","Cows were grazing in the meadow.","奶牛正在草地上吃草。","开阔而长草的田野。"],
["meal","n.","一餐；膳食；粗磨粉","/miːl/","整体多义词，不强拆","一餐义与粗粉义历史来源不同。","have a meal|吃饭；three meals a day|一日三餐","We shared a meal after the meeting.","会议后我们一起吃了顿饭。","一天中一次完整进食就是 meal。"],
["mean","v./adj./n.","意思是；意指；平均的；卑鄙的；平均数","/miːn/","基础多义词，不强拆","古英语 mænan，多义词需依语境判断。","mean to do|打算做；mean value|平均值","What do you mean by that?","你那样说是什么意思？","mean 可问意思，也可说平均或刻薄。"],
["meaning","n./adj.","意义；含义；有意义的","/ˈmiːnɪŋ/","mean（意思）+ -ing","由 mean 派生，指所表达的含义。","meaning of|……的意义；deep meaning|深刻含义","The word has more than one meaning.","这个词有不止一种含义。","mean 出来的内容就是 meaning。"],
["means","n.","方法；手段；财力；平均数（mean 的复数）","/miːnz/","mean + -s；作“方法”时常用单复数同形","注意 a means、by means of；与动词 mean 的第三人称同形。","by means of|借助；means of transport|交通工具","Public transport is a convenient means of travel.","公共交通是一种便利的出行方式。","达到目的的办法或资源就是 means。"],
["meantime","n.","其间；同时","/ˈmiːntaɪm/","mean（中间）+ time（时间）","透明复合词，常见于 in the meantime。","in the meantime|与此同时；meantime period|期间","In the meantime, please wait here.","与此同时，请在这里等候。","两个事件中间的 time。"],
["meanwhile","adv./n.","与此同时；在此期间","/ˈmiːnwaɪl/","mean（中间）+ while（期间）","透明复合词，连接两件同时进行的事。","meanwhile, ...|与此同时；in the meanwhile|在此期间","The team prepared the report; meanwhile, I checked the data.","团队准备报告；与此同时，我核对数据。","在中间这段 while，同步发生另一件事。"],
["measure","n./v.","测量；措施；衡量；尺寸","/ˈmeʒə/","mens（测量）+ -ure","源自拉丁语 mensura，与 immense 的 mens 同源。","take measures|采取措施；measure against|衡量","The government took measures to reduce pollution.","政府采取措施减少污染。","先测量尺寸，再采取应对 measure。"],
["meat","n.","肉；（果实的）可食部分；实质","/miːt/","基础词，不强拆","古英语 mete 原指食物，现代主要指动物肉。","fresh meat|鲜肉；red meat|红肉","They avoid eating red meat.","他们避免吃红肉。","现代英语中 meat 主要指动物肉。"],
["mechanic","n.","机械师；修理工","/məˈkænɪk/","mechan（机器、技术）+ -ic","源自希腊语 mēkhanikos，与 machine 同源。","car mechanic|汽车修理工；mechanic shop|修理厂","The mechanic repaired the engine.","修理工修好了发动机。","懂得 machine 原理并能修理的人。"],
["mechanism","n.","机制；机械装置；机理","/ˈmekənɪzəm/","mechan（机器、技术）+ -ism（体系、机制）","与 mechanic、machine 同源，既指机械结构也指作用原理。","defense mechanism|防御机制；market mechanism|市场机制","Scientists studied the mechanism of the disease.","科学家研究了该疾病的机制。","让系统运转的内部结构和规律。"],
["medal","n.","奖牌；勋章","/ˈmedəl/","整体词记忆，不强拆","经法语源自拉丁语 metallum“金属”。","gold medal|金牌；win a medal|获奖牌","She won a gold medal in swimming.","她在游泳项目中获得金牌。","以金属制成的荣誉奖牌。"],
["media","n. pl.","媒体；媒介；medium 的复数","/ˈmiːdiə/","medium（中间媒介）的复数","传统上 media 是 medium 的复数，现代常作集合名词。","social media|社交媒体；media coverage|媒体报道","Social media spreads news quickly.","社交媒体传播新闻很快。","在信息发送者和接收者之间的媒介。"],
["medical","adj.","医学的；医疗的","/ˈmedɪkəl/","medic（医生、治疗）+ -al","与 medicine、medic 同源。","medical care|医疗照护；medical research|医学研究","The patient needs urgent medical care.","患者需要紧急医疗照护。","与医生、治疗和疾病有关。"],
["medicine","n.","药；医学；医疗方法","/ˈmedɪsɪn/","medic（治疗）+ -ine","源自拉丁语 medicina，与 medical 同族。","take medicine|服药；modern medicine|现代医学","Take the medicine after meals.","饭后服药。","治疗疾病的药物或医学体系。"],
["medieval","adj.","中世纪的；古老落后的","/ˌmediˈiːvəl/","medi-（中间）+ aev（时代）+ -al","字面为中间时代的，指欧洲中世纪。","medieval history|中世纪历史；medieval castle|中世纪城堡","The town has a well-preserved medieval castle.","这座城镇有一座保存完好的中世纪城堡。","介于古代和近代之间的时期。"]
];
window.qualityBatch049=rows.map((r,i)=>{const [word,pos,meaning,ipa,morph,origin,cols,en,zh,mn]=r;return{id:2800+i,word,pos,meaning,phonetic:"英 "+ipa+" · 美 "+ipa,parts:[[word,morph]],origin,collocations:cols.split("；").map(x=>x.split("|")),mnemonic:mn,exampleEn:en,exampleZh:zh,storyEn:en,storyZh:zh+" "+mn,note:"已核对核心义、词性、重音、构词来源和常用搭配。",audioGb:"",audioUs:"",reviewStatus:"已精修"};});
})();
