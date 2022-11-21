
/** 正确答  */
window.rigthAnswer = ''

window.rightAnswerA = '' // 答案+章节

// 敏捷实践指南
/** 接龙数据 */
window.allData = `
1. 易江涛 DDCBC BBBAB
2. 艾克丝 CDBBC CBADC
3. 唐泷彪 DDDBB  CBBAB
4. 卢维荣 CACBA CBACB
5. 赵艳焜 CACBA CBAAB
6. 王鑫 ADCBC  BBBAB
7. 陈小棋 CDCBC BBABC
8. 等等  ABDBD ABAAB
9. 钟洁莹 DDCBD ABAAB
10. 汪关心 DDCBB DBBAB
11. 郑鸿斌 DDCBC BBBBB
12. 刘思婷 DDCBA DBAAB
13. 李翠艳 DDCBB ABACB
14. 吴贤玲 CDCDB DBBBB
15. 、拾婲。 CBCBB CBACB
16. 谢成寿 DDBDB CBBAC
17. 。 DDCBB DBABB
18. 黄雅君 ADCBB BBAAB
19. 林英 DDBBB  CBAAB
20. 陈少芬 CDCBA DBBAA
21. D_uende DDBBB CBABC
22. 汤燕婷 DDBBA AABDB
23. 温炳辉 DDCBB BBBBB
24. 陈庆娇 DDBBB ABBDC
25. NICOLE CDCBB DBAAB
26. 盛洁 DDCBA BBAAA
27. 陆婉仪 CDBBB CABBC
28. 范梦燕 CBBBA ABBAC
29. 李凯旋 DDBBB DBAAB
30. 莫德坚 DDBBD  CBAAA
31. 王宏丹 ADBBB BBABC
32. 阮晓梦 DDBBA DBAAC
33. 黄建珩 cdabb cbaab
34. 洪俊鑫 BDBBC BBBBC
35. 于涛 DDBBC DBBAB
36. 熊佳 DDBBB ABBAA
37. 陈书婷 CDDBB BBAAC
38. 李莹 DBBBA DBAAB
39. 新 CDCBB BBBBC
40. Tang-BB。 DDCBB CBABB
41. 胡林宇 BDCBB BCABB
42. jo an na CDBBA DBCAC
43. 韶华倾负。 CDCBA DBBAB
44. 慌、如隔世 BDCBC BBAAC
45. Ss ccbbb abcbb
46. 雪落无痕 DDBBA DBCAB
47. 李勇发 BDBBB ABADB
48. 陈安然 CDBBB DBADC
49. Stone ABDBC BBBDC
50. 郑舒颖 AABBB CBCAC
51. 何文槺  DDBBD DBBAC

`

/**
 * 试题
 * 题目之间的间隔符：  ==-=--=
 * 答案间隔符： |*|*|
 * 章节间隔符： ||-||
 * **/
window.testQuestion = `

1、 项目经理进行了风险分析,以供项目集经理审查。项目集经理改变了风险项目的优先级,现在该项目正在经历严重延期。项目经理应该做什么?
A project manager conducted a risk analysis for the program manager.The program manager changed the priority of risk items,and now the project is experiencing significant delays. What should be the project manager do?
A：与团队合作,以便进度计划恢复正常
Work with the team to bring the schedule back on track.
B：接受延期,并将其记录在项目管理报告中
Accept the delays and document it in the project management report.
C：将问题升级上报给项目发起人
Escalate it to the project sponsor.
D：将该延期更新到问题日志中
Update the issue log with the delay.

|*|*| 正确答案：C 

解析：PMBOK(6)P442- ||-||11.5.2.4
威胁应对策略。风险应对措施，上报。书上说：对于被上报的威胁，组织中的相关人员必须愿意承担应对责任，这一点非常重要。因为项目集经理改变的优先级，因此应该由项目集经理承担风险应对的责任，项目经理发现了问题，上报即可。

 ==-=--=

2、 相关方表示非常担心某一非集中办公团队对项目期望和指示的理解，因为有之前与该团队合作导致返工的经验，项目经理应该釆用什么样的沟通方法来解决这个问题？
Stakeholders expressed concerns about a non-co-located team’s understanding of expectations and instructions ,as previous experience with this team have resulted in rework, what communication method should the project manager implement to address this?
A：推式沟通
Push communication
B：集中沟通
Mass
C：拉式沟通
pull
D：交互式沟通
Interactive

|*|*| 正确答案：D 

解析：PMBOK（6）P374- ||-||10.1.2.5
沟通方法。在两方或多方之间进行的实时多向信息交换，适合采用交互式沟通（互动沟通）。 选项A：能够确保信息发送，但是不能确保信息接受的结果。 选项C：适用于大信息量的传递。

 ==-=--=

3、在项目测试期间，识别到多个缺陷。由于团队还在解决积压的缺陷，测试将会超支的风险现在已经增加。 项目经理应该怎么做？
During project testing,numerous defects are identified.Since a backlog of defects is already being addressed by the team,the risk that testing will overrun has now increase What should the project manager do?
A：将该问题上报给项目发起人
Escalate the issue to the project sponsor.
B：采用冲突管理技术来审查和确定缺陷的优先级
Adopt conflict management techniques to review and prioritize defects.
C：提交变更请求来解决缺陷
Submit change requests to resolve the defects.
D：请求额外的资源来处理缺陷积压
Request additional resources to work on the defect backlog.

|*|*| 正确答案：C 

解析：PMBOK（6）P306-||-||8.3.3.4
变更请求。通过变更的方式来对缺陷进行补救。 选项AD：在对缺陷补救的时候，对积压的风险进行跟踪评估，制定应急计划。至于是否上报还是求助额外额度资源要依据评估的结果。 选项B：冲突管理通常用于团队内部，缺陷积压的问题根据评估的结果制定应对策略。

 ==-=--=

4、 一位新的高级经理被授予监督多个项目的职责。经理要求敏捷项目领导提交月度报告，总结项目目前状态和预测完成的日期。以下哪项是项目负责人回应经理要求的最佳方式？
A new senior manager has been given the responsibility of overseeing several projects. The manager asks an agile leader to share the monthly report summarizing the project status and the forecasted finish date. Which of the following is the best way in which the project leader should respond to the request of the manager?
A：建议高级经理参加每日站会
Suggest the senior manager attend the daily standup meetings
B：与经理分享项目燃尽图
Share the project burndown chart with the manager
C：要求高级经理使用EVM监控项目进度
Ask the senior manager to use EVM to monitor the project progress
D：按照高级经理的要求提供项目状态的详细报告
Provide a detailed report of the project status as asked by the senior manager

|*|*| 正确答案：B 

解析：||-||敏捷实践指南
燃尽图是一个信息发射源，用于项目进度的可视化演示。每次迭代后都会更新冲刺燃尽图。燃尽图显示了不同时间要完成的工作的估计量和实际量，有助于跟踪和监控团队的进度，了解团队是符合计划进度还是落后于计划进度。燃尽图一般放在显眼的地方，让大家很容易看到项目的当前状态和进度。

 ==-=--=

5、 项目已准备好收尾,但审计认为组织归档程序存在缺陷。由于发起人对归档不感兴趣,项目经理接下来应该做什么?
A project is ready for closure,but adults determine that there are defects in organizational archiving procedures.Since the sponsor is uninterested in arching.What should the project manager do next?
A：与所有相关方开会
Meet with all stakeholders.
B：更新组织归档标准
Update organizational archiving standards.
C：项目收尾
Close the project.
D：聘请归档专家
Hire archiving experts.

|*|*| 正确答案：B 

解析：PMBOK(6)||-||4.7
 结束项目或阶段。项目审计发现问题，就解决问题，更新归档相关的标准程序。 其他选项：A没有必要 ，C不能忽略审计的问题，D主要是程序问题，改进就好了。

 ==-=--=

6、 新聘用的项目经理加入一个正在进行的项目，而该项目已经落后于进度，在规划阶段未考虑到几个时间制约因素，并且批准的基准进度计划具有不灵活的完工期限，项目经理首先应该怎么做？
A newly hired project manager joins an ongoing project that is already behind schedule, several time constraints were not considered during the planning phase, and the approved baseline schedule has an inflexible completion deadline. What should the project manager do first?
A：制定进度计划
Develop the schedule
B：控制进度计划
Control the schedule
C：为项目活动排序
Sequence project activities
D：快速跟进进度计划
Fast track the schedule

|*|*| 正确答案：B 

解析：PMBOK(6)P258- ||-||6.6
控制进度 规划已经完成，已经批准。接下来该执行监控了，遇到问题届时提出变更即可。 其他选项：AC还在规划中，D出现问题再处理，先跟进

 ==-=--=

7、项目经理在预算范围内按时成功收尾项目，最终产品已移交运营并对适当的文件存档。几周后，供应商提供的一个部件发生故障，但仍在保修期内，运营经理致电项目经理并要求釆取纠正措施，包括使用剩余的项目预算来支付维修费用。项目经理下一步应该怎么做？
A Project manager successfully closes out a project on time and under budge, the final product is transferred to the operation and the proper paperwork is filed, a few weeks later, a vendor-supplied part breaks,but is still under warranty, the operation manager calls the project manager and demands corrective actions, including using the remaining project budget to pay for repairs. What should the project manager do next?
A：重新审查项目，确定是否有足够的剩余资金来支付维修费用，并执行纠正措施
Reopen the project 's determine if there are enough remaining funds to pay for repairs.and perform corrective actions
B：建议运营经理审查采购文件，并遵循供应商合同中规定的保修索赔程序
Advise the operation manager to review the procurement documents and follow warranty claim procedures as stated in the vendor’s contract
C：要求法务部门对供应商采取法律行动，以赔偿与更换和安装部件相关的成本
Ask the legal department to take legal action against the vendor for restitution of costs associated with replacement and installation of the part
D：将问题升级上报给高级管理层，以防止运营经理可能采取任何可能的行动
Escalate the issue to senior management for protection from any potential actions the operation manager may take

|*|*| 正确答案：B 

解析：解析：PMBOK（6）P489-||-||12.2.3.2
协议。合同中包括：检查、质量和验收标准；担保和后续产品支持；终止条款和替代争议解决方法等。所以对售后维保产生争议的时候，首先查看合同。 选项A：控制账户已关闭，无法动用资金。 选项C：在选项B之后，根据合同中的约定进行索赔管理。 选项D：不解决问题，解决了发现问题的人。

 ==-=--=

8、 团队成员对问题日志中大量未解决的技术问题感到不满。项目经理应该怎么做?
Team members are unhappy about the significant number of unresolved technical problems in the issue log-What should the project manager do?
A：解释说这些问题应通过让主题专家(SMEs)参与解决
Explain that issues should be resolved by involving subject matter experts(SMEs).
B：请求更多时间来分析未完成的事项
Request more time to analyze the outstanding items.
C：将该情况上报给项目发起人，获得支持
Escalate the situation to the project sponsor to gain support.
D：提交变更请求，替换项目经理
Submit a change request to replace the project manager.

|*|*| 正确答案：B 

解析：PMBOK(6)P132- ||-||4.3.3.3
 问题日志。问题解决需要更多的时间，需要帮团队成员争取更多时间，选择B。 其他选项：此题宜用排除法，A推给专家不对，团队成员是解决问题的所有方。C这个问题是项目经理要解决的，直接上报发起人不合适。D换项目经理不合理。

 ==-=--=

9、 一个营销团队负责一家组织的所有外部沟通，该团队很快将向客户沟通新产品的发布日期，同时，技术团队在没有通知营销团队的情况下对发布活动进行变更。 若要确保有效沟通，项目经理应该怎么做？
A marketing team is responsible for all of an organization's outside communications. This team will soon be communicating the launch date of new products to customers. Meanwhile the technology team makes changes to the launch activity without informing the marketing team. To ensure effective communications, what should the project manager do?
A：提醒团队所有变更都必须遵循沟通管理计划
Remind the teams that all changes must follow the communications management plan.
B：通知技术主管遵循变更管理程序
Inform the technology lead to follow change management procedures.
C：鼓励两个团队在项目团队会议期间讨论沟通问题
Encourage both teams to discuss communication issues during project team meetings.
D：为两个团队组织沟通培训
Organize communication training for the both teams.

|*|*| 正确答案：B 

解析：PMBOK（6）P113-||-||4.6
实施整体变更控制。情景中的核心问题出现在没有遵循整体变更控制程序，而不是“没有通知”，所以要提醒技术主管遵循变更管理程序，而不是强化沟通管理，排除ACD。

 ==-=--=


10、 在项目的规划阶段,所需的外部和内部资源会发生冲突,若要解决这个问题,项目经理应该做什么?
During a projects planning phase,required external and internal resources are conflict.What should the project manager do to receive this?
A：根据经验教训建立结构
Develop a structure based on lessons learne
B：创建责任分配矩阵(RAM)
Create a responsibility assignment matrix(RAM).
C：生成执行、负责、咨询和知情(RACI)图
Generate a responsible.accountable,consult,and inform(RACI)chart.
D：查看传统的组织结构图
Review a traditional organizational chart.

|*|*| 正确答案：C 

解析：PMBOK(6)P317- ||-||9.1.2.2
 责任分配矩阵-RACI矩阵。RACI（执行、负责、咨询和知情）矩阵是RAM的其中一种类型，在团队是由内部和外部人员组成的情况下，RACI 矩阵对明确划分角色和职责特别有用。因此选C。 其他选项：AD不对，B责任分配矩阵是正确的，但是RACI明显更加精准，因为它可以针对这种有外部和内部资源同时存在的情况，非常有效。


 ==-=--=


`
// 初始化数据
window.initCurData(window.testQuestion)
