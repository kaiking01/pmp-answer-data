
/** 正确答  */
window.rigthAnswer = ''

window.rightAnswerA = '' // 答案+章节

// 敏捷实践指南
/** 接龙数据 */
window.allData = `

1. 韶华倾负。 CCBCA BBBBB
2. 卢维荣 ACCBA ACBBD
3. Stone CCCAC ACDBB
4. 郑鸿斌 ACCCA BCDBB
5. 陈永发 ACCAA ACDBB
6. 袁天赐 ACBAA BCDBD
7. 温炳辉 ACCAA ACDBB
8. 汪关心 ACBAC ACDBB
9. NICOLE ACBAA BCDBD
10. 王鑫 ACCAD  BCDBD
11. 陈小棋 ACCCA BCDBB
12. 陈秋丽Kitty ACCAB BCADD
13. 赵艳焜 CCCAA BCDDB
14. 吴佳佳 CCCDB ACADB
15. 黄雅君 ACCAA BCCBD
16. 汤燕婷 CCAAB BCDBD
17. 易江涛 ACCCA BBDBD
18. 文博 CCCAA BCDBB
19. 刘思婷 ACCCB BCDBB
20. 谢成寿 acbcb acabb
21. D_uende CCABA BBDBD
22. 李勇发 ACBCC ACDBB
23. 郭晓丽 CCBAB DCDBB
24. 洪俊鑫 CCBAA BCDBD
25. 黄建珩 ccbaa bcddb
26. 莫德坚 CCDAA BBDBD
27. 陈雅 ACCAA BCDBD
28. 陈少芬 ACCAC ABDBD
29. 于涛 CCBCC BCDBD
30. 等等 CCAAC BCDBB
31. 慌、如隔世 CCCAC BCDBD
32. 艾克丝 ACBCA BCDBD
33. 杨国鸿 ACCCB ACBBB
34. 杨子萌 CCBAC DCACD
35. 钟洁莹 ACBAA DCCBD
36. 雪落无痕 CCCAA BBCBB
37. 胡林宇 BCCAA BBCDD
38. 郑舒颖 CCBAB BCDBB
39. 陈安然 CCBAA BCDBB
`
// 敏捷实践指南
/**
 * 试题
 * 题目之间的间隔符：  ==-=--=
 * 答案间隔符： |*|*|
 * 章节间隔符： ||-||
 * **/
window.testQuestion = `

1、在项目启动阶段，项目发起人向项目经理询问已识别的风险情况。项目经理应参考下列哪一项？
During a project’s initiation phase, the sponsor asks the project manager about identified risks. What should the project manager reference?
A：项目章程
Project charter
B：规划风险管理过程
Plan Risk Management process
C：风险登记册
Risk register
D：控制风险过程
Control Risks process


|*|*|正确答案：A 

解析：PMBOK（6）P75- ||-|| 4.1
制定项目章程。项目启动阶段，还没有进入到规划阶段，此时项目面临的高层次风险记录在项目章程中。 选项BC：规划过程组 选项D：监控过程


==-=--=


2、 在一个大型施工项目的规划阶段，出现了潜在的经济衰退迹象。之前关于经济衰退的风险被指定为低概率和高影响，预计持续6-12个月。项目开始后不久，发生了经济衰退，并按预期影响项目。六个月后，经济衰退影响的持续时向将更改为24-36个月。项目经理应该怎么做？
Signs of a potential economic recession were present during the planning stages of a large construction project. The risk of the recession was assigned as low probability and high impact，with an expected duration of 6-12 months.Soon after the project begins,the recession occurs and impacts the project as expected.After six months,the duration of the recession’s impact is changed to 24-36 months. What should the project manager do?
A：将项目工期延长24-36月
Extend the project duration by 24-36 months,
B：借用额外的运营资本
Borrow additional working capital.
C：更新风险登记册
Update the risk register
D：将项目工期延长12-24个月
Extend the project duration by 12-24 months.


|*|*|正确答案：C 

解析：PMBOK(6)P458-  ||-|| 11.7.3.4
项目文件更新。风险的影响发生了变化，首先将这种变化纳入到风险登记册中，然后再考虑应对措施。 其他选项：ABD都直接给出应对措施，不一定有效。


==-=--=


3、  在新信息系统演示期间发生故障。在下一次状态会议上，项目经理发现两名团队成员以两种不同的方式独立解决该故障。若要预防任务重复，项目经理应该事先做什么？
A malfunction occurs during a presentation of a new information system.At the next status meeting,the project manager discovers that the malfunction was resolved independently by two team members in two different ways. What should the project manager have done to prevent this duplication of tasks?
A：更新风险登记册
Updated the risk register
B：与团队成员开会，讨论解决方案
Met with team members to discuss a solution
C：将该问题记录在问题日志中
Documented the problem in the issue log
D：签发变更请求
Issued a change request


|*|*|正确答案：C 

解析：解析：PMBOK(6)P132- ||-|| 4.3.3.3 
问题日志 两个团队成员分别用自己的方法处理同一个任务，说明这个问题并没有放入一个团队成员共享的解决问题的文件中去。为了“预防任务重复”，题目问”事先“ 怎么做，选项中最合适的做法是C,，记录问题到问题日志，明确解决问题的责任人，以避免重复，其他选项：题目问题的事先避免，因此BD排除掉，A，不是风险问题


==-=--=


4、 项目经理得知一次定期项目团队会议上的沟通渠道中断。项目经理应该做什么来确保所有项目团队成员都同样了解项目情况?
A project manager knows that communication channels were disrupted a regular project team meeting. What should the project manager do to ensure that all project team members are equality informed?
A：重新计划一次具有适当沟通渠道的项目团队会议
Replan the project team meeting with proper communication channels.
B：在问题日志中添加该信息
Adds this information to the issue log.
C：向所有团队成员发送会议记录
Send the meeting minutes to all team members.
D：询问会议参与者的意见
Ask the participants for their input.


|*|*|正确答案：A 

解析：PMBOK(6)P386-  ||-|| 10.2.2.7 
管理沟通 会议。题干中问道，要所有成员“同样了解”情况，再开一次是最好的。 其他选项：B在问题日志添加意义不大，C发送会议记录无法确保理解。D会还没开完，询问意见也没有用。


==-=--=


5、  收到供应商建议书后，项目经理应使用什么来确保最低报价在当前市场范围内？
After receiving vendor proposals, what should a project manager use to ensure that the lowest price is within the current market range?
A：独立估算
Independent estimates
B：建议书评价技术
Proposal evaluation techniques
C：专家判断
Expert judgment
D：分析技术
Analytical techniques


|*|*|正确答案：A 

解析：PMBOK(6)P479- ||-|| 12.1.3.7 
独立估算 独立估算就是让专业的人把市场上的报价算清楚，然后做为对照基准。题干中说要包含市场上的最低报价，使用独立估算可以获取到这样的结果。 其他选项：B建议书评价，是对建议书本身进行技术上或商业上的评估，与最低报价不符。CD没有A准确。


==-=--=


6、 一位项目经理正在与一个多元化的团队合作一个备受瞩目公共工程项目。项目相关方的公共部门非常担心，因为这个项目直接影响到他们的社区。项目经理应使用什么来与这个项目相关方团体沟通?
A project manager is working on a high-profile public works project with a diverse and engaged group of stakeholders.The public sector of stakeholders is very concerned,as this project directly impacts their community.,What should the project manager use to communicate with this stakeholder group?
A：推式沟通
Push communication
B：交互式沟通
Interactive communication
C：项目相关方沟通
Stakeholder notifications
D：项目报告
Project reports


|*|*|正确答案：B 

解析：解析：PMBOK（6）  P374- ||-|| 10.1.2.5
沟通方法。在两方或多方之间进行的实时多向信息交换，适合采用交互式沟通（互动沟通）。 选项A：推式沟通的特点是可以确保发送，但是不能确保信息的接受效果，所以不利于向社区解答他们的困惑，这种沟通方式容易“火上浇油”。 选项C：范围太广。 选项D：项目报告用来说明的项目执行状态，不适用于向公众进行说明。


==-=--=


7、  你的公司正在从瀑布管理转变为敏捷管理，并选择采用Scrum方法。你是一位经验丰富的Scrum主管，目前正在处理重要项目，已获得了很高的客户满意度分数。假如你被要求去指导另一个团队，那个团队正在努力摸索如何应用Scrum，你将如何处理这种情况？
Your organization is moving from Waterfall to Agile and they have chosen Scrum as the methodology. You are an experienced Scrum Master and currently handling a critical project and receiving very high customer satisfaction scores. How would you handle the situation when you are asked to guide another team which is struggling with their Scrum implementation?
A：问你的经理，这是否意味着你将转去参与另一个团队和项目
Ask your manager if this means shifting to another team and project
B：请项目管理办公室为另一个项目的Scrum主管提供培训，或任命新的Scrum主管作为他们的指导员
Ask project management office to provide training to other project's Scrum Master or provide any other scrum master as a mentor
C：与另一个团队的Scrum主管和产品负责人一起，评估当前的成熟度并提供指导
Work with the other team’s Scrum Master and Product Owner to assess the current maturity level and provide guidance
D：与另一个团队成员一起了解失败原因，并向PMO报告
Work with the other team members to understand the causes of the failures and report to PMO


|*|*|正确答案：C 

解析：||-||敏捷实践指南 
Scrum主管的核心职责之一是传播对敏捷方法的认识，并且，无论你直接参与的是哪个团队的工作，都应帮助公司采用敏捷方法。因此，评估当前成熟度并提供指导的选项是正确的。


==-=--=


8、  一位关键团队成员犯了一个严重错误，将导致项目严重延迟。按照相关方参与计划，项目经理与相关方开会讨论此问题。在会议上，项目经理应该提供什么信息？
A key team member makes a critical mistake that will result in a significant project delay.In accordance with the stakeholders engagement plan, The project manager meets with stakeholders to discuss this issue. What information should the project manager present during the meeting?
A：团队的培训计划，以避免类似错误
Training plan for the team to avoid similar mistakes
B：说明防止类似问题发生的新规定
Description of new provisions to prevent similar issue from occurring
C：修改范围以保持项目进度计划的方案
Options for amending the scope to maintain the project schedule
D：根本原因分析，解释错误发生的原因
Root cause analysis, explaining why the mistake occurred


|*|*|正确答案：A 

解析：PMBOK（6）P342- ||-|| 9.4.2.6
培训。项目经理应该按资源管理计划中的安排来实施预定的培训，也应该根据管理项目团队过程中的观察、交谈和项目，有效评估的结果，来开展必要的计划外培训。 选项B：规定不能解决人的技能短板。 选项C：人的问题没有解决，因为人的技能短板而调整范围本末倒置。 选项D：导致问题发生的原因已经清楚了。


==-=--=


9、  项目经理识别到项目相关方具有不同的需求和期望。为确保项目成功，项目经理应该怎么做去确保项目的成功？
The project manager identifies that project stakeholders have different requirements and expectations. What should the project manager do to ensure the success of the project?
A：应用推进技术
To use progress technology
B：创建权力/影响方格
To create power/influence grids
C：执行风险分析
To perform risk analysis
D：定义角色和职责
To define roles and responsibilities


|*|*|正确答案：B 

解析：解析：PMBOK（6）P512- ||-|| 13.1.2.4
数据表现-权力利益方格。基于相关方的职权级别（权力）、对项目成果的关心程度（利益）、对项目成果的影响能力（影响），或改变项目计划或执行的能力， 对相关方进行分类。根据分类的结果，对不同类别的相关方使用不同的管理策略，有助于提升项目的成功几率。 选项A：没有这个说法。 选项C：管理相关方参与的过程中，如果暴露出来的问题有引发风险的可能，要将其视为风险进行管理，在选项B之后。 选项D：资源管理领域，相关方不一定参与项目的实施过程，所以定义角色和职责错误。


==-=--=


10、  项目团队正通过估算每个工作包来制定项目预算。团队使用过往项目的统计值和历史数据。这使用的是什么估算工具或技术？
A project team is developing a project budget by estimating each work package.The team uses statistical values and historical data from past projects. What estimating tool or technique is being used?
A：储备分析
Reserve analysis
B：类比估算
Analogous estimating
C：专家判断
Expert judgment
D：参数估算
Parametric estimating


|*|*|正确答案：D 

解析：PMBOK(6)P244-  ||-|| 7.2.2.3
参数估算 参数估算是指利用历史数据之间的统计关系和其他变量（如建筑施工中的平方英尺），来进行项目工作的成本估算 历史数据、统计关系，书上的原话


==-=--=






`
// 初始化数据
window.initCurData(window.testQuestion)
