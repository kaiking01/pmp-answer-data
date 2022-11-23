
/** 正确答  */
window.rigthAnswer = ''

window.rightAnswerA = '' // 答案+章节

// 敏捷实践指南
/** 接龙数据 */
window.allData = `
1. 易江涛 B(AD)CDD BDCDA
2. 毅州牧 B(AD)ADD  BDCCA
3. 汪关心 B（AD）CDD  BDDBA
4. 王鑫 B(AD)CUD  BDCBA
5. 温炳辉 B(AD)CCD BDDDA
6. 赵艳焜 B（AD）CBB DDDCA
7. 等等 A（AD）CAD BADDA
8. 黄建珩 b（ad）cdd bdcaa
9. 钟洁莹 B(AD)BBD BDCBA
10. 谢成寿 b(ad)ccd bdcbb
11. 洪俊鑫 D(AD)CAD BDDBA
12. 郭晓丽 B（AD）CAD BDDBB
13. 莫德坚 B(AD)CDD BDCDB
14. 卢维荣 B(AD)CDD BDCCA
15. 韶华倾负。 A(AD)CCB BDDBA
16. 汤燕婷 B(AD)CDD BDCAA
17. NICOLE B(AD）CDB BDCDA
18. 陈秋丽Kitty B(AD)CBB BDDDB
19. 熊佳 B（AD）BBD BDCDA
20. 陈少芬 B(AD)CDD BDCAA
21. 雪落无痕 B （AD） CBB   BDDCB
22. 黄雅君 B(AD)CDD DDCBA
23. 李勇发 B(AD)CCD  CDCCA
24. 阿狸 D（AD）CDDBDDAC
25. 李凯旋 B (AD)ACD BDCCA
26. 刘思婷 B(AD)CBD BDCBA
27. 陈安然 B(AD) CCD BDABA

`
// 敏捷实践指南
/**
 * 试题
 * 题目之间的间隔符：  ==-=--=
 * 答案间隔符： |*|*|
 * 章节间隔符： ||-||
 * **/
window.testQuestion = `

1、  敏捷团队正试图确定理想的迭代长度。团队成员对此进行了长时间的激烈争论，但没有人愿意妥协。scrum master被召来帮助解决冲突。对于scrum master来说，最好的行动方案是什么？
An agile team is trying to determine the ideal iteration length. The team members are having a long and intense argument about it, but no one is willing to compromise. The scrum master is called in to help resolve the conflict. What is the best course of action for a scrum master?
A：  避免参与过程并让团队达成共识
Avoid being involved in the process and let the team work out toward a consensus
B：  建议评估每个建议的迭代长度的优缺点
Recommend evaluating the pros and cons of each one of the suggested iteration lengths
C：  如果团队无法达成协议，以纪律处分威胁他们
Threaten the team with disciplinary actions if they are unable to come to an agreement
D：  在关系受损之前为团队做决定，从而打破僵局
Break the impasse by making the decision for the team before relationships are damaged

|*|*| 正确答案：B 

解析：知识点出处：||-|| 敏捷实践指南 
页码：P34 章节：4.2.1 仆人式领导的职责：仆人式领导通过管理关系，在团队内和组织中建立沟通与协作。这些关系可以帮助领导在组织中得心应手地为团队提供支持。 仆人式领导促进协作沟通，ACD都是在避免、强迫团队。


 ==-=--=


2、 [多选] 敏捷团队正在监视项目进度计划的状态。他们可能会使用哪些工具？（选择两项）
An agile team is monitoring the status of the project schedule. What tools will they likely use? (Choose 2)
A：  燃起图
Burnup Chart
B：  网络图
Network Diagram
C：  帕累托图
Pareto Chart
D：  燃尽图
Burndown Chart
E：  鱼骨图
Fishbone diagram

|*|*| 正确答案：A,D 

解析：知识点出处：||-|| 敏捷实践指南 
页码：P62 章节：5.4.1 燃尽图&燃起图：某些基于迭代的项目使用燃尽图查看项目随时间的进展情况，某些团队更喜欢燃起图。 两张图除了方向，本质上没有差别。


 ==-=--=


3、 离完成分配的任务只剩 30 天时，一名项目团队成员离开公司。可惜的是，没有可用的替代资源。项目经理在项目进度计划中包含一个应急储备金。为了计算剩余的应急储备金，项目经理应该使用什么技术？
From the completion of assigned tasks only 30 days, a project team members leave the company. Unfortunately, there is no available alternative resources. Project manager includes a contingency reserve in the project schedule. In order to calculate the remaining contingency reserve, the project manager should use what technology?
A：  风险审计
risk audit
B：  趋势分析
trend analysis
C：  储备分析
Reserves analysis
D：  技术绩效衡量
Technical performance measurement

|*|*| 正确答案：C 

解析：知识点出处：PMBOK 6th 页码：P456 章节：||-|| 11.7.2.1 
储备分析：在整个项目执行期间，可能发生某些单个项目风险，对预算和进度应急储备产生正面或负面的影响。储备分析是指在项目的任一时点比较剩余应急储备与剩余风险量，从而确定剩余储备是否仍然合理。 题干中有明确说明计算储备金，明显是在做储备分析。


 ==-=--=


4、  为了使新确定的相关方尽早参与项目，scrum master建议邀请他们参加即将举行的冲刺审查会议，以向相关方证明团队正在朝着正确的方向发展，并从相关方那里获得有关团队工作完成情况的反馈。以下哪个是邀请相关方参加本次会议的另一个原因？
To engage the newly identified stakeholders in the project at the earliest opportunity, the scrum master suggests inviting them to the upcoming sprint review meeting to demonstrate to the stakeholders that the team is moving in the right direction and get feedback from the stakeholders about what the team has accomplished. Which of the following is another reason for inviting the stakeholders to this meeting?
A：  反思团队绩效
To reflect on the team performance
B：  为下次冲刺确定高风险用户故事的优先级
To prioritize high-risk user stories for the next sprint
C：  重新确定发布待办事项列表优先级
To reprioritize the release backlog
D：  讨论下次冲刺的高级别计划
To discuss the high-level plans for the next sprint

|*|*| 正确答案：D 

解析：知识点出处：||-|| 敏捷实践指南
 页码：P55 章节：5.2.5 展示/评审：当团队以用户故事的形式完成特定功能时，团队会定期展示工作产品。看过展示后，产品负责人接受或拒绝故事。 冲刺评审会议的结果是一份修订的产品待办列表，确定很可能进入下个冲刺的产品代办列表。


 ==-=--=


5、 项目经理在执行一个资源有限，期限严格的项目。需要注意的是，该项目目前落后于进度。德国的审查显示，一名资源被过度分配，项目经理下一步应该怎么做？
The project manager is implementing an attractive project with limited resources and strict deadlines. The project is currently lagging behind the schedule. The German review shows that a resource is over-allocated. What should the project manager do next?
A：  重新分配来自另一个项目不必要的资源
Redistribute unnecessary resources from another project
B：  为延迟的任务增加资源，并再次执行资源平衡
Increase resources for deferred tasks and execute resource leveling again
C：  提出一项变更请求，以减少范围
Make a change request to reduce the scope
D：  计算关键路径以确定对项目的影响，并重新分配资源
Calculate critical path to determine the impact on the project and redistribute resources

|*|*| 正确答案：D 

解析：知识点出处：PMBOK 6th 页码：P227 章节：||-|| 6.6.2.2
 关键路径法：检查关键路径的进展情况有助于确定项目进度状态。关键路径上的偏差将对项目的结束日期产生直接影响。评估次关键路径上的活动的进展情况，有助于识别进度风险。 遇到问题应该先确认影响，再采取措施。


 ==-=--=


6、  一个项目是为了设计新的政府机构服务,其所有可交付成果均已获得验收。设计活动产生了许多机密文件。作为收尾过程的组成部分,项目经理应该做什么?
One project is designed to design new government agency services, and all of its deliverables have been accepted.The design activity produced a lot of confidential documents. What should project managers do as part of the closing process?
A：  将文件添加到公司知识库以供将来参考
Add the document to the corporate knowledge base repository for future reference
B：  参阅合同中有关处理机密材料的政策
Refer to the contract's policy on handing confidential material
C：  从项目管理办公室(PMO)获得有关如何销毁机密材料的指示
Obtain instructions from the project management office(PMO)on how to destroy confidential material
D：  按照PMO保留政策归档项目文件
Archive the project document per the PMO retention policy

|*|*| 正确答案：B 

解析：知识点出处：PMBOK 6th 页码：P128 章节：||-|| 4.7.3.4
 组织过程资产更新：项目经理应该回顾以往的阶段文件，确认范围过程（见 5.5 节）所产生的客户验收文件，以及合同协议（如果有的话），以确保在达到全部项目要求之后才正式关闭项目。 机密文件的处理，需要审查合同中的要求，以确保正式关闭项目。


 ==-=--=


7、  一家全球性公司推出一个新项目，由各分支机构共同交付一个质量体系。关键项目相关方担心位于公司总部外面的人员参与程度。若要解决这个问题，项目经理应该怎么做？
A global company launches a new project to deliver a quality system across its branches. Key stakeholders are concerned about the levels of engagement for those located outside of company headquarters. What should the project manager do to address this?
A：  为位于公司总部的人员举行面对面会议，并向所有团队成员发送电子邮件会议纪要。
Conduct face-to-face meetings for those located in company headquarters, and email meeting minutes to all team members.
B：  与所有团队成员分享主要成就，并根据需要安排后续追踪电话。
Share main achievements with all team members, and schedule follow-up calls as required.
C：  使用电子邮件向所有团队成员发送项目相关主题。
Email all team members with topics relevant to the project.
D：  安排运行所有参与者参加的虚拟会议，并向所有团队成员发送电子邮件会议纪要。
Schedule virtual meetings that allow all participants to attend, and email meeting minutes to all team members.

|*|*| 正确答案：D 

解析：知识点出处：PMBOK 6th 页码：P392 章节：||-|| 10.3.2.5 
会议：面对面或虚拟会议适用于制定决策，回应相关方请求，与提供方、供应方及其他项目相关方讨论。 针对公司外面的人员，监督沟通，最好采用虚拟会议的方式。


 ==-=--=


8、  一家咨询公司主张，由于项目经理要求的报告不包含在原始范围内，所以会产生额外费用，项目经理应该怎么做？
A consulting firm claims that because the report required by the project manager is not included in the original scope, additional costs will be incurred. What should the project manager do?
A：  报告发起人并审查项目范围，工作说明书和项目管理计划
Report it to the sponsor and review project scope, statement of work(SOW) and project management plan
B：  接受该主张，然后更新范围，工作说明书和工作分解结构
Accept the claim, and then update the scope, statement of work(SOW)and work breakdown structure (WBS)
C：  审查采购管理计划，查询合同报告和合同
Review the procurement management plan and query the contract report and contract
D：  与该咨询公司开会，协商需要完成的额外工作，并提出变更请求
Meet with the consulting company to negotiate additional work that needs to be completed and make a change request

|*|*| 正确答案：C 

解析：知识点出处：PMBOK 6th 页码：P489 章节：||-|| 12.2.3.2
 协议可包括（但不限于）： · 采购工作说明书或主要的可交付成果； · 进度计划、里程碑，或进度计划中规定的日期； · 绩效报告； · 定价和支付条款； · 检查、质量和验收标准； 范围有歧义，查看合同中对可交付成果的定义。


 ==-=--=


9、 一个期限很短的项目关键相关方希望避免质量控制。项目经理知道必须提供最低质量水平。项目经理应当使用什么工具或技术？
Key stakeholders on a shout-deadline project want to avoid quality control. The project manager knows that a minimum level of quality must be provided. What tool or technique should the project manager use?
A：  标杆对照
Benchmarking
B：  统计抽样
Statistical sampling
C：  实验设计
Design of experiments
D：  成本效益分析
Cost-benefit analysis

|*|*| 正确答案：D 

解析：知识点出处：PMBOK 6th 页码：P282 章节：||-|| 8.1.2.3
 成本效益分析：成本效益分析可帮助项目经理确定规划的质量活动是否有效利用了成本。 相关方不想在控制质量上花钱，有可能导致大的返工或召回成本，要使用成本效益分析说服相关方。


 ==-=--=


10、 针对设计经理提出的某个问题的解决方案，项目经理必须收集分析信息。以下哪一项能防止任何人对结果产生不适当的影响？
Regarding the resolution of an issue identified by the engineering manager, the project manager must gather information and reach a consensus of analysis. Which of the following presents any one person from having undue influence on the outcome？
A：  德尔菲技术
Delphi technique
B：  名义组技术
Nominal group technique
C：  价值工程
Value engineering
D：  虚拟团队
Virtual team

|*|*| 正确答案：A 

解析：知识点出处：PMBOK 6th 页码：P142 章节：||-|| 5.2.2.1
 德尔菲技术：相关专家匿名参与。对专家的答卷进行归纳，发还给专家作进一步评论。这个过程重复几轮后，就可能取得一致意见。德尔菲技术有减轻数据的偏倚，防止任何个人对结果产生不恰当的影响。


 ==-=--=




`
// 初始化数据
window.initCurData(window.testQuestion)
