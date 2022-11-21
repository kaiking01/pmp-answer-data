
/** 正确答  */
window.rigthAnswer = ''

window.rightAnswerA = '' // 答案+章节

// 敏捷实践指南
/** 接龙数据 */
window.allData = `

1. 易江涛 ADACC ABABA
2. 陈少芬 BACCC AAABA
3. 王鑫 ADADC  AAACC
4. 刘思婷 DDCCC AADBA
5. 陈小棋 DADDC AADBC
6. 温炳辉 BADDC AAABA
7. D_uende BACCC AAAAA
8. 吴贤玲 DACDC AAACA
9. 卢维荣 AACDC AAABA
10. 等等 DACDC ADACC
11. 。 DAADC BCAAA
12. 郑鸿斌 DADCC AAADC
13. 熊佳  ADDDC ABABC
14. 鲍小康 DADDC AAADC
15. 赵艳焜 BDDDB AAADC
16. 黄雅君 DADCC ABABC
17. 杨国鸿 DACDC ADCBC
18. 李勇发 DACDC AACBA
19. 汤燕婷 ADCCC AADBB
20. 袁天赐 DACDC AAABB
21. 黄建珩 dddcc aaabb
22. 李凯旋 DCDDC AACBD
23. 谢成寿 DACDC AADBC
24. 文博 DADCC AACDC
25. 艾克丝 DADDC AACCC
26. 陆婉仪 DCDCC AAADA
27. 盛洁 DCCDC AACAC
28. 莫德坚 BCDDC  AAABA
29. 钟洁莹 DCCDC ABDBC
30. 郑舒颖 DDACC AAACD
31. 宋欣瑶 AACCC AADBC
32. 汪关心 DACDC BCABA
33. 洪俊鑫 DADDC ABABA
34. 郭晓丽 DAADB ADACC
35. 陈雅 BCDCC AADBA
36. 张焕忠 DADDC  ABBAC
37. Tang-BB。 DCDCC ABACA
38. 陈永发 DCACC AADCA
39. 于涛 DCDBC AAABC
40. Stone DDCDA ABBAC
41. 张永禄 DACDC AABBA
42. 陈秋丽Kitty DCDDC BACDA
43. 李翠艳 AACDC BCDCC
44. 陈书婷 BADCC ACADC
45. 阮晓梦 DCDDC AADAB
46. jo an na ADDDC BCCBC
47. 慌、如隔世 BCDDC ACADC
48. 陈安然 DDCCC ABDDC
49. 何文槺 DCDDC BACDD
50. Ss DACDC ABBBC
51. 阿狸 dadcc baadd

`

/**
 * 试题
 * 题目之间的间隔符：  ==-=--=
 * 答案间隔符： |*|*|
 * 章节间隔符： ||-||
 * **/
window.testQuestion = `
1、  Mia正准备参加冲刺计划会议时被发起者拦住了。他问Mia会议的内容，有谁参加会议。Mia告诉他，参加冲刺回顾会议的人包括：
Mia was entering the sprint planning meeting when she was stopped by the sponsor. He asked Mia what the meeting was about and who all are the participants. Mia told that following roles are the attendees at the sprint retrospective meeting:
A：Scrum主管，团队
Scrum Master, Team
B：产品负责人，Scrum主管，团队，客户
Product Owner, Scrum Master, Team, Customer
C：产品负责人，PMO，团队
Product Owner, PMO, Team
D：产品负责人，Scrum主管，团队
Product Owner, Scrum Master, Team

|*|*|正确答案：D  ||-|| 敏捷实践指南

解析：Scrum主管和开发团队是冲刺回顾会议中的人。可以邀请客户参加，但不建议这样做。这是团队的内部会议。邀请经理或客户等第三方参加回顾会议将降低透明度，因为团队成员很可能无法自由分享他们的想法。

 ==-=--=

2、  一个IT项目的客户坚持使用来自某个地区供应商的许可软件,在项目开始之前,合同中定义了不同的供应商和原产国。项目经理应该做什么?
The client for an IT project insists on using licensed software from a vendor from a certain region.A different vendor and country of origin were defined in the contract prior to the project's start. What should the project manager do?
A：与客户分享合同协议
Share the contract agreement with the client.
B：通知客户已经采购该软件
Inform the client that the software was already purchase
C：从采购团队获得该地区的软件供应商清单
Obtain a list of software vendors from that region from the procurement team.
D：提出一项变更请求,以符合客户的偏好
Initiate a change request to comply with the client's preference.

|*|*|正确答案：A 

解析：PMBOK(6)P489- ||-|| 12.2.3.2
 协议。 客户提出新要求，项目经理应该和客户先看合同，如果必要，让客户提出变更 其他选项：先A，必要时再D，然后再考虑CB

 ==-=--=

3、  两个团队成员之间的沟通不畅正在影响项目的进展。项目经理首先应该做什么?
Miscommunication between two team members is affecting a project'sprogress. What should the project manager do first?
A：培训存在无效沟通问题的团队成员
Train the team members who are ineffectively communicating
B：要求将所有沟通发布到团队协作板上
Require that all communications are posted to a team collaboration board
C：遵循沟通管理计划
Follow the communications management plan
D：与团队开会,以评估当前的沟通方式
Meet with the team to assess current communication styles

|*|*|正确答案：D 

解析：PMBOK(6)P392-  ||-|| 10.3.2.5
 会议。沟通存在问题，首先先评估当前的方式是否有问题以及影响，必要的时候发起变更。 其他选项：已经出了问题，就不能再遵循沟通管理计划，因此AC不对，B在D的后面。

 ==-=--=

4、  项目经理正在领导一个项目,扩建一个小镇上的制造工厂。在上次市议会会议期间，当地居民对该项目表示担忧。项目经理将当地居民添加到相关方参与计划中,项目经理接下来应该做什么?
A project manager is leading a project to expand a manufacturing plant in a small town.During the last city council meeting,local residents raised about the project.The project manager adds the local residents to the stakeholder engagement plan.What should the project manager do to address their concerns?
A：向当地的报纸提交一份文件,解释该扩建及其对社区的好处。
Submit an article to the local newspaper explaining the expansion and how it will benefit the community.
B：在市议会厅外安装一个滚动屏幕以提供项目进度更新。
Place a bulletin board outside the city hall to provide project progress updates.
C：在下次市议会会议期间召开互动问答会议
Hold an interactive question and answer session during the next city council meeting.
D：使用电视和广播点让他们了解项目及其担忧的问题
Use TV and radio spots to keep them informed about the project and their concerns.

|*|*|正确答案：D 

解析：PMBOK(6)P527-  ||-|| 13.2.2.2
沟通技能。在开展管理相关方参与过程时，应该根据沟通管理计划，针对每个相关方采取相应的沟通方法。因为相关方人数过多，采取电视和广播是有效地沟通方式。 其他选项：A报纸受众较低，B议会厅安排没几个人看得到，C受众也不大。

 ==-=--=

5、  由于技术已在其他工厂运行，一个项目的用户验收测试被省略。但是，在实施后，该技术不能按预期起作用。项目经理应该怎么做？
User acceptance tests on a project have been omitted since the technology is operational at other factories.However,after implementation,the technology is not working as expected. What should the project manager do?
A：查看缺陷报告以确定并解决问题
Review the defect report ti identify and solve issue
B：提交变更请求
Submit a change request
C：执行根本原因分析，以确定纠正措施
Conduct a root cause analysis to identify corrective actions
D：使用测试脚本来解决问题
Use test scripts to resolve the issue

|*|*|正确答案：C 

解析：PMBOK(6)P304-  ||-|| 8.3.2.5
数据表现-因果图。发生了问题，先分析原因并确定措施。 其他选项：A查看报告意义不大，B是解决方法之一，因此在C的后面，D测试脚本无法解决问题

 ==-=--=

6、 在趋势分析过程中，项目经理得出结论，项目绩效已经恶化。这个结论是基于什么信息得出的？
During the trend analysis,the project manager concluded that the project performance has deteriorate. On What information is this conclusion based?
A：挣值分析(EVA)
Earned value analysis (EVA)
B：完工估算(EAC)
Estimate at Completion (EAC)
C：质量成本(COQ)
Cost of Quality (COQ)
D：计划价值(PV)
Planned value (PV)

|*|*|正确答案：B 

解析：PMBOK(6)P264-  ||-|| 7.4.2.2
趋势分析。 趋势分析，答案只有EAC是趋势分析，而趋势分析包括（EAC/ETC/TCPI等），偏差分析包括（SV/CV/SPI/CPI)，挣值分析包括（EV/PV/AC) 其他选项：A挣值分析包括计算（EV/PV/AC)

 ==-=--=

7、 项目经理正在规划一个新的多公司参与项目，每家公司都有多名项目相关方。项目经理应该使用什么沟通方法？
A project manager is planning a new multi-company project that has several stakeholders per company. What communication method should the project manager use?
A：交互式沟通
Interactive
B：推式沟通
Push
C：拉式沟通
Pull
D：选择性沟通
Selective

|*|*|正确答案：C 

解析：解析：PMBOK（6）  P374- ||-|| 10.1.2.5
沟通方法。拉式沟通适用于大量复杂信息或大量信息受众的情况（多公司多名相关方）。它要求接收方在遵守有关安全规定的 前提之下自行访问相关内容。这种方法包括门户网站、企业内网、电子在线课程、经验教训数 据库或知识库。 选项A：交互式沟通适用于实时的、多向的信息交换，沟通成本较高。 选项B：推式沟通，这种方式可以确保信息的发送，但是不能确保信息送达目标和被目标受众理解。 选项D: 没有此沟通方法。

 ==-=--=

8、 在项目的最后一个星期,一场强风暴造成损害并影响项目的交付日期，项目经理应该怎么做？
During the last week of the project,a strong storm causes damage and impacts the project's delivery date ?What should the project manager do?
A：提交变更请求
Submit a change request.
B：将其报告给项目发起人
Report it to the project sponsors.
C：使用储备分析技术
Use the reserve analysis technique.
D：更新风险登记册
Update the risk register.

|*|*|正确答案：A 

解析：PMBOK（6）P457- ||-|| 11.7.3.2
监督风险-变更请求。执行监督风险过程后，可能会就成本基准和进度基准，或项目管理计划的其他组件提出变更请求，应该通过实施整体变更控制过程对变更请求进行审查和处理。 变更请求可能包括：建议的纠正与预防措施，以处理当前整体项目风险级别或单个项目风险。 选项B：是否报告发起人，要看风险应急计划中规划的应对策略。 选项C：储备分析技术用以判断风险敞口和储备之间的关系。 选项D：风险应急计划的执行结果更新到风险登记册，在选项A之后。

 ==-=--=

9、  一个软件开发项目的项目章程已获批准,项目经理召集会议准备项目管理计划,项目经理得知开发团队成员对他们的角色和职责感到困惑。 若要避免这个问题,项目经理应该事先做什么?
Approval of the project charter for a software development project has been obtained and the project manager calls a meeting to prepare the project management plan.The project manager learns that the development team members are confused about their roles and responsibilities. What should the project manager have done to avoid this?
A：审查沟通管理计划
Reviewed the communication management plan.
B：制定项目资源管理计划
Developed the project resource management plan.
C：创建一份相关方登记册
Created a stakeholder register.
D：分享工作分解结构(WBS)
Shared the work breakdown structure(WBS).

|*|*|正确答案：B 

解析：PMBOK(6)P318-  ||-|| 9.1.3.1
资源管理计划。团队的角色与职责在资源管理计划里。 其他选项：A沟通管理计划是关于项目沟通的信息，C相关方登记册记录了相关方的基本信息，D的WBS为范围基准的一部分

 ==-=--=

10、 项目经理意识到数据收集不足并且不符合质量管理计划，这种疏忽将严重影响项目的制约因素。项目经理下一步应该怎么做？
A project manager realizes that data gathering is insufficient and does not conform to the quality management plan. This oversight will seriously affect the project's constraints. What should the project manager do next?
A：提交变更请求，以修订质量管理计划
Submit a change request to revise the quality management plan.
B：遵行因果分析，并将结果报告给项目发起人
Conduct a cause-and-effect analysis, and report the results to the project sponsor.
C：确定不合格的根本原因
Determine the root cause of the nonconformance.
D：通知项目发起人，并要求与相关方开会，以修订质量管理计划
Inform the project sponsor, and request a meeting with stakeholder to revise the quality management plan.

|*|*|正确答案：C 

解析：PMBOK(6)P292- ||-||  8.2.2.2
根本原因分析。根本原因分析是确定引起偏差、缺陷或风险的根本原因的一种分析技术。与质量管理计划有偏差，要先分析偏差的根本原因。 其他选项：A，错的不是质量管理计划，B上报没有意义，D在C之后。

 ==-=--=



`
// 初始化数据
window.initCurData(window.testQuestion)
