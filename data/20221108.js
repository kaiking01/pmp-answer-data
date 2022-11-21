
/** 正确答  */
window.rigthAnswer = ''

window.rightAnswerA = '' // 答案+章节

// 敏捷实践指南
/** 接龙数据 */
window.allData = `


1. 王鑫 BCACB  DDBDC
2. 艾克丝 BCAAB DBBAC
3. 易江涛 DCBDB DBCDA
4. 卢维荣 BCCAB DDBAC
5. Stone BCBAB DDBAA
6. 陈秋丽Kitty BCCBB BADDC
7. 刘思婷 BCBAB DDBAC
8. 吴贤玲 BCAAB DDBAC
9. 赵艳焜 DCBBB CBDAA
10. 汤燕婷 DBCCB CDBAC
11. 韶华倾负。 BCBAB DDBCC
12. 陈小棋 BCCCB DDBAC
13. 温炳辉 DCCAB CDBAC
14. D_uende DCBAB CBCDC
15. 文博 BCABB DDBAC
16. 杨国鸿 BCBDB DDCCA
17. 等等  DCCDB DCBDC
18. 阿狸 baddb dabab
19. 黄雅君 BCBDB DDDAC
20. 袁天赐 BCACB DDBAA
21. 黄建珩 bccbb dabca
22. 谢成寿 dabba ddaac
23. 李翠艳 DCBCB CCADC
24. 阮晓梦 DCCAB DDBDC
25. 洪俊鑫 BBCAB DDBAC
26. 莫德坚 DCDAB DBBAA
27. Tang-BB。 BCDAB CABDB
28. 陈少芬 BACAB CBCDC
29. 雪落无痕 DBCDB BDCDA
30. Ss BCABB DDCDC
31. 陈永发 BCDAB DBBCA
32. 胡林宇 DCBAB CDDDC
33. 郑鸿斌 BCBAB CBBAC
34. 陈书婷 BBCBC  DDBDC
35. 慌、如隔世 BACBB BADAC
36. 盛洁 BCBCB DDCAC
37. 于涛 BCCCA DACAC
38. 郭晓丽 DCBCB DDBCA

`

/**
 * 试题
 * 题目之间的间隔符：  ==-=--=
 * 答案间隔符： |*|*|
 * 章节间隔符： ||-||
 * **/
window.testQuestion = `

1、  开发团队完成了一个最先进的软件项目，并计划启动收尾阶段。但是，由于不符合约定可交付成果，一位关键相关方拒绝签字。若要促进验收，项目经理应该怎么做？
A development team completed a state-of-the-art software project and plans to initiate the closing phase,However, one key stakeholder refused to sign off due to of non-conformance with the agreed upon deliverables. What should the project manager do to facilitate acceptance?
A：为可交付成果的变更提供新的工作说明书(SOW)
Provide a new statement of work (SOW) for the variation in the deliverables
B：记录不合格情况并启动变更管理过程
Document the nonconformists and start the change management process
C：记录不合格情况并启动项目收尾
Record the nonconformists and initiate project closure
D：执行偏差分析以确定可交付成果中的任何偏差
Conduct a variance analysis to identify any deviations in deliverables

|*|*| 正确答案：B 

解析：解析：PMBOK(6)P166- ||-|| 5.5.3.3 
变更请求 "不符合约定可交付成果，相关方拒绝签字", 即表示项目未通过正式验收， 需要走变更流程，对已经完成但未通过正式验收的可交付成果及其未通过验收的原因，应该记录在案。可能需要针对这些可交付成果提出变更请求，开展缺陷补救。 其他选项：验收不通过，要第一时间变更，采取缺陷补救。然后再考虑AD，C的流程不正确，不能带着问题收尾。

==-=--=

2、  一家公司必须实施一项产品来解决监管问题。项目经理必须让来自几个国家的不同团队参与进来，并使他们与承诺的里程碑保持一致。项目发起人要求项目经理在本周创建并分发项目进度计划。项目经理应该怎么做？
A company must implement a product to resolve regulatory issues. The Project managers must involve different teams from several countries and align them with the committed milestones. The sponsor asks the project manager to create and circulate the project schedule this week. What should the project manager do?
A：根据所需的里程碑创建进度计划并发布
Create the schedule based on the required milestones and publish it
B：要求团队提供意见，并根据团队可用性创建进度计划
Request input from the teams and create the schedule based on their availability
C：获得团队的估算，并使用进度计划工具来调整和满足里程碑
Obtain the estimates from the teams and use the scheduling tools to adjust and meet milestones
D：使用暂定日期分发活动清单和相应属性
Circulate the list of activities and respective attributes with tentative dates

|*|*| 正确答案：C 

解析：PMBOK(6)P205- ||-|| 6.5
制定进度计划。 制定项目进度计划，一方面要有具体活动的时间估算，还要使用相关的各种进度计划工具来完成。C最全面 其他选项：A未考虑估算 、B只考虑的资源、D直接分发不对

==-=--=

3、  用作产品可交付成果组成部分的一种原材料可能不符合质量标准,发生风险的概率很低,但是影响很大。因为公司将承担供应商错误的成本,而且没有经过批准的二级供应商。项目经理应使用什么风险策略?
A raw material used as part of a product's deliverables may not meet quality standards and may have a low probability of risk, but the impact is significant. Because the company will bear the cost of supplier errors and there is no approved secondary supplier. What risk strategy should the project manager use?
A：回避
Avoid
B：升级上报
Escalate.
C：接受
Accept.
D：分享
Share.

|*|*| 正确答案：C 

解析：PMBOK(6)P442- ||-|| 11.5.2.4
威胁应对策略。风险应对措施，接受。明确说了，没有备用的替代供应商，也就是说没有减轻计划，因此只能是接受了这个风险。 其他选项，D是机会策略。A规避就是不做了。B上报，题干中没有明确说明

==-=--=

4、  在为一家公司开发软件时，供应商收到几个新的客户请求，这些请求都包含在系统中，软件按时交付，但因为高级管理人员认为软件不符合要求而拒收该软件。 若要避免这个问题，供应商的项目经理应该事先做什么？
While developing software for a accompany, provider receives several new customer requests that incorporated into the system. The software is delivered on time but is rejected because a senior manager believes it does not align with the requirements. What should the provider's project manager have done to avoid this?
A：审查需求跟踪矩阵
Reviewed the requirements traceability matrix.
B：请求高级管理层参与客户高级管理层一起讨论需求
Requested the involvement of their senior management to discuss the requirements with the customer’s senior management.
C：执行实施整体变更控制过程，并更新项目文件和基准
Conducted the Perform Integrated Change Control process and updated the project documents and baseline.
D：核实项目范围
Validated the project scope.

|*|*| 正确答案：C 

解析：PMBOK（6）P113-||-|| 4.6
实施整体变更控制。“不符合要求”，说明验收标准与客户请求不匹配，变更管理出现疏漏，基准没有更新。 选项A：需求跟踪矩阵记录着需求的状态，是评估变更请求的输入，不属于范围基准。 选项B：应该由项目经理和项目团队成员共同评估。 选项D：注意题干，“实现应该做什么”，而不是“正在做什么”，所以不选确认范围。

==-=--=

5、  项目经理正在启动一个项目，而项目地点在历史上受到自然灾害。由于这个问题，之前有许多项目都出现延期问题。 制定风险管理计划来解决这一风险时，项目经理应该首先参考什么？
The project manager is kicking off a project, and the project site has historically been affected by natural disasters. Due to this problem, many projects have been delayed before. When developing a risk control plan to solve this risk, what should the project manager first refer to?
A：事业环境因素
Business environment factors
B：过往项目的经验教训
Lessons learned from past projects
C：重新配置资源和业务连续性的应急计划
Emergency plan for reassigning resources and business continuity
D：保险合同的采购管理计划
Procurement management plan for insurance contracts

|*|*| 正确答案：B 

解析：PMBOK(6)P403- ||-|| 11.1.1.5 
制定风险管理计划的输入，组织过程资产。之前项目的问题是现在项目的组织过程资产，经验教训。因此选 B

==-=--=

6、  在监督项目进度的同时，项目经理发现第一阶段里程碑将超过进度计划的期限并延续到第二阶段开始。但是，在达到第一阶段里程碑并提交其结果之前，无法开始第二阶段，若要满足第一阶段的时间表并交付预期的结果，项目经理应该怎么做？
While monitoring the project schedule, the project manager realizes that the phase one milestone will exceed the schedule deadline and run over into the start of phase two, However, phase two cannot start until the phase one milestone is reached and its results presented,What should the project manager do to meet phase one’s timeline and deliver the expected results?
A：与项目团队进行头脑风暴并审查几个假设情景
Brainstorm with the project team and review several what-if scenarios
B：使用项目日历来计算有限的资源和项目的不确定性
Use the project calendar to calculate for limited resources and project uncertainties
C：制定关键路径，以确定完成第一阶段的最长时间
Develop the critical path to Identify the longest time for completing phase one
D：考虑快速跟进第一阶段，尽管这会增加风险
Consider fast tracking phase one. although it would increases the risk

|*|*| 正确答案：D 

解析：PMBOK(6)P228-||-|| 6.6.2.6
 进度压缩。项目延期了，且影响了第二阶段，考虑进行进度压缩，以减少影响。 其他选项：AB都不是进度压缩的工具，C应该在规划阶段就制定了，而在监控阶段进行重新分析。

==-=--=

7、  项目经理收到项目章程，并安排召开一次初步项目启动大会。然而，参加这次会议的公司资源很少。若要避免这个问题，项目经理应该考虑哪一点？
A project manager receives a project charter and schedules an initial kick-off meeting. However the meeting is poorly attended by company resources. What should the project manager have considered to avoid this?
A：组织过程资产
Organizational process assets.
B：事业环境因素
Business environment factor.
C：协议
Agreements.
D：沟通管理计划
Communications management plan.

|*|*| 正确答案：B 

解析：PMBOK（6）P78-||-|| 4.1.1.3
事业环境因素。情景中最大的可能性是组织资源有限，属于事业环境因素。因为是在收到项目章程后的启动大会，还没有进入到规划阶段，此时还没有沟通管理计划，排除D选项。 选项A：判断是组织过程资产还是事业环境因素，要看是供项目借鉴还是对项目加以制约。 选项C：协议是制定项目章程的输入。公司资源紧张的问题没有记录在内。

==-=--=

8、  一个主要可交付成果即将被发送给客户。团队成员对作为质量保证过程一部分而需要执行的任务量和时间有所抱怨,项目经理需要尽快将可交付成果准备就绪,以获得第一次项目付款。项目经理应该做什么去确保按时获得可交付成果？
A key deliverable is about to be sent to the customer.Team members complain about the time and number of tasks that need to be performed as part of the quality assurance process.The Project manager needs the deliverable to be ready soon to obtain the first project payment. What should the project manager do to get the deliverable on time?
A：执行因果分析
Perform a cause-and-effect analysis.
B：对使用的过程和方法进行项目审计
Conduct a Project audit on the process and methods use
C：让团队成员查阅项目管理计划
Refer team members to the project management plan.
D：确定客户需求和相关方的期望
Determine customer requirements and stakeholder expectations.

|*|*| 正确答案：B 

解析：PMBOK(6)P294- ||-|| 8.2.2.5
审计。质量保证任务繁重，可以通过质量审计，审计不增值的过程，以提高效率，加快进度。 其他选项：A，因为明确是质量保证过程的问题，因此使用审计更合适。审计识别出来问题以后再进行原因分析；CD与质量过程无关；

==-=--=

9、一个漫长的施工项目在采购过程中遇到一些问题，这些问题还在继续发生在调查过程中,一些团队成员希望知道他们应该在何时收集经验教训。 项目经理应该如何答复？
A lengthy construction project encountered some issues during the procurement process,which continue to occur. During an investigation, some team members want to know when they should capture lessons learned register. How should the project manager respond?
A：在项目生命周期期间和之后不久
During and shortly after; the project's life cycle.
B：在项目收尾时
At the end of the project.
C：在项目阶段收尾期间
At the end of the project phase.
D：在每个学习关口
At each learning level.

|*|*| 正确答案：A 

解析：PMBOK（6）P128-||-|| 4.7.3.4
组织过程资产更新。经验教训的收集在整个项目期间开展。 虽然在考察行政收尾的题型中，我们反复强调在收尾阶段要进行经验教训的总结，但是并不代表着只在项目收尾阶段进行，所以BC都是错的。

==-=--=

10、  项目经理得知一款软件可以提高当前和未来项目任务的效率，由于这款软件对公司来说是新软件，工程师不熟悉该软件。项目经理决定派遣最高级别工程师参加外部培训课程。 项目经理采用了何种风险策略？
The project manager has learned that a software can improve the efficiency of current and future project tasks. Because the software is fresh to the Company, the engineer is not familiar with the software. The project manager decides to send the highest level engineer to attend the external training course. What kind of risk strategies does the project manager use?
A：减轻
Mitigation
B：增强
Enhancement
C：开拓
Development
D：分享
Sharing

|*|*| 正确答案：C 

解析：PMBOK(6)P444- ||-|| 11.5.2.5
机会应对策略。开拓措施可能包括：把组织中最有能力的资源分配给项目来缩短完工时间，或采用全新技术或技术升级来节约项目成本并缩短项目持续时间。采用全新的技术来提高效率，典型的开拓 其他选项：已经确定采用新软件了，因此不是增强，而是开拓。


`
// 初始化数据
window.initCurData(window.testQuestion)
