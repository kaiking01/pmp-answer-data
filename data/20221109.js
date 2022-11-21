
/** 正确答  */
window.rigthAnswer = ''

window.rightAnswerA = '' // 答案+章节

// 敏捷实践指南
/** 接龙数据 */
window.allData = `

1. 易江涛 ABCDD ABCDB
2. 陈秋丽Kitty CDCBD ADCDB
3. loading ACCC ADCAB
4. 郭威 ADCBD ADCDB
5. 陈小棋 ADCCD ADCDB
6. 陈妙玲 ADCCC ABCDC
7. 李莹 ADCCD ADCDB
8. 汪关心 ADCCC ADCDB
9. 吴贤玲 ADCCC ABCDB
10. 卢维荣 ADDCC ADCDC
11. 赵艳焜 BDCCC DBCDB
12. 刘思婷 ADCBD ADCDB
13. NICOLE ADCBC ADCCB
14. 陈永发 ADCCC ADCDC
15. 王鑫 ADCDC  ABCDB
16. 等等 ADCDD ADCDC
17. 韶华倾负。 ADCCC AACDB
18. 汤燕婷 ADCCC ADCDB
19. 黄雅君 ADCAC ADCDC
20. 张永禄 ADCCA   ACCDB
21. 鱼子酱 CDCCD  CBCAD
22. 温炳辉 ADDAC  ADCCC
23. D_uende ADCBC ADCDB
24. 李翠艳 CDCCC DDCDB
25. 胡林宇 ADCAC ADCDB
26. 黄建珩 adcdc adcdb
27. 谢成寿 adddb adcdb
28. 盛洁 AACBC ADCDC
29. 陈少芬 ADCCC ABCDB
30. 艾克丝 ADCCC DBCDB
31. 莫德坚 ADCCC ADCDC
32. 袁天赐 ADCCC ABCCB
33. 雪落无痕 ADCCC ADCCB
34. 钟洁莹 ADDCD ABCDB
35. Tang-BB。 ACCCA ADCDC
36. Stone ADCCC DBCCC
37. Ss AACBC ADCDB
38. 陈书婷 AACCC ABAAB
39. 阮晓梦 ACDDC ABCCC
40. 郑鸿斌 ABCAC ADCDB
41. 文博 ADCAD ADCCB
42. 于涛 ADCCC DDCDC
43. 张焕忠 ADCCC ABCDC
44. 何文槺 ADCBA CDCCC
45. 宋欣瑶 AADCA ADCDC
46. 洪俊鑫 ADCDD ABCDB
47. 慌、如隔世 AACDA ABCDC
48. 郑舒颖 ADCBA ADCDC
49. 熊佳 ABDBC DBCDC
50. jo an na ADCCC ADCDC
51. 李勇发 ADCDA  ADCDC
52. 陈安然 DDCAB ADCCB
53. 郭晓丽 ADCBD ABCCC
54. 李凯旋 ADCBC ADCDB
`

/**
 * 试题
 * 题目之间的间隔符：  ==-=--=
 * 答案间隔符： |*|*|
 * 章节间隔符： ||-||
 * **/
window.testQuestion = `

1、  一个项目的延迟交付，且需要进行变更才能获得理想的可交付成果质量级别，项目经理签发正式的变更请求，并与所有相关方沟通变更，然后项目经理得知这种沟通方式未能满足相关方的期望。项目经理应该怎么做？
A Project is delayed and a change is needed to obtain the desired quality level of the deliverables.The project manager issue a formal change request and communication the change to all stakeholders.The project manager then learned that this communications approach failed to meet the expectations of the stakeholders. What should the project manager do?
A：审查沟通管理计划和相关方参与计划
Review the communication management and stakeholder engagement plan
B：签发变更请求，在项目管理计划中包含相关方的期望
Issue a change request and include the expectations of the stakeholders in the project management plan
C：与项目发起人开会，以更好地了解相关方的期望
Meet with the project sponsor to better understand stakeholder’s expectations
D：遵循沟通管理计划，并签发一份状态报告
Follow the communications management plan,and issue a status report


|*|*| 正确答案：A 

解析：PMBOK(6) ||-||13.4
 监督相关方参与 相关方对沟通方式不满，既是沟通的问题，又是相关方的问题。先审查一下这两个文件，再考虑应对措施。 其他选项：BCD都在A的后面。

 ==-=--=

2、  项目经理正在开展与IT系统开发相关的项目。负责安装服务器的一位团队成员询问项目经理是否可以订购具有比原计划更快处理器的服务器。这款服务器来自同一制造商，成本大致相同。主题专家(SME)分析并确定已遵循纠正措施和变更管理程序。项目经理下一步应该怎么做？
A project manager is working on a project related to IT system development.A team member responsible for installing a server asks the project manager if it is acceptable to order a server with a faster processor than planned.The server is from the same manufacturer and costs approximately the same.Subject matter experts (SME) analyzed and determined corrective actions and change management procedures were followed. What should the project manager do next?
A：更新问题日志，变更请求和工作绩效数据
Update the issue log, change request, and work performance data
B：批准变更请求，更新项目管理计划并评估事业环境因素
Approve the change request, update the project management plan, and assess the enterprise environmental factors
C：更新项目文件、项目管理计划和工作绩效报告
Update the project documents, project management plan, and work performance reports
D：与相关方沟通、更新变更日志并执行变更
Communicate with the stakeholders, update the change log, and execute the change


|*|*| 正确答案：D 

解析：PMBOK(6)P113-||-||4.6
 实施整体变更控制。已经遵循的变更控制程序，说明已经批准了，接下来是批准以后的动作，更新项目文件和计划、通知相关方、执行变更。 其他选项：C没必要更新工作绩效报告。A非正常变更程序。B，已经批准，没必要再次批准。

 ==-=--=

3、  在一个时间紧迫的项目期间，项目经理注意到两名团队成员之间的冲突让项目进度停滞不前。项目经理应该做些什么来恢复工作和管理冲突？
During a project with a tight timeline, the project manager observes a conflict between two team members that is halting progress. What should the project manager do to resume work and manage the conflicts?
A：将这两名团队成员分开以防止冲突影响项目
Separate the team members to prevent the conflicts from impacting the project
B：请求相关方帮助团队成员达成妥协
Request that stakeholder help the team members reach a compromise
C：要求双方通过分析情况来解决冲突，并与他们合作找到共同解决方案
Ask Both parties to resolve the conflict by analyzing the situation and collaborate with them on finding a common solution
D：指示团队成员采取一致观点并继续项目
Direct the team members to take one point of view and proceed with the project


|*|*| 正确答案：C 

解析：PMBOK（6）348-||-||9.5.2.1
人际关系与团队技能。对于团队的冲突问题，首先尝试合作/面对/解决问题的冲突管理策略。 选项A：属于缓和策略。 选项B：属于妥协策略。 选项D：属于强迫策略。

 ==-=--=

4、 一位团队成员注意到多个风险均已过期，该团队成员询问项目经理如何处理这些风险。项目经理应该建议该团队成员做什么？
A team member noticed several risks with expired time periods，The team member asks the project manager how these risks should be handle What should the project manager advise the team members to do?
A：将这些风险从主动跟踪风险中删除，并消除项目中的任何相关意外事件
Remove the risks from active tracking and eliminate any associated contingencies from the project
B：继续被动地监督风险，直到项目结束为止
Continue to passively monitors the risks until the end of the project
C：继续审查风险，但减少频率
Continue to review the risks but on a less frequent basis
D：删除风险减轻任务，以便这项任务可以用于其他潜在风险
Remove the risk mitigation task so that these tasks can be used on other potential risks


|*|*| 正确答案：A 

解析：PMBOK（6）P453-||-||11.7
监督风险。在风险审查中，还可以识别出新的单个项目风险（包括已商定应对措施所引发的次生风险），重新评估当前风险，关闭已过时风险，讨论风险发生所引发的问题，以及总结可用于当前项目后续阶段或未来类似项目的经验教训。 选项BCD：风险已经过期，所以无需继续跟踪，关闭即可。

 ==-=--=

5、  —位项目经理得知，由于持续的罢工，该项目的进口设备尚未被海关放行。项目经理首先应该怎么做？
A project manager learns that the project's imported equipment has not been released by customs due to an ongoing strike.What should the project manager do first?
A：执行定性风险分析
Perform a qualitative risk analysis.
B：执行定量风险分析
Perform a quantitative risk analysis.
C：与团队一起审查风险影响
Review the risk impact with the team.
D：实施风险应对计划
Implement the risk response plan.


|*|*| 正确答案：C 

解析：PMBOK(6)P419 -||-||11.7
监督风险。持续罢工是一个已经发生的未知风险，因此需要先确定已发生风险的影响。 其他选项：如果风险未发生，则可以按照AB的顺序来做；D在C 之后，先分析后实施具体的风险应对计划。

 ==-=--=

6、  一个项目刚刚完成启动阶段，项目经理正在开始该项目的需求收集过程。相关方都位于同一地点，但来自优先级有冲突的不同部门。之前的项目经理经常被要求在执行阶段包含新的范围，导致项目预算的计划外增加并延长商定的进度计划。在满足所有相关方需求的同时，项目经理应该如何及时收集需求？
A project manager is beginning the requirements gathering process lot a project that has just completed the initiation phase. Project stakeholders are all in the same location but come from different departments with conflicting priorities. Previous project managers have often been required to include new scope during the execution phase, causing unplanned increase to the project budget and delaying the upon schedule, what should the project manager do to gather the requirements in a timely manner while meeting the needs of all stakeholders?
A：与所有相关方一起召开需求收集会议，以记录初始范围，然后将其分解为可完成的小部分可管理工作
Conduct a requirements gathering session with all stakeholders to document the initial scope and then break it into smaller pieces of manageable work that can be completed
B：与所有项目相关方一起召开需求收集会议，以记录全部需求，然后关闭项目工作说明书 (SOW)并拒绝任何新需求
Conduct a requirements gathering session with all stakeholders to document full requirements, then close the statement of work (SOW) and reject any new requirements
C：分别与最重要的相关方开会进行需求收集，然后仅在工作说明书中更新这些相关方的新需求
Individually Meet with the most important stakeholders for requirements gathering , then update the SOW with new requirements only from these stakeholders
D：单独与所有相关方开会以记录范围，然后通过变更请求过程处理任何其他高优先级需求
individually meet with all stakeholders to document the scope, and then handle any additional high-priority requirements through the change request process


|*|*| 正确答案：A 

解析：PMBOK(6) p138-||-||5.2
收集需求。 收集需求一定要全面的收集所有相关方的需求，不然后面会面临着大量的变更。 其他选项：B，拒绝新需求不对。CD不全面

 ==-=--=

7、 项目发起人通知项目经理，即使已完成的项目符合进度计划，在预算范围满足范围需求，但客户对最终产品感到不满意。若要避免这种情况，项目经理应该事先做什么？
The project sponsor informs a project manager that even though a completed project was on schedule, within budget, and met scope requirements, the customer is unsatisfied with the final product. What should the project manager have done to avoid this?
A：在制定质量管理计划的同时安排更多的会议
Scheduled more meetings while developing a quality management plan.
B：确保可交付成果符合质量控制测量结果中列出的要求
Ensure that deliverables meet the requirements listed in the quality control measurements.
C：实施石川图工具
Implement the Ishikawa diagram tool.
D：完成需求跟踪矩阵
Complete the requirements traceability matrix.


|*|*| 正确答案：D 

解析：解析：PMBOK（6）P148-||-||5.2.3.2
需求跟踪矩阵。客户是对最终产品不满意，而不是对产品质量不满意，最终产品的实现效果偏离了用户的预期，选D不选B。 选项A：问题出在了需求管理上，而不是质量管理。 选项C：题干强调“事先”应该做什么，而不是出现了问题怎么分析。

 ==-=--=

8、 项目团队分布在不同的地理位置，项目经理安排召开一次虚拟发布规划会议，当来自某个特定地区的所有团队成员全部缺席电话会议时，项目经理感到非常惊讶，若要避免这个问题，项目经理应该事先做什么？
A Project manager of a geographically distributed team schedules a virtual release planning meeting. The project manager is surprised when all team members from a specific region are absent from the call. What should the project manager have done to avoid this?
A：提前更早安排会议
Scheduled the meetings farther in advance
B：强制要求参加会议
Required Mandatory participation in the meeting
C：在安排会议之前确认团队成员是否有空参加
Checked the availability of team members before scheduling the meeting
D：用本地团队成员替换全球资源
Replace global resources with local team members


|*|*| 正确答案：C 

解析：解析：PMBOK（6）P376-||-||10.1.2.8
。所有的团队成员都缺席会议，抵制会议的可能性极小，最大的可能性是会议通知传递有误，所以首先分析是否沟通出现问题。 选项ABD：如果会议通知没有准确送达，提前开会还是强制开会，还是换本地成员开会，依然是空无一人，赶紧检查会议通知发送流程吧。

 ==-=--=

9、  一位相关方经常错过计划每两周举行一次的相关方会议。项目经理首先应该怎么做？
One stakeholder regularly misses scheduled biweekly Stakeholder meeting. What should the project manager do first?
A：开始记录每两周举行一次的会议，并与所有预期的与会者分享记录
Start recording the biweekly meetings , and share the recordings with all the intended attendees.
B：请项目发起人与该相关方进行交涉
Ask the project sponsor to intervene with the stakeholder.
C：与该相关方会面，讨论其未能参加会议的问题
Meet with the stakeholder to discuss his failure to attend meetings.
D：审查相关方参与评估矩阵，以了解该相关方的参与程度
Review the stakeholder engagement assessment matrix to understand the engagement level of the stakeholder.


|*|*| 正确答案：D 

解析：PMBOK(6)P521- ||-||13.2.2.5
 相关方参与度评估矩阵。 按照处理问题的思维来看，处理的顺序应该是先D后C，AB都在后面。发现了相关方的问题，先看一下他对项目的参与程度，心里有数以后，当面和他沟通，然后再采取改善措施。

 ==-=--=

10、  用于在开发过程中进行产品测试的一个供应商技术正在被逐步淘汰，如果需要，项目委员会同意提供额外的时间和资金进行测试。项目经理应该如何处理这个风险？
A supplier’s technology for product testing during development is being phased out, the project board agrees to grant additional time and funds to conduct testing if require How should the project manager handle this risk?
A：通过从范围中删除测试来规避风险
Avoid the risk by removing testing from the scope
B：通过将测试活动外包给合格供应商来转移风险
Transfer the risk by outsourcing testing activities to a qualified vendor
C：使用另一种测试技术来减轻风险
Mitigate the risk by Using another testing technique
D：通过使用淘汰的技术进行测试来接受风险
Accept the risks by using the phased-out technology for testing


|*|*| 正确答案：C 

解析：PMBOK（6）P442-||-||11.5.2.4
威胁应对策略。风险已经出现，规避已经不可能了，先尝试减轻风险的影响。情景中没有提到有可用的第三方，不建议选B。 选项A：已经同意提供额外的时间和资金进行测试，所以规避风险不恰当。 选项D：淘汰的技术，面临的风险更大。



`
// 初始化数据
window.initCurData(window.testQuestion)
