
/** 正确答  */
window.rigthAnswer = ''

window.rightAnswerA = '' // 答案+章节

// 敏捷实践指南
/** 接龙数据 */
window.allData = `

1. 王鑫 DDAAB  BACCC
2. 赵艳焜 ADDAA BACCC
3. 钟洁莹 CDAAB BCDAC
4. 张永禄 CBAAA BACCC
5. 陈秋丽Kitty CBBAB BAAAC
6. 王琦 ADDAD BABAC
7. 吴贤玲 CDAAB BACAC
8. 汪关心 DDDAD ACCCC
9. 陈小棋 CAAAB BCDAC
10. 温炳辉 CCAAB BCCAC
11. 卢维荣 CADAA BADAC
12. 易江涛 DAAAB BCAAC
13. 吴佳佳 CDCCD BACDC
14. 熊佳 CDBAD BADAC
15. 雪落无痕 CDDAB BADAC
16. 刘思婷 DAAAB BADAC
17. 陈永发 CCAAB BCDCC
18. 汤燕婷 DDCAB BBAAC
19. 于涛 CDAAB BACCC
20. 张焕忠 CAAAB BADAC
21. 陆婉仪 ACAAC BACAC
22. 等等 CAAAB BCDAC
23. 黄建珩 cdaab baccc
24. 袁天赐 CDBAB BCCAC
25. KingC. CDAAB  BADAC
26. 盛洁 CCBAB BBCCC
27. 谢成寿 DCDAD BADAC
28. 洪俊鑫 CDAAA BBACC
29. 李勇发 DBBAB BBAAC
30. 郑舒颖 CDBAA BADAC
31. 艾克丝 CDAAB BAACC
32. 莫德坚 CABAB BAAAC
33. 杨国鸿 DDDAB BBACC
34. 陈少芬 DCBAB BAAAC
35. 陈雅 DCAAC BADAC
36. NICOLE DDAAD BCDCC
37. 慌、如隔世 CDDAB BAACC
38. 林英 CCAAD BBCAC
39. 陈书婷 DCBAB BAAAC
40. Ss CDDAB BADAC
41. 郑鸿斌 BCAAB BCDAC

`
// ||-|| 敏捷实践指南

/**
 * 试题
 * 题目之间的间隔符：  ==-=--=
 * 答案间隔符： |*|*|
 * 章节间隔符： ||-||
 * **/
window.testQuestion = `
1、  项目经理将一个大型项目划分为三个区域,并为每个区域分配一个区域协调员。远程站点的一个协调员报告说,由于难以找到技术熟练的资源,他们产生了高额成本。 项目经理应该做什么?
A project manager divided a large project into three regions,with a regional coordinator assigned to each one.One coordinator at a remote site reports they are incurring high costs because skilled resources are difficult to fin What should the project manager do?
A：进行成本效益分析
Conduct a cost-benefit analysis.
B：估算外包远程站点任务的成本
Estimate the cost of outsourcing the remote site's tasks.
C：分析增加的成本对总体预算的影响
Analyze the effect of the increased costs on the overall budget.
D：执行挣值分析(EVA)
Perform an earned value analysis(EVA).


|*|*| 正确答案：C 

解析：PMBOK(6)P257- ||-|| 7.4 
控制成本。遇到问题，先分析影响。 其他选项：A不是控制成本的工具。B在后面。C包含了D，分析影响包括挣值分析、偏差分析、趋势分析等。

 ==-=--=



2、  —名新成员加入团队，该团队的报告结构发生多次变更。若要快速使这位新团队成员适应，项目经理应该查阅哪一份文件？
A new member joins the team and the team's reporting structure has changed for several times. Which document should the project manager review to quickly get the new team member adapted?
A：项目组织图
Project Organization Chart
B：层级资源图
Hierarchical Resources Map
C：责任分配矩阵(RAM)
Responsibility Assignment Matrix (RAM)
D：资源管理计划
Resources Control Plan


|*|*| 正确答案：A 

解析：PMBOK(6)P319-  ||-|| 9.1.3.1
资源管理计划-项目组织图。项目组织图以图形方式展示项目团队成员及其报告关系。题干中明确提到了报告结构，因此，选择项目组织图更准确。 其他选项：B不存在，C只确认了角色与职责的关系。D资源管理计划虽然包括了项目组织图，但是项目组织图明显更加准确。

 ==-=--=



3、  项目经理必须为政府编制一份工厂生产能力报告。这份报告将通过对400家工厂的总经理进行调查而创建，并且必须在四个月内完成，然而，根据现有资源以及调查每位总经理所需的时间，该项目预计需要一年时间。项目经理应使用什么工具或技术来满足预期期限？
A project manager must compile a factory productivity for government.The report will be created by surveying general managers across 400 factories and must be completed in four mouths.However 9based on the available resources and the time needed to survey each general manager,the project is expected to take one year. What tool or technique should the project manager use to meet the expected deadline?
A：进度压缩
Schedule compression
B：快速跟进
Fast tracking
C：标杆对照
Benchmarking
D：统计抽样
Statistical sampling


|*|*| 正确答案：A 

解析：PMBOK(6)P215-  ||-|| 6.5.2.6
进度压缩。 时间不够，要考虑进度压缩 其他选项：CD都不是进度工具，B不全面，除快速跟进外，进度压缩还包括赶工。

 ==-=--=



4、  项目经理从发起人处获悉,由于一项合同要求,必须为项目使用某项特定技术,项目经理发现,一名将被要求使用这项新技术的团队成员之前没有使用过这种技术的经验,公司限制禁止雇佣任何新的团队成员。 项目经理应该做什么?
A project manager learns from the sponsor that,due to a contact requirement,a specific technology must be used for the project.The project manager discovers that one team member who will be required to use this new technology,has no previous experience working with it. What should the project manager do?
A：参考资源管理计划,以确定是否有该团队成员可以参加的已经规划好的培训
Refer to the resource management plan to determine if there is scheduled training in which the team member may participate.
B：增加该团队成员的任务持续时间,并相应地调整进度计划
Increase the team member's task duration,and adjust the schedule.
C：修改合同以允许使用不同的技术解决方案,以便所有团队成员都感到舒适
Revise the contract to allow for a different technology solution to be used so that all team members will feel comfortable.
D：将所有与该技术相关的任务委派给具有该技术经验的团队成员
Delegate all technology-related tasks to a team member who is experienced with technology.


|*|*| 正确答案：A 

解析：PMBOK(6)P342-  ||-|| 9.4.2.6
 培训。缺乏某一项技能，且不可雇佣新成员，安排培训来解决，培训在资源管理计划中规划。 其他选项：B直接增加时间不合适，C项目不是为了让成员舒适，D已经明确成员都没有经验了。

 ==-=--=



5、  在一个敏捷项目的演示期间，项目经理缺席，在审查已完成的工作之后，产品负责人要求进行一项变更，然后获得会议中每个人的一致同意，开发团队立即开始实施这项变更，当项目经理回来工作后，这项变更已经完成，项目经理下一步应该怎么做？
during the demon of an agile project, the project manager is absent, after review the completed work, the product owner requests a change, when is then agreed upon by everyone in the room, the development team immediately begins implementing the change， when the project manager returns to work they are faced with after the completed change, what should the project manager do next?
A：将该不一致性问题通知相关方
Notify stakeholders of the inconsistency
B：将已完成的变更更新到工作范围中
Update the scope of work with the completed change
C：与项目团队开会，讨论变更控制过程
Meet with the project team to discuss the change control process
D：向变更控制委员会(CCB)登记这项变更并请求批准
Log the change with change control board(CCB) and request approval


|*|*| 正确答案：B 

解析： ||-|| 敏捷实践指南
敏捷实践 题目提到“敏捷项目“， 敏捷项目环境，就是拥抱变更的。且是有”产品负责人“提出要变更，敏捷中变更是由 产品负责人（Product Owner）来对产品待办列表进行排序的，因此项目经理不是按照传统流程走CCB，而是直接更新到项目的待办列表即可。 其他选项：ACD都是传统项目的做法。

 ==-=--=



6、 在项目启动期间，项目经理进行了成本效益分析，结果为0.6,项目经理下一步应该怎么做？
During the project start-up, the project manager conducted a cost-benefit analysis and the result was 0.6. What should the project manager do next?
A：咨询专家，寻找选择方案，并重新执行分析
Consult experts，look for options,and re-perform the analysis
B：与项目发起人一起审查结果，以确认项目的可行性
Review the results with the project sponsor to confirm the project's feasibility
C：审查报告以确定是应该开始项目还是拒绝项目
Examine response to determine if the project should start of be rejected
D：咨询相关方关于项目的批准情况
Consult with stakeholders about project approval


|*|*| 正确答案：B 

解析：PMBOK（6）P30- ||-|| 1.2.6.1
项目商业论证。项目商业论证指文档化的经济可行性报告，用来对尚缺乏充分定义的所选方案的收益进行有效论证。拿到商业论证方案以后，要与项目发起人、主题专家一起就商业论证的结果进行讨论分析，确认项目的可行性或项目边界，而不是再次进行商业论证，排除A选项。 选项C：商业文件只是用来提供建议，具体是否批准要结合关键相关方的期望以及专家判断来决策。例如，由协议/合同而催生立项的项目，是不能够拒绝的。 选项D：尚未批准。

 ==-=--=



7、  在一个复杂项目中，项目经理困扰于大量文件，以及如何用最佳方法分发这些文件。项目经理应该查询下列哪一项？
During a complex project.a project manager struggles with the amount of documentation and how best to distribute it .What should the project manager consult?
A：项目管理信息系统(PMIS)
Project management information system(PMIS)
B：配置管理系统
Configuration management system
C：项目相关方沟通需求
Stakeholders’communication needs
D：绩效报告和问题日志
Performance reports and issue logs


|*|*| 正确答案：C 

解析：PMBOK（6）P377- ||-|| 10.1.3.1
沟通管理计划，项目相关方的沟通需求体现在沟通管理计划当中，这道题属于没有最优解选择次优解的解题方式。 选项A：提供信息技术 (IT) 软件工具，是否使用要看沟通管理计划中的约定。 选项B：常用于交付成果指标、功能和版本的管理。 选项D：是对项目执行情况的概述和记录项目执行过程中暴露出来的问题。

 ==-=--=



8、  项目经理必须管理潜在的相关方利益冲突，相关方参与评估矩阵识别到一个反对项目且有影响力的相关方。项目经理应该如何记录相关方的期望？
A project manager must manage potential conflicting stakeholders interests.The stakeholder engagement assessment matrix identifies an influential stakeholder who is resistant to the project. What should the project manager do to sign the stakeholder's expectations?
A：创建相关方参与计划
Create the stakeholder engagement plan.
B：与其沟通相关方参与计划
Communicate the stakeholder engagement plan.
C：与所有相关方开会，对项目目标达成共识
Meet with all stakeholders to gain consensus on project objectives.
D：更新相关方登记册
Updates the stakeholder register.


|*|*| 正确答案：D 

解析：解析：PMBOK（6）P507- ||-|| 13.1
识别相关方。识别相关方是定期识别项目相关方，分析和记录他们的利益、参与度、相互依赖性、影响力和对项目成功的潜在影响的过程。新识别出来的相关方，首先要更新到相关方登记册中，然后根据相关方分析的结果创建相关方参与计划。先D后A。 选项B：相关方参与计划中可能存在敏感信息，容易造成负面影响，所以与其沟通相关方参与计划是错误的。 选项C：与所有相关方开会错误。

 ==-=--=



9、  团队成员都在执行他们熟悉的任务，而避开他们不喜欢的任务，这造成团队成员之间的冲突。项目经理应该怎么做？
Team members are performing tasks that they are familiar with while avoiding tasks they don't like, resulting in conflicts between team members. What should the project manager do?
A：分配明确的角色和职责
To talk to the line manager of team members
B：与团队成员的直线经理谈话
To talk to the line manager of team members
C：与团队成员协商
To negotiate with team members
D：获得项目发起人的澄清
To get clarification from the project sponsor


|*|*| 正确答案：A 

解析：PMBOK(6)P316-  ||-|| 9.1.2.2
数据表现。数据表现有多种格式来记录和阐明团队成员的角色与职责。无论使用什么方法来记录团队成员的角色，目的都是要确保每个工作包都有明确的责任人，确保全体团队成员都清楚地理解其角色和职责。明确职能能够减少冲突。 其他选项：角色与职责划分清楚，有利于减少冲突。因此BD不需要找领导，C的目的也是为了划分职责，因此A更合适。

 ==-=--=



10、  在执行相关方分析时，项目经理识别出两个关键项目相关方之间的负面关系，其中一个相关方正在为项目提供资金。另一个相关方是用户端-客户，他希望包含出资相关方拒绝考虑的其他功能。 项目经理应该如何处理相关方的关系？
While performing the stakeholder analysis, the project manager identifies negative relationships between two key stakeholders, one of which is funding the project. Another relevant party is the client-client, who wants to include other functions that the relevant party refuses to consider. How should the project manager handle stakeholder relationships?
A：只解决提供项目资金的相关方目标
Exclusively address the goals of the stakeholder providing project funding.
B：只解决用户端-客户的目标
Solely address the goal of the client-client.
C：在平等基础上对待所有相关方并进行沟通以克服冲突
Address all stakeholders on an equal footing and communicate to overcome conflicts.
D：战略上只解决问题较少相关方的问题，并避免冲突
Strategically address only the problems of less relevant parties and avoid conflicts.


|*|*| 正确答案：C 

解析：PMBOK(6) ||-|| 13.3.2.3
人际关系与团队技能-冲突管理。 意见分歧，属于冲突，合作解决问题。 其他选项：AB是强迫，D是缓解

 ==-=--=


`
// 初始化数据
window.initCurData(window.testQuestion)
