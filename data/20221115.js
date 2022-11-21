
/** 正确答  */
window.rigthAnswer = ''

window.rightAnswerA = '' // 答案+章节

// 敏捷实践指南
/** 接龙数据 */
window.allData = `


1. 王鑫 CBBAD  CACDD
2. 郑鸿斌 CBBAD DACDD
3. 陆婉仪 CBDAD BACDB
4. 汪关心 CBCAD BACDD
5. 吴贤玲 CBCAD DACDD
6. 艾克丝 CBDCD CACCB
7. 汤燕婷 CBCAD BACCB
8. 温炳辉 CBBAD DACCD
9. D_uende CBBAD CAACB
10. NICOLE CBBAD DACCD
11. KingC. DBBDBBACCD
12. 陈永发 CBDAD DAACD
13. 陈小棋 CBBAD BACCD
14. 卢维荣 CBBAD BACCB
15. 李翠艳 CCDAD BACCD
16. 黄雅君 CBCAD DACCD
17. 林英 CBBAD DACCD
18. 赵艳焜 CBCAD BACCD
19. 钟洁莹 CBBAD BABCD
20. 易江涛 CBAAD BACCA
21. 袁天赐 CBCAD BACCD
22. 韶华倾负。 CBBCA CACCD
23. 黄建珩 cbbad bacca
24. 谢成寿 CABAB AACDD
25. 郑舒颖 CAAAD BDCDB
26. 洪俊鑫 CBCAD BDACD
27. 吴佳佳 CDCCD BACDC
28. 等等  CADDB CACDC
29. 陈秋丽Kitty CBDAD DAABB
30. 陈雅 CBBBB BACCD
31. 刘思婷 CBBAD DACCD
32. 陈少芬 CBDAD BACCD
33. 阮晓梦 CBDAD BAACD
34. 莫德坚 CBDAD BACDD
35. 于涛 CBBDD DAADB
36. 文博 CBBAD DACDD
37. 李莹 CBBAD CACDB
38. 杨国鸿 CBBDD DACDD
39. 陈书婷 CBCAD AADCC
40. 甘玉嫦 CDDDD DDCDB
41. 慌、如隔世 CBDAD CAABC
42. 黄霍淋 CBBDD BDCCD
43. 李勇发 CBDBD   CACDD
44. 李凯旋 CCDADBACCA
45. 熊佳  CBBAD BACDB
46. 郭晓丽 CCBBB BAADD
47. 陈安然 BCDAD BACCC
48. 胡林宇 BBCAD BACCB
49. 郭威 CBBAD DACCD

`
// ||-|| 敏捷实践指南

/**
 * 试题
 * 题目之间的间隔符：  ==-=--=
 * 答案间隔符： |*|*|
 * 章节间隔符： ||-||
 * **/
window.testQuestion = `

1、  敏捷团队正在根据商业分析师团队提供的用户故事开发产品。在第四次冲刺之后，相关方举行了一次演示，其中三个已完成的故事获得通过，其余两个故事未能满足相关方的期望，项目经理应该怎么做？
An Agile teams is working on product according to the user stories provided by a team of business analysts. After the fourth sprint, a demo for stakeholders is held and Three completed stories pass, The remaining two stories fail to meet stakeholders expectations. What should the project manager do?
A：要求商业分析师开发新的用户故事
Ask the business analysts to develop new user stories
B：审查用户故事并签发变更请求
Review the user stories and issue a change request
C：确认相关方的期望，然后更新并重新编写用户故事
Confirm stakeholder expectations, then update and rework the user stories
D：启动一个新项目，将修订后的用户故事纳入工作范围
Initiate a new project to incorporate revised user stories into the scope of work


|*|*|正确答案：C 

解析：||-|| 敏捷实践指南
在敏捷方法中，用户故事未通过，要重新梳理相关方的期望，并重新编写用户故事。 选项A：商业分析师负责收集需求 选项B：用户故事没有满足相关方的需求，需要重新开发。 选项D：没有进入到收尾阶段。

==-=--=


2、  在识别除项目经理之外的五名相关方之后，项目经理现在需要确定项目沟通的复杂性，潜在沟通渠道有多少？
After identifying five stakeholders besides the project manager, the project manager now needs to determine the complexity of the project communication, how many potential communication channels are there?
A：20
B：15
C：10
D：55


|*|*|正确答案：B 

解析：PMBOK(6)P369- ||-||10.1.2.2
 沟通需求分析，沟通渠道数。潜在沟通渠道数为n(n-1)/2，n代表相关方数量。此题6*5/2=15。注：项目经理也要算进去。

==-=--=


3、  项目经理正在为客户管理一个跨国项目，拟采用最新技术替换其电信基础设备。项目经理得知，在某些国家，必须遵循特定的环境规定来处置被替换的硬件。在制定商业论证时，未考虑到这些规定，项目经理应该怎么做？
A project manager is leading a multinational project for a customer to replace its telecommunications infrastructure with the latest technology. The project manager learns that, in some countries, specific environmental regulations must be followed to dispose of the replaced hardware. In the development of business arguments these rules have not be consider. What should the project manager do?
A：更新商业论证以包含硬件处置成本
Update the business case to include the cost of the hardware disposal.
B：建议发起人将遵守这项规定的成本纳入商业论证
Recommend the sponsor to incorporate the cost of complying with this provision into the business case.
C：提出一个包含遵守环境法规成本的实施策略
Propose an implementation strategy that includes compliance with environmental regulations.
D：根据业务需求识别主要可交付成果，以管理客户期望并遵守该规定
Identify key deliverables based on business needs to manage customer expectations and comply with this requirement.


|*|*|正确答案：B 

解析：PMBOK（6）P30- ||-||1.2.6.1
项目商业论证。项目商业论证指文档化的经济可行性报告，用来对尚缺乏充分定义的所选方案的收益进行有效论证。新了解到的信息要重新进行商业论证，用来论证项目的可行性。 选项AC：要评估环境规定带来的影响，而不是简单的把成本加进去。 选项D：问题聚焦在新规定对商业论证的影响，而不是管理相关方期望。

==-=--=


4、  公司正在开发一些新产品，在测试阶段，客户发现该产品的一个严重缺陷。项目经理应该使用什么来确定合适的解决方案？
A company is developing a new produce.During the testing stage,customers identify a serious defect with it. What should the project manager use to determine an appropriate solution?
A：因果图
Cause-and-effect diagram
B：六西格玛
Six Sigma
C：专家判断
Expert judgement
D：面向X的设计
Design for X


|*|*|正确答案：A 

解析：PMBOK(6)P293-  ||-||8.2.2.4
因果图。因果图，又称“鱼骨图”、“why-why分析图”或“石川图”，将问题陈述的原因分解为离散的分支，有助于识别问题的主要原因或根本原因。发现了一个严重问题，要先分析原因，因此选择因果图。

==-=--=


5、 项目经理加入一个项目，但项目团队缺乏必要的技能来产生一个关键可交付成果。项目经理应该怎么做？
The project manager joins a project, but the project team lacks the necessary skills to create a key deliverable. What should the project manager do?
A：将该可交付成果分配给一名拥有学习新技能能力的团队成员
To assign the deliverables to a team member who is capable of learning new skills
B：与项目发起人协商，聘请拥有必要技能的外部资源
To negotiate with the project sponsor to hire external resources with the necessary skills
C：终止执行项目，直到必要的资源出现
To terminate the project execution until the necessary resources appear
D：将培训作为项目管理计划中项目工作的组成部分
To include training as part of the project works in the project management plan


|*|*|正确答案：D 

解析：PMBOK(6)P342-  ||-||9.4.2.6
培训。技能的问题，都可以通过培训来解决。培训的时间与成本也要纳入项目管理计划。 其他选项：看到技能优先培训，ABC的优先级没有D高。

==-=--=


6、 供应商建议项目经理,为了满足要求的规格,需要更换特定材料。为确保成本基准不受影响,项目经理应该审查下列哪一项?
A supplier activates the project manager that,to meet the requested specifications,replacement of a specific material is required,What should the project manager to ensure that the cost baseline is unaffected?
A：管理储备
Management reserve.
B：应急储备
Contingency reserve.
C：成本预测
Cost forecast.
D：挣值(EV)分析
Earned value(EV)analysis.


|*|*|正确答案：D 

解析：PMBOK(6)P264-  ||-||7.4.2.2
数据分析-挣值分析。 要变更材料，先分析影响，然后再考虑其他措施，因此选D，挣值分析，确定成本绩效与基准是否一致 其他选项：A管理储备会动用基准，B在D的后面。C成本预测是输出。

==-=--=


7、  一位产品负责人在一个房间里放置了五台笔记本电脑，并邀请了四位不同的终端用户来测试新系统的性能。项目组的开发人员也被邀请到房间观察用户，做笔记并回答基本问题。场景中描述了以下哪些敏捷技术和工具？
A product owner has set up a room with five laptops and invited four different end-users to test the capabilities of a new system. The developers from the project team have been invited in the room to observe the users take notes and answer the basic questions. Which of the following agile techniques and tools has been described in the scenario?
A：可用性测试
Usability testing
B：自动化测试
Automated testing
C：脚本测试
Scripted tests
D：探索性测试
Testing exploratory testing


|*|*|正确答案：A 

解析：||-|| 敏捷实践指南
“可用性测试”是测试终端用户对系统做出的反应的测试。此测试的主要目标是确定终端用户使用系统的难易程度，并发现可能导致系统重新设计的可用性问题或缺陷。在上述场景中，终端用户被邀请测试新系统的性能，开发人员观察用户与系统的交互过程，做笔记并回答基本问题。

==-=--=


8、  项目团队未能监督一项高风险,因此未能按时执行减轻措施,项目经理指示团队立即执行该措施,但另一位经理否决了这一指示,因为对项目没有造成负面影响。项目经理下一步应该做什么?
A project team failed to monitor a high risk,so the mitigation action was not performed on time.The project manager instructs the team to perform the action immediately,but anther manger overrules that since there was no negative impact. What should the project manager do next?
A：提交变更请求
Submit a change request.
B：询问团队未能监督风险的原因
Ask the team why the risk was not monitored
C：与团队一起重新评估风险
Reassess the risk with the team.
D：遵循经理的指示
Follow the manger's instructions.


|*|*|正确答案：C 

解析：PMBOK(6)P457-  ||-||11.7.2.3
 风险审查会。在风险审查中，还可以识别出新的单个项目风险（包括已商定应对措施所引发的次生风险），重新评估当前风险。此风险没有影响，需要重新评估此风险。 其他选项：先重新评估，再采取AD的措施。B后面再说。

==-=--=


9、 在职能团队交付产品后，项目经理使用统计抽样和检查来确定产品是否达到预期需求。 这个过程的输出是什么？
After a functional team delivers the product, the project manager uses statistical sampling and inspection to determine if the product performs as expect. What is the output of this process?
A：项目范围说明书
Project scope statement
B：质量测量指标
Quality metrics
C：核实的可交付成果
Verified deliverables
D：质量审计报告
Quality audit report


|*|*|正确答案：C 

解析：PMBOK(6)P305- ||-||8.3.3.2
控制质量的输出-核实的可交付成果。批量的产品的质量，是通过抽样来进行检验的，检验结束合格后，可交付成果就变成了核实的可交付成果。 其他选项：ABD都不是检验以后的输出，检验针对的是可交付成果的检验。

==-=--=


10、  项目中的每日站会已被证明是能解决问题和掌握进展的会议。你的团队决定在每日站会期间讨论问题，但15分钟例会时长已不够用。谁以后必须参加每日站会？
The daily Scrum in your project has turned out to be a problem-solving activity and a status meeting. Your team decided to talk about problems during the daily Scrum, and the 15- minutes time slot is no longer viable. Going forward, who must attend this meeting?
A：Scrum主管、产品负责人和开发团队。
The scrum master, the product owner, and the development team.
B：只有开发团队和Scrum主管。
The development team and the scrum master only.
C：仅开发团队和产品负责人。
The development team and the product owner only.
D：开发团队，Scrum主管可选择参加。
The development team with the scrum master as an optional attendee.


|*|*|正确答案：D 

解析：||-|| 敏捷实践指南
每日站会是一个简短的协作会议，团队在其中回顾前一天的进展，报告当天的工作计划，并强调已经遇到的或预计会遇到的障碍。我们应该鼓励团队成员而不是 项目经理或领导者来推进每日站会，确保每日站会不会变成状态更新会议，而是作为团队自我组织和相互作出承诺的会议。

==-=--=





`
// 初始化数据
window.initCurData(window.testQuestion)
