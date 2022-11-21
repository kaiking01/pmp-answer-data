
/** 正确答  */
window.rigthAnswer = ''

window.rightAnswerA = '' // 答案+章节

// 敏捷实践指南
/** 接龙数据 */
window.allData = `
1. 卢维荣 ACDAA BDDDB
2. 温炳辉 ACDAA BDDAB
3. 谢成寿 bcdca bdcbb
4. 郭晓丽 DBDAA DADBB
5. 易江涛 BCDAA BDDBB
6. NICOLE ACDAA BDDBB
7. 黄雅君 ACDAA BDBBB
8. 熊佳 ACDAA BDDAB
9. 陈永发 ACDAA BADAB
10. 王鑫 DCDCA DDABB
11. 陈小凤 acdaa bdddb
12. 赵艳焜 ADDAA BDDBB
13. 汤燕婷 BCDCA DDDAB
14. KingC. BCDCA BBDBB
15. 刘思婷 ACDAA BDDBB
16. 等等 DDDAA BABAD
17. 韶华倾负。 BCDAA BDDBB
18. 陈少芬 ACDCA BBCBB
19. 钟洁莹 ADDAA BDCBB
20. 陈小棋 ACDAA BDDBB
21. 盛洁 BCDAA CBABB
22. 王琦 ACDAA BDCAB
23. 莫德坚 ACDAA BDBBB
24. 于涛 DCDAD BBBAD
25. 吴贤玲 ACDAA BDCBB
26. 黄建珩 acdba cdcbd
27. 文博 ACDAA BACBB
28. 艾克丝 ACDAA BDCBB
29. 郑鸿斌 ACDAA  BDDBB

`
// 敏捷实践指南
/**
 * 试题
 * 题目之间的间隔符：  ==-=--=
 * 答案间隔符： |*|*|
 * 章节间隔符： ||-||
 * **/
window.testQuestion = `
1、 在项目执行阶段,生产经理要求项目经理包含一项已经证明可以显著提高产量的变更,项目经理首先应该做什么?
During a project's execution phase,the production manager asks the project manager to incorporate a change that has been proven to significantly increase output.What should the project manager do first?
A：  向变更控制委员会(CCB)提交一份变更请求
Submit a change request to the change control board(CCB)
B：  要求生产经理进行成本效益分析
Ask the production manager to conduct a cost-benefit analysis
C：  包含提议的变更
Incorporate the proposed change
D：  更新变更日志
Update the change log


|*|*| 正确答案：A 

解析：知识点出处：PMBOK 6th 页码：P113 章节：||-|| 4.6
 变更流程：变更提出后，先分析影响，再提交含解决措施的变更请求给CCB。 审批前，三步骤：提出变更-分析影响-提交审批

==-=--=

2、  在获取成功完成项目的活动中，项目团队喜欢互动和交流项目执行的故事，此时项目团队处于什么阶段？
In the event of successful completion of the project, the project team likes to interact and exchange project execution stories. What phase is the project team in?
A：  震荡阶段
Oscillation phase
B：  调整阶段
Adjustment phase
C：  成熟阶段
Performing phase
D：  规范阶段
Specification phase


|*|*| 正确答案：D 

解析：知识点出处：PMBOK 6th 页码：P338 章节：||-|| 9.4 
塔克曼阶梯理论： · 形成阶段 · 震荡阶段 · 规范阶段 · 成熟阶段 · 解散阶段 交流项目执行的故事，属于学习相互信任的阶段，因此属于规范。

==-=--=

3、 一名新项目经理被任命管理一个正在执行的项目。针对这个项目，三天内将召开一次重要的里程碑核实会议。若要确保相应人员受邀参加会议，项目经理应该怎么做？
A new project manager is appointed to an ongoing project for which an important milestone validation meeting will occur in three days. What should the project manager do to ensure that the appropriate people are invited to this meeting?
A：  请求高级管理层提供建议
Ask senior management for recommendations
B：  参照以往里程碑核实会议的与会者
Refer to the attendance at previous milestone validation meetings
C：  与项目团队讨论该问题
Discuss it with the project team
D：  查看相关方管理计划
Consult the stakeholder management plan


|*|*| 正确答案：D 

解析：知识点出处：PMBOK 6th 页码：P522 章节：||-|| 13.2.3.1 
相关方参与计划：是项目管理计划的组成部分。它确定用于促进相关方有效参与决策和执行的策略和行动。相关方参与计划可包括（但不限于）调动个人或相关方参与的特定策略或方法。 相关方的参与策略在相关方参与计划里。

==-=--=

4、  在一个软件开发项目中，开发人员发现一个可以提高速度的新工具。项目经理分析发现这种新工具能够缩短当前开发阶段20%的时间，并节省10%的项目成本。在变更控制委员会批准之后，项目经理修订了项目进度。这属于哪种风险应对类型？
During a software development project, a developer discovers a new tool that could increase development speed. The project manager’s analysis finds implementing the new tool could shorten the current development phase by 20% and save 10% of the project’s cost. After approval from the change control board, the project manager revises the project schedule. What is the type of risk response?
A：  开拓
Exploit
B：  接受
Accept
C：  增强
Enhance
D：  转移
Transfer


|*|*| 正确答案：A 

解析：知识点出处：PMBOK 6th 页码：P444 章节：||-|| 11.5.2.5 
开拓：如果组织想确保把握住高优先级的机会，就可以选择开拓策略。此策略将特定机会的出现概率提高到100%，确保其肯定出现，从而获得与其相关的收益。

==-=--=

5、  一个在瀑布式项目管理方法方面经验丰富的项目团队被分配到一个敏捷项目中。为了使转换更容易，已经决定保留瀑布方法的一些要素。在迭代审查期间，意识到开发团队之间的误解导致了工作的重复。项目经理如何处理这个问题？
A project team that is experienced in the waterfall project management approach has been assigned to their first agile project. To make the transition easier, it has been decided to keep some elements of the waterfall approach in place. During the iteration review, it was realized that a misunderstanding among the development team has led to a duplication of efforts. How might the project manager address this issue?
A：  在即将到来的迭代回顾中提出该话题
Bring up the topic during the upcoming iteration retrospective
B：  什么都不做，因为团队成员正在从瀑布过渡到敏捷
Do nothing since the team members are transitioning from waterfall to agile
C：  弹回到瀑布项目管理框架
Fallback to a waterfall project management framework going forward
D：  提交变更请求以更新沟通管理计划
Submit a change request to update the communications management plan


|*|*| 正确答案：A 

解析：知识点出处：敏捷实践指南 页码：P50 章节：||-|| 5.2.1
 回顾总结会：回顾是最重要的一个实践，原因是它能让团队学习、改进和调整其过程。 迭代审查会过后，将发现的问题在后续的回顾总结会提出来。

==-=--=

6、  项目团队由前军事和非军事小组成员组成。没有军事背景的团队成员认为前军事团队成员在他们的项目方法中过于结构化和僵化。前军事成员认为其他团队成员更随意的方式表明他们对该项目不太投入。什么样的工具或技术对项目经理和团队成员进行有效沟通最有用？
A project team is comprised of former military and non-military team members. The team members without a military background view the former military team members as overly structured and rigid in their approach to the project. The former military members view the other team members' more casual approach as an indication that they are less committed to the project. What tool or technique will be the most useful for the project manager and the team members to communicate effectively?
A：  政治意识
Political awareness
B：  团队章程
Team charter
C：  冲突管理
Conflict management
D：  文化意识
Cultural awareness


|*|*| 正确答案：D 

解析：知识点出处：PMBOK 6th 页码：P376 章节：||-|| 10.1.2.6 
文化意识：具有文化意识并采取后续行动，能够最小化因项目相关方社区内的文化差异而导致的理解错误和沟通错误。文化意识和文化敏感性有助于项目经理依据相关方和团队成员的文化差异和文化需求对沟通进行规划。 军事背景和非军事背景人员有巨大的文化差异。

==-=--=

7、 项目团队成员因杰出工作和满足项目成本目标而获得奖励，高级经理向项目经理确认谁可以获得奖励，项目经理可以在哪里获得此奖励的定义标准和频率？
The project team members are rewarded for outstanding work and meeting project cost objectives. The senior manager confirms to the project manager who can get the reward. Where can the project manager get the definition criteria and frequency of this award?
A：  责任分配矩阵（RAM）
Responsibility assignment Matrix (RAM)
B：  项目管理计划
Project management plan
C：  人员解散计划
Personnel dissolution plan
D：  资源管理计划
Resources management plan


|*|*| 正确答案：D 

解析：知识点出处：PMBOK 6th 页码：P319 章节：||-|| 9.1.3.1
 资源管理计划：认可计划。将给予团队成员哪些认可和奖励，以及何时给予。 奖励的频率和标准在资源管理计划里。

==-=--=

8、  新任命的项目经理获悉，相关方对已识别的项目问题和风险非常担心，他们对超过一个月时间里没有任何沟通表示不满。新项目经理应该怎么做？
The newly appointed project manager was informed that the stakeholders were very worried about the identified project issues and risks. They were dissatisfied with no communication for more than a month. What should the new project manager do?
A：  实施现有沟通管理计划和相关方参与计划
Implement the existing communication management plan and stakeholder management plan
B：  更新现有沟通管理计划和相关方参与计划，并立即向相关方提供有关问题和风险
Update the existing communication management plan and stakeholder management plan and immediately provide stakeholders with relevant issues and risks
C：  与相关方开会以确定沟通所需的频率，然后立即向他们提供有关这些问题和风险
Meet with stakeholders to determine the frequency of communication needed, and then immediately provide them with these issues and risks
D：  与关键相关方开会，然后更新沟通管理计划和相关方参与计划
Meet with key stakeholders and then update the communication management plan and stakeholder management plan


|*|*| 正确答案：D 

解析：知识点出处：PMBOK 6th 页码：P528 章节：||-|| 13.3.2.5
 会议：会议用于讨论和处理任何与相关方参与有关的问题或关注点。 · 问题解决； · 经验教训和回顾总结； · 项目开工； 管理相关方参与需要尽可能当面与其沟通并达成一致

==-=--=

9、  作为制定进度计划过程的一部分，项目经理使用甘特图创建项目进度计划。三个Scrum团队将开发项目的可交付成果。由于依赖关系，团队将需要通过每周两次的延长的站会来协调他们的工作。项目经理接下来应该做什么？
As part of the Develop Schedule process, the project manager creates the project schedule using a Gantt chart. Three Scrum teams will develop the project deliverables. Due to dependencies, the teams will be required to coordinate their work twice a week using extended standup meetings. What should the project manager do next?
A：  提交将甘特图表切换到燃尽图表的变更请求
Submit a change request to switch the Gantt chart to burndown chart
B：  在项目进度计划中包含Scrum of Scrums（SoS）会议
Include Scrum of Scrums (SoS) meetings in the project schedule
C：  使进度赶工以消除团队之间的依赖关系
Crash the schedule to eliminate the dependencies between the teams
D：  在项目进度计划中反映团队的实际速度
Reflect the actual velocity of the teams in the project schedule


|*|*| 正确答案：B 

解析：知识点出处：||-|| 敏捷实践指南
 页码：P111 章节：A3.10 Scrum of Scrums：是由多个 Scrum 团队而不是一个大型 Scrum 团队所使用的一种技术，每个团队包含三到九名成员来协调其工作。每个团队的代表会与其他团队代表定期召开会议，每日例会，或是一周两次或三次。其目标是确保团队协调工作并清除障碍，以优化所有团队的效率。 有依赖关系的Scrum团队，需要开SoS会议来优化效率。

==-=--=

10、  在当前冲刺期间，产品负责人的可用性受到了其他承诺的限制。在每日站会上，团队成员抱怨他们不能从产品负责人那里得到答案，结果，产品增量的开发被延迟。对于scrum master来说，最好的行动方案是什么？
During the current sprint, the product owner's availability has been limited due to other commitments. At the daily standup, the team members complain that they cannot get answers from the product owner, and, as a result, the development of the product increment is delayed. What is the best course of action for the scrum master?
A：  让高级开发人员做出产品决策
Let the senior developers make the product decisions
B：  代表团队成员联系产品负责人
Contact the product owner on behalf of the team members
C：  在冲刺审查期间提及可用性问题
Mention the availability issue during the sprint review
D：  在冲刺回顾中讨论可用性问题
Discuss the availability issue at the sprint retrospective


|*|*| 正确答案：B 

解析：知识点出处：||-|| 敏捷实践指南
 页码：41 章节：4.3.2 产品负责人Product Owner ·创建待办列表并排序 ·确认工作优先顺序 ·提供反馈 ·指导开发方向 PO的角色必不可少，因此需要与PO讨论让他参加项目。

==-=--=





`
// 初始化数据
window.initCurData(window.testQuestion)
