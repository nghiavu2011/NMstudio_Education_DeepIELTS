// ====================================================
// DEEP IELTS — MASTER SKILL & EXPERT STRATEGY LIBRARY v1.0
// Source of Truth: DEEP_IELTS_MASTER_SKILL_EXPERT_TIP_LIBRARY_v1.md
// Knowledge Provenance: HUY_DERIVED + DEEP_IELTS_DESIGN + OFFICIAL_VALIDATED
// ====================================================

const IELTS_EXPERT_STRATEGIES = [
    {
        "id": "W1-INTRO-001",
        "provenance": "HUY_DERIVED",
        "skill": "writing_task_1",
        "skill_name": "Writing Task 1",
        "subskill": "introduction_safety",
        "subskill_name": "Mở Bài An Toàn",
        "title": "Giữ mở bài trong phạm vi an toàn, tránh biến báo quá đà",
        "band_range": [
            "6.0",
            "9.0"
        ],
        "difficulty": "foundation",
        "hook": "Mở bài không phải là nơi phô trương từ vựng phức tạp rồi tự gài bẫy chính mình.",
        "core_rule": "Paraphrase trong phạm vi kiểm soát an toàn. Không biến đổi câu đề bài đơn giản thành một cấu trúc phức tạp quá mức chỉ để tạo vẻ 'nâng cao'. Bảo toàn ý nghĩa > Phô diễn từ vựng.",
        "why_it_works": "Mở bài được viết khi thí sinh chưa xử lý trọn vẹn biểu đồ. Việc over-paraphrasing dễ làm sai lệch bản chất số liệu hoặc tạo lỗi ngữ pháp ngay từ dòng đầu tiên.",
        "common_mistakes": [
            "Cố ép từ vựng C2 làm sai lệch đơn vị đo",
            "Đảo ngữ rườm rà dẫn đến câu run-on"
        ],
        "worked_example": {
            "input": "The chart shows the percentage of households with internet access in three countries between 2010 and 2020.",
            "weak": "The given diagram manifests the proportions concerning domiciles obtaining cyberspace connectivity over a decadal phase from 2010 to 2020.",
            "better": "The chart illustrates the proportion of households that had access to the internet in three nations from 2010 to 2020.",
            "explanation": "'domiciles obtaining cyberspace connectivity' là lối diễn đạt gượng gạo. 'households that had access to the internet' tự nhiên và chuẩn xác 100%."
        },
        "micro_practice": {
            "id": "P-W1-INTRO-001",
            "type": "recognize",
            "time_seconds": 45,
            "prompt": "Đề bài: 'The line graph details the amount of electricity produced by solar power in four regions from 2015 to 2025.' Chọn mở bài AN TOÀN và CHUẨN XÁC nhất:",
            "options": [
                {
                    "id": "A",
                    "text": "The line graph demonstrates solar electricity output across four distinct areas between 2015 and 2025.",
                    "isCorrect": true,
                    "feedback": "Chính xác! 'solar electricity output' chuẩn xác, tự nhiên và bảo toàn trọn vẹn ý nghĩa.",
                    "errorCode": null
                },
                {
                    "id": "B",
                    "text": "The diagram portrays how much electric voltage was manufactured by sunbeams in quadrupled zones.",
                    "isCorrect": false,
                    "feedback": "Lỗi W1-INTRO-OVERPARAPHRASE: 'sunbeams' và 'manufactured' là dùng từ sai ngữ cảnh học thuật và 'electric voltage' sai lệch bản chất số liệu.",
                    "errorCode": "W1-INTRO-OVERPARAPHRASE"
                }
            ],
            "socratic_guidance": "Hãy tự hỏi: Từ đồng nghĩa này có giữ nguyên chính xác phạm vi của đề bài không, hay đang làm sai lệch khái niệm khoa học?"
        },
        "recall_prompt": "Khi viết mở bài Task 1, yếu tố nào quan trọng hơn: Độ chính xác ý nghĩa hay Phô trương từ vựng?",
        "recall_answer": "Độ chính xác ý nghĩa (Meaning preservation > Vocabulary display).",
        "related_skill_ids": [
            "W1-OV-001",
            "W1-TIME-001"
        ],
        "error_code": "W1-INTRO-OVERPARAPHRASE"
    },
    {
        "id": "W1-OV-001",
        "provenance": "HUY_DERIVED",
        "skill": "writing_task_1",
        "skill_name": "Writing Task 1",
        "subskill": "overview_construction",
        "subskill_name": "Xây Dựng Overview",
        "title": "Overview = Xu hướng chủ đạo + Điểm khác biệt nổi bật nhất",
        "band_range": [
            "6.0",
            "9.0"
        ],
        "difficulty": "control",
        "hook": "Overview không phải là nơi liệt kê số liệu vụn vặt, mà là bức tranh toàn cảnh 10,000 mét.",
        "core_rule": "Overview cần tóm gọn quy luật bao quát nhất: (1) Xu hướng chung theo thời gian (tăng/giảm/dao động) và (2) Sự phân hóa / thứ bậc vượt trội (đối tượng nào luôn cao nhất/thấp nhất). Tuyệt đối không đưa số liệu chi tiết.",
        "why_it_works": "Tiêu chí Task Achievement yêu cầu 'a clear overview of main trends, differences or stages'. Giám khảo chấm Overview dựa trên khả năng phát hiện mẫu hình (pattern recognition).",
        "common_mistakes": [
            "Đưa số liệu chi tiết vào overview",
            "Chỉ nêu 1 đường đơn lẻ mà bỏ quên các đối tượng còn lại"
        ],
        "visual_task": {
            "type": "chart_line",
            "title": "Car Ownership Rates (2000 - 2020)",
            "data": {
                "years": [
                    2000,
                    2005,
                    2010,
                    2015,
                    2020
                ],
                "series": [
                    {
                        "name": "Country A",
                        "values": [
                            25,
                            38,
                            49,
                            62,
                            78
                        ],
                        "color": "#2563eb"
                    },
                    {
                        "name": "Country B",
                        "values": [
                            60,
                            55,
                            48,
                            35,
                            20
                        ],
                        "color": "#dc2626"
                    },
                    {
                        "name": "Country C",
                        "values": [
                            30,
                            32,
                            29,
                            31,
                            30
                        ],
                        "color": "#0d9488"
                    }
                ]
            }
        },
        "worked_example": {
            "input": "Đường A tăng từ 25% lên 78%; Đường B giảm từ 60% xuống 20%; Đường C dao động nhẹ quanh 30%.",
            "weak": "Overall, A rose from 25% to 78%, while B dropped to 20% and C stayed at 30%.",
            "better": "Overall, while Country A experienced a substantial increase to overtake all other nations, Country B saw a continuous decline, with Country C remaining relatively stable.",
            "explanation": "Mô tả quy luật bao trùm bằng từ ngữ chỉ xu hướng và vị thế ('experienced a substantial increase', 'overtake', 'continuous decline', 'relatively stable')."
        },
        "micro_practice": {
            "id": "P-W1-OV-001",
            "type": "recognize",
            "time_seconds": 45,
            "prompt": "Nhìn vào biểu đồ đường trên, chọn 2 ý bắt buộc phải có trong Overview:",
            "options": [
                {
                    "id": "A",
                    "text": "1) Country A tăng mạnh và vươn lên dẫn đầu; 2) Country B sụt giảm liên tục dù khởi điểm cao nhất.",
                    "isCorrect": true,
                    "feedback": "Xuất sắc! Đây là 2 đặc điểm bao trùm toàn bộ các đối tượng mà không bị sa đà vào số liệu đơn lẻ.",
                    "errorCode": null
                },
                {
                    "id": "B",
                    "text": "1) Country A đạt 78% năm 2020; 2) Country C dao động quanh 30%.",
                    "isCorrect": false,
                    "feedback": "Lỗi W1-OV-DETAIL-ONLY: Bạn đã đưa số liệu cụ thể vào thay vì mô tả xu hướng tổng quát.",
                    "errorCode": "W1-OV-DETAIL-ONLY"
                }
            ],
            "socratic_guidance": "Nếu bạn chỉ có 10 giây để tóm tắt cho người khác nghe diễn biến chính của cả 3 đường, bạn sẽ nói điều gì?"
        },
        "recall_prompt": "Hai thành tố bắt buộc phải xuất hiện trong một Overview chuẩn mực Task 1 là gì?",
        "recall_answer": "1) Xu hướng chủ đạo theo thời gian và 2) Đối tượng / thứ bậc phân hóa vượt trội (Main trends + Main differences).",
        "related_skill_ids": [
            "W1-OV-002",
            "W1-DATA-001",
            "W1-TREND-001"
        ],
        "error_code": "W1-OV-MISS-MAJOR"
    },
    {
        "id": "W1-OV-002",
        "provenance": "HUY_DERIVED",
        "skill": "writing_task_1",
        "skill_name": "Writing Task 1",
        "subskill": "overview_construction",
        "subskill_name": "Xây Dựng Overview",
        "title": "Ưu tiên độ bao phủ trước, độ ngắn gọn sau",
        "band_range": [
            "6.0",
            "9.0"
        ],
        "difficulty": "control",
        "hook": "Overview không phải là cuộc đua xem ai viết câu ngắn nhất.",
        "core_rule": "Bao quát tất cả các quy luật chính trước, tối ưu độ dài sau. Viết 2 câu rõ ràng luôn tốt hơn cố nhồi nhét 3 xu hướng trái ngược vào 1 câu ngột ngạt.",
        "why_it_works": "Cố ép tất cả thông tin vào một câu duy nhất thường tạo ra câu phức rắc rối, mập mờ quan hệ nhân quả và dễ làm rớt mất một đối tượng quan trọng.",
        "common_mistakes": [
            "Cắt bớt xu hướng chỉ để viết đúng 1 câu duy nhất",
            "Dùng liên từ nối quá nhiều khiến cú pháp bị vỡ"
        ],
        "worked_example": {
            "input": "4 đối tượng: A và B tăng trưởng mạnh; C giảm sâu; D giữ vị trí cao nhất toàn giai đoạn.",
            "weak": "Overall, A and B rose significantly whereas C fell sharply and D was highest.",
            "better": "Overall, the figures for A and B experienced significant upward trends, while C saw a sharp decline. In addition, D consistently maintained its position as the dominant contributor throughout the examined period.",
            "explanation": "Tách 2 câu giúp câu văn thoáng đạt, mạch lạc và thể hiện đầy đủ cả xu hướng lẫn vị thế."
        },
        "micro_practice": {
            "id": "P-W1-OV-002",
            "type": "diagnose",
            "time_seconds": 45,
            "prompt": "Câu Overview: 'Overall, coal and gas surged rapidly whilst nuclear power decreased and solar power fluctuated but remained the smallest' nên được cải thiện ra sao?",
            "options": [
                {
                    "id": "A",
                    "text": "Tách thành 2 câu rõ ràng: Câu 1 cho nhóm nhiên liệu hóa thạch (tăng/giảm) và Câu 2 cho nhóm năng lượng tái tạo (vị thế).",
                    "isCorrect": true,
                    "feedback": "Chính xác! Giúp câu văn rõ ràng, tăng điểm Coherence & Task Achievement.",
                    "errorCode": null
                },
                {
                    "id": "B",
                    "text": "Thêm số liệu chi tiết phần trăm của than đá và khí đốt.",
                    "isCorrect": false,
                    "feedback": "Lỗi W1-OV-DETAIL-ONLY: Overview tuyệt đối không đưa số liệu chi tiết.",
                    "errorCode": "W1-OV-DETAIL-ONLY"
                }
            ],
            "socratic_guidance": "Khi đọc câu lên mà bạn phải lấy hơi 2 lần, hãy tách câu!"
        },
        "recall_prompt": "Quy tắc ưu tiên khi xây dựng Overview là gì: Độ ngắn gọn hay Độ bao phủ đầy đủ các đặc điểm chính?",
        "recall_answer": "Độ bao phủ trước, độ ngắn gọn sau (Coverage first, compression second).",
        "related_skill_ids": [
            "W1-OV-001",
            "W1-BODY-001"
        ],
        "error_code": "W1-OV-OVERLOADED"
    },
    {
        "id": "W1-OV-003",
        "provenance": "HUY_DERIVED",
        "skill": "writing_task_1",
        "skill_name": "Writing Task 1",
        "subskill": "overview_construction",
        "subskill_name": "Xây Dựng Overview",
        "title": "Tuyệt đối không đưa số liệu chi tiết vào Overview",
        "band_range": [
            "6.0",
            "9.0"
        ],
        "difficulty": "foundation",
        "hook": "Overview là nhận diện quy luật (pattern recognition), không phải sao chép số liệu.",
        "core_rule": "Phân định rạch ròi: Overview dùng ngôn ngữ định tính (tăng mạnh, giảm sâu, chiếm ưu thế), Thân bài mới là nơi đưa số liệu định lượng (20%, 45 triệu tấn, năm 2015).",
        "why_it_works": "Đưa số liệu vào Overview biến nó thành một đoạn thân bài vụn vặt và khiến bạn mất điểm Task Achievement do thiếu tóm tắt khái quát.",
        "common_mistakes": [
            "Đưa mốc năm chi tiết kèm tỷ lệ phần trăm vào overview",
            "Viết số liệu nhưng không chỉ ra xu hướng"
        ],
        "worked_example": {
            "input": "Doanh số điện thoại tăng từ 20 triệu lên 85 triệu chiếc.",
            "weak": "Overall, phone sales rose from 20 million to 85 million units.",
            "better": "Overall, phone sales experienced a dramatic growth, multiplying more than fourfold over the period.",
            "explanation": "'experienced a dramatic growth' chỉ rõ tính chất quy luật; thân bài sẽ chi tiết hóa con số 20 triệu và 85 triệu."
        },
        "micro_practice": {
            "id": "P-W1-OV-003",
            "type": "recognize",
            "time_seconds": 30,
            "prompt": "Nhận diện câu nào là câu OVERVIEW CHUẨN MỰC:",
            "options": [
                {
                    "id": "A",
                    "text": "Overall, renewable energy witnessed the most substantial increase, whereas fossil fuel consumption remained the dominant source throughout the decade.",
                    "isCorrect": true,
                    "feedback": "Chính xác! Hoàn toàn không có số liệu thô nhưng làm nổi bật cả xu hướng lẫn vị thế thống trị.",
                    "errorCode": null
                },
                {
                    "id": "B",
                    "text": "Overall, renewable energy was 12% in 2010 and reached 44% in 2020, while fossil fuel was 88%.",
                    "isCorrect": false,
                    "feedback": "Lỗi W1-OV-DETAIL-ONLY: Đây là câu thân bài (Body detail), không phải Overview.",
                    "errorCode": "W1-OV-DETAIL-ONLY"
                }
            ],
            "socratic_guidance": "Nếu thấy có số cụ thể kèm ký hiệu %, hãy loại ngay khỏi Overview!"
        },
        "recall_prompt": "Tại sao không nên đưa số liệu chi tiết vào đoạn Overview?",
        "recall_answer": "Vì Overview là nhận diện quy luật khái quát; số liệu chi tiết thuộc về các đoạn Thân bài.",
        "related_skill_ids": [
            "W1-OV-001",
            "W1-DATA-001"
        ],
        "error_code": "W1-OV-DETAIL-ONLY"
    },
    {
        "id": "W1-DATA-001",
        "provenance": "HUY_DERIVED",
        "skill": "writing_task_1",
        "skill_name": "Writing Task 1",
        "subskill": "data_comparison",
        "subskill_name": "So Sánh Số Liệu",
        "title": "So sánh và liên kết, tuyệt đối không 'liệt kê' số liệu thô",
        "band_range": [
            "6.0",
            "9.0"
        ],
        "difficulty": "control",
        "hook": "Nếu chỉ chép lại từng số liệu A=20, B=30, C=40, bạn đang làm máy tính chứ không phải viết báo cáo.",
        "core_rule": "Luôn đặt các đối tượng vào thế tương quan: Đối tượng nào gấp đôi đối tượng nào? Khoảng cách chênh lệch là bao nhiêu? Thứ bậc ra sao?",
        "why_it_works": "Tiêu chí Coherence & Task Achievement đánh giá cao năng lực tổng hợp và tạo sự kết nối giữa các nhóm số liệu.",
        "common_mistakes": [
            "Viết kiểu danh sách độc lập: 'In 2010, A was 20%. B was 30%. C was 40%.'",
            "Không dùng cấu trúc so sánh hơn/nhất/bội số"
        ],
        "worked_example": {
            "input": "Chi tiêu cho thực phẩm: Anh (35%), Pháp (25%), Đức (12%).",
            "weak": "In the UK, people spent 35% on food. In France, the figure was 25%, and in Germany it was 12%.",
            "better": "UK consumers allocated the highest proportion of their budget to food, at 35%, which was roughly triple the expenditure recorded in Germany (12%).",
            "explanation": "Bản tốt hơn liên kết UK (cao nhất) trực tiếp với Đức (gần gấp 3 lần), tạo nên câu văn giàu tính phân tích."
        },
        "micro_practice": {
            "id": "P-W1-DATA-001",
            "type": "repair",
            "time_seconds": 45,
            "prompt": "Cho dữ liệu: 'Doanh thu A: $80M; B: $40M; C: $10M'. Chọn câu so sánh xuất sắc nhất:",
            "options": [
                {
                    "id": "A",
                    "text": "Company A led the market with $80M in revenue, doubling that of Company B and standing eight times higher than Company C.",
                    "isCorrect": true,
                    "feedback": "Chính xác! Sử dụng phân từ 'doubling' và 'standing eight times higher' liên kết hoàn hảo.",
                    "errorCode": null
                },
                {
                    "id": "B",
                    "text": "Company A generated $80M, Company B had $40M, and Company C made $10M.",
                    "isCorrect": false,
                    "feedback": "Lỗi W1-DATA-LISTING: Liệt kê rời rạc từng câu không có so sánh.",
                    "errorCode": "W1-DATA-LISTING"
                }
            ],
            "socratic_guidance": "Thay vì chỉ nêu 'bao nhiêu', hãy cho người đọc biết 'gấp mấy lần' hoặc 'chênh lệch bao nhiêu'."
        },
        "recall_prompt": "Hành động cấm kỵ nhất khi viết thân bài biểu đồ số liệu Task 1 là gì?",
        "recall_answer": "Liệt kê số liệu rời rạc từng câu độc lập mà không so sánh tương quan (Data dumping / Data listing).",
        "related_skill_ids": [
            "W1-DATA-002",
            "W1-DATA-003"
        ],
        "error_code": "W1-DATA-LISTING"
    },
    {
        "id": "W1-DATA-002",
        "provenance": "HUY_DERIVED",
        "skill": "writing_task_1",
        "skill_name": "Writing Task 1",
        "subskill": "ranking_analysis",
        "subskill_name": "Xác Định Thứ Bậc (Ranking)",
        "title": "Theo dõi sự hoán đổi thứ bậc: Ai dẫn đầu, ai bị vượt mặt?",
        "band_range": [
            "6.0",
            "9.0"
        ],
        "difficulty": "control",
        "hook": "Biểu đồ nhiều đường là một cuộc đua. Hãy tường thuật ai dẫn đầu và ai bứt phá ngoạn mục.",
        "core_rule": "Đặt 4 câu hỏi định vị: (1) Ai đứng đầu lúc bắt đầu? (2) Ai đứng đầu lúc kết thúc? (3) Có cuộc vượt mặt (crossover/overtake) nào xảy ra ở giữa không? (4) Ai luôn xếp chót?",
        "why_it_works": "Từ vựng thứ bậc (dominate, overtake, surpass, rank second, remain negligible) giúp bài viết đậm chất phân tích chuyên gia.",
        "common_mistakes": [
            "Chỉ nói A tăng và B giảm mà không nhận ra A đã vượt B ở năm 2015",
            "Dùng sai từ overtake cho đối tượng không thay đổi thứ hạng"
        ],
        "worked_example": {
            "input": "Năm 2000: B (50%) đứng đầu, A (20%) đứng nhì. Năm 2015: A tăng lên 60% vượt qua B (40%).",
            "weak": "In 2000 B was 50% and A was 20%. In 2015 A was 60% and B was 40%.",
            "better": "Although Country B initially dominated the chart at 50%, it was subsequently overtaken by Country A around 2012, with the latter surging to peak at 60% by 2015.",
            "explanation": "'initially dominated', 'subsequently overtaken by', 'with the latter surging' tường thuật cuộc đua thứ hạng sống động."
        },
        "micro_practice": {
            "id": "P-W1-DATA-002",
            "type": "recognize",
            "time_seconds": 45,
            "prompt": "Dữ liệu: 'Sản lượng lúa mì Pháp vượt sản lượng lúa mì Đức vào năm 2018.' Chọn cách diễn đạt học thuật chuẩn nhất:",
            "options": [
                {
                    "id": "A",
                    "text": "French wheat production surpassed that of Germany in 2018 to secure the leading position in Europe.",
                    "isCorrect": true,
                    "feedback": "Chính xác! 'surpassed that of Germany' và 'secure the leading position' là ngôn ngữ thứ bậc chuẩn C1.",
                    "errorCode": null
                },
                {
                    "id": "B",
                    "text": "France ran faster than Germany in wheat in 2018.",
                    "isCorrect": false,
                    "feedback": "Lỗi W1-DATA-STYLE: 'ran faster than' là khẩu ngữ không phù hợp bài thi học thuật.",
                    "errorCode": "W1-DATA-STYLE"
                }
            ],
            "socratic_guidance": "Dùng 'surpass', 'overtake', 'outstrip' khi một đối tượng vượt qua đối tượng khác về lượng."
        },
        "recall_prompt": "Các động từ chỉ sự hoán đổi thứ bậc vượt mặt trong Task 1 gồm những từ nào?",
        "recall_answer": "overtake, surpass, outstrip, eclipse, displace.",
        "related_skill_ids": [
            "W1-DATA-001",
            "W1-TREND-001"
        ],
        "error_code": "W1-DATA-WRONG-RANK"
    },
    {
        "id": "W1-DATA-003",
        "provenance": "HUY_DERIVED",
        "skill": "writing_task_1",
        "skill_name": "Writing Task 1",
        "subskill": "data_selection",
        "subskill_name": "Chọn Lọc Điểm Dữ Liệu",
        "title": "Chọn lọc dữ liệu tinh hoa thay vì 'xả rác' số liệu (Data Selection)",
        "band_range": [
            "6.5",
            "9.0"
        ],
        "difficulty": "reasoning",
        "hook": "Bạn không có nghĩa vụ phải chép lại toàn bộ 25 số liệu trên biểu đồ.",
        "core_rule": "5 điểm vàng cần chọn lọc: (1) Điểm khởi đầu (Start), (2) Điểm kết thúc (End), (3) Đỉnh cao nhất / Đáy thấp nhất (Peak / Trough), (4) Điểm giao nhau / Đổi ngôi (Crossover), (5) Điểm bất thường (Anomaly).",
        "why_it_works": "Tiêu chí Task Achievement đánh giá cao 'selects and reports the main features'. Chép hết mọi điểm thể hiện sự thiếu năng lực tổng hợp thông tin.",
        "common_mistakes": [
            "Kể chi tiết từng năm 2001, 2002, 2003, 2004 khiến bài viết dài dòng lê thê",
            "Bỏ quên điểm chạm đỉnh cao nhất"
        ],
        "worked_example": {
            "input": "Biểu đồ có 10 mốc năm từ 2010 đến 2020. Đường A bắt đầu ở 10, chạm đỉnh 95 vào 2016, rồi kết thúc ở 70 vào 2020.",
            "weak": "In 2010 it was 10, in 2011 it was 15, in 2012 it was 22, in 2013 it was 40, in 2014 it was 60, in 2015 it was 80, in 2016 it was 95...",
            "better": "Starting at a modest 10% in 2010, figure A grew steadily before reaching a peak of 95% in 2016, after which it moderated to finish at 70% in 2020.",
            "explanation": "Chỉ chọn 3 điểm then chốt (Start 10%, Peak 95%, End 70%) để tóm gọn trọn vẹn quỹ đạo 10 năm một cách tinh tế."
        },
        "micro_practice": {
            "id": "P-W1-DATA-003",
            "type": "recognize",
            "time_seconds": 45,
            "prompt": "Một đường biểu đồ có 8 mốc năm liên tục. Bạn nên chọn những điểm nào để báo cáo?",
            "options": [
                {
                    "id": "A",
                    "text": "Điểm khởi đầu, điểm đỉnh/đáy đáng kể, điểm giao nhau và điểm kết thúc giai đoạn.",
                    "isCorrect": true,
                    "feedback": "Chính xác! Đây là chiến lược chọn lọc dữ liệu chuẩn mực của chuyên gia.",
                    "errorCode": null
                },
                {
                    "id": "B",
                    "text": "Tất cả 8 mốc năm không được bỏ sót mốc nào.",
                    "isCorrect": false,
                    "feedback": "Lỗi W1-DATA-DUMPING: Sa đà vào chi tiết vụn vặt làm mất tính tổng hợp của báo cáo.",
                    "errorCode": "W1-DATA-DUMPING"
                }
            ],
            "socratic_guidance": "Chỉ nêu các điểm mà tại đó xu hướng thay đổi hướng đi hoặc đạt giá trị cực trị."
        },
        "recall_prompt": "5 điểm dữ liệu then chốt cần ưu tiên chọn lọc khi mô tả biểu đồ Task 1 là gì?",
        "recall_answer": "1) Khởi đầu, 2) Kết thúc, 3) Đỉnh/Đáy, 4) Điểm giao cắt, 5) Ngoại lệ bất thường.",
        "related_skill_ids": [
            "W1-DATA-001",
            "W1-OV-001"
        ],
        "error_code": "W1-DATA-DUMPING"
    },
    {
        "id": "W1-MAP-001",
        "provenance": "HUY_DERIVED",
        "skill": "writing_task_1",
        "skill_name": "Writing Task 1",
        "subskill": "map_transformation",
        "subskill_name": "Bản Đồ Biến Đổi Không Gian",
        "title": "Bản đồ là sự biến đổi không gian: Khu vực → Trạng thái cũ → Hành động chuyển đổi → Trạng thái mới",
        "band_range": [
            "6.0",
            "9.0"
        ],
        "difficulty": "reasoning",
        "hook": "Đừng miêu tả từng cái cây hay ngôi nhà đơn lẻ trên bản đồ. Hãy nhìn theo vùng chuyển đổi.",
        "core_rule": "Cấu trúc tư duy bản đồ: (1) Khu vực (Zone/Location) → (2) Quá khứ từng có gì → (3) Bị phá bỏ / thay thế / mở rộng / giữ nguyên thế nào → (4) Hiện tại là công trình gì.",
        "why_it_works": "Bản đồ kiểm tra từ vựng không gian và năng lực theo dõi sự thay đổi qua thời gian (Spatial transformations).",
        "common_mistakes": [
            "Liệt kê bản đồ năm cũ riêng 1 đoạn rồi năm mới riêng 1 đoạn không đối chiếu",
            "Quên các khu vực giữ nguyên không đổi"
        ],
        "visual_task": {
            "type": "map_transformation",
            "title": "Village Development (2010 vs Present)",
            "zones": {
                "north": {
                    "past": "Woodland / Trees",
                    "present": "Residential Housing Complex",
                    "change": "replaced",
                    "color": "#3b82f6"
                },
                "center": {
                    "past": "Small School House",
                    "present": "Expanded Multi-story School",
                    "change": "expanded",
                    "color": "#10b981"
                },
                "south": {
                    "past": "Farmland",
                    "present": "Farmland",
                    "change": "unchanged",
                    "color": "#64748b"
                },
                "east": {
                    "past": "Empty Field",
                    "present": "Supermarket & Car Park",
                    "change": "converted",
                    "color": "#f59e0b"
                }
            }
        },
        "worked_example": {
            "input": "Khu vực phía Bắc: Năm 2010 là khu rừng cây xanh; Hiện tại là khu dân cư hiện đại.",
            "weak": "In 2010, the north had woodland. Now the north has housing.",
            "better": "In the northern sector, the previous woodland has been cleared to make way for a modern residential complex.",
            "explanation": "Sử dụng cụm động từ chuyển đổi chuẩn xác ('has been cleared to make way for') mô tả rõ cả quá trình từ cũ sang mới."
        },
        "micro_practice": {
            "id": "P-W1-MAP-001",
            "type": "recognize",
            "time_seconds": 45,
            "prompt": "Nhìn vào bản đồ biến đổi ở trên, xác định động từ chuẩn xác cho khu vực phía Bắc (North):",
            "options": [
                {
                    "id": "A",
                    "text": "The woodland was completely replaced by a modern residential housing complex.",
                    "isCorrect": true,
                    "feedback": "Chính xác! Động từ 'replaced by' phản ánh đúng 100% sự biến đổi thực tế trên bản đồ.",
                    "errorCode": null
                },
                {
                    "id": "B",
                    "text": "The woodland was expanded to include more houses.",
                    "isCorrect": false,
                    "feedback": "Lỗi W1-MAP-WRONG-TRANSFORMATION: Rừng bị chặt bỏ thay thế chứ không phải được 'mở rộng'.",
                    "errorCode": "W1-MAP-WRONG-TRANSFORMATION"
                }
            ],
            "socratic_guidance": "Vật thể cũ biến mất và vật thể mới xuất hiện cùng vị trí = 'replaced by' hoặc 'demolished to make way for'."
        },
        "recall_prompt": "Chuỗi tư duy 4 bước chuẩn mực khi mô tả một đối tượng thay đổi trên bản đồ Task 1 là gì?",
        "recall_answer": "Vị trí khu vực → Trạng thái quá khứ → Động từ chuyển đổi → Trạng thái hiện tại/chức năng mới.",
        "related_skill_ids": [
            "W1-MAP-002",
            "W1-MAP-004"
        ],
        "error_code": "W1-MAP-WRONG-TRANSFORMATION"
    },
    {
        "id": "W1-PROCESS-001",
        "provenance": "HUY_DERIVED",
        "skill": "writing_task_1",
        "skill_name": "Writing Task 1",
        "subskill": "process_sequencing",
        "subskill_name": "Quy Trình Sản Xuất & Tự Nhiên",
        "title": "Quy trình = Nguyên liệu đầu vào → Chuỗi chuyển hóa → Thành phẩm đầu ra",
        "band_range": [
            "6.0",
            "9.0"
        ],
        "difficulty": "reasoning",
        "hook": "Đừng coi quy trình là các mũi tên rời rạc. Hãy xem nguyên liệu biến đổi bản chất qua từng công đoạn ra sao.",
        "core_rule": "Xác định rõ: (1) Điểm khởi đầu (Input) → (2) Các giai đoạn trung gian (Transformation stages) dùng thể bị động (Passive voice) và từ nối trình tự (Subsequently, following this) → (3) Thành phẩm cuối cùng (Output).",
        "why_it_works": "Quy trình nhân tạo chủ yếu sử dụng thể bị động vì tác nhân con người không quan trọng bằng đối tượng được xử lý.",
        "common_mistakes": [
            "Dùng thể chủ động 'Someone boils the water' thay vì 'The water is boiled'",
            "Quên mạo từ xác định 'the' khi nhắc lại ở các bước sau"
        ],
        "visual_task": {
            "type": "process_flow",
            "title": "Water Purification Process",
            "input": "Raw Reservoir Water",
            "stages": [
                {
                    "stage": 1,
                    "name": "Screening",
                    "desc": "Large debris & leaves removed by mesh grid"
                },
                {
                    "stage": 2,
                    "name": "Filtration",
                    "desc": "Passes through sand and gravel layers"
                },
                {
                    "stage": 3,
                    "name": "Chlorination",
                    "desc": "Chlorine injected to eliminate harmful bacteria"
                },
                {
                    "stage": 4,
                    "name": "Storage & Distribution",
                    "desc": "Treated clean water pumped into city water towers"
                }
            ],
            "output": "Safe Drinkable Tap Water"
        },
        "worked_example": {
            "input": "Giai đoạn khử trùng: Đưa Clo vào nước đã lọc để diệt khuẩn.",
            "weak": "They put chlorine into water to kill bacteria.",
            "better": "Once filtered, the water undergoes chemical disinfection, where chlorine is introduced to destroy remaining pathogens.",
            "explanation": "Sử dụng thể bị động học thuật ('chlorine is introduced') và liên từ thời gian ('Once filtered') tạo liên kết chặt chẽ."
        },
        "micro_practice": {
            "id": "P-W1-PROC-001",
            "type": "recognize",
            "time_seconds": 45,
            "prompt": "Nhìn vào sơ đồ quy trình lọc nước trên, câu nào mô tả Giai đoạn 1 chuẩn văn phong Task 1?",
            "options": [
                {
                    "id": "A",
                    "text": "Initially, raw water is directed through a mesh screen to eliminate floating impurities.",
                    "isCorrect": true,
                    "feedback": "Tuyệt vời! Thể bị động chuẩn xác kèm từ nối khởi đầu 'Initially'.",
                    "errorCode": null
                },
                {
                    "id": "B",
                    "text": "First of all, someone filters raw water using a screen to catch trash.",
                    "isCorrect": false,
                    "feedback": "Lỗi W1-PROCESS-STYLE: Không dùng đại từ bất định 'someone' hoặc từ khẩu ngữ 'trash' trong quy trình khoa học.",
                    "errorCode": "W1-PROCESS-STYLE"
                }
            ],
            "socratic_guidance": "Trong quy trình kỹ thuật, tập trung vào hành động xảy ra với nguyên liệu (bị động), không nhắc đến người vận hành chung chung."
        },
        "recall_prompt": "Thể ngữ pháp chủ đạo bắt buộc khi miêu tả quy trình sản xuất nhân tạo (Man-made process) là gì?",
        "recall_answer": "Thể bị động (Passive voice) kết hợp các liên từ chỉ thứ tự thời gian.",
        "related_skill_ids": [
            "W1-PROCESS-002",
            "W1-TENSE-001"
        ],
        "error_code": "W1-PROCESS-STYLE"
    },
    {
        "id": "W2-MECH-001",
        "provenance": "HUY_DERIVED",
        "skill": "writing_task_2",
        "skill_name": "Writing Task 2",
        "subskill": "mechanism_building",
        "subskill_name": "Xây Dựng Cơ Chế (Mechanism)",
        "title": "Chuyển từ Nêu Luận Điểm sang Giải Thích Cơ Chế: Luận điểm → Cơ chế vận hành → Hệ quả",
        "band_range": [
            "6.5",
            "9.0"
        ],
        "difficulty": "reasoning",
        "hook": "Một ý tưởng hay đến mấy cũng vô giá trị nếu bạn chỉ hô khẩu hiệu mà không giải thích 'bằng cách nào' nó hoạt động.",
        "core_rule": "Cấu trúc chuỗi lập luận bất bại: CLAIM (Luận điểm) → HOW? (Cơ chế hoạt động cụ thể qua mắt xích nào) → WHO IS AFFECTED? (Đối tượng hưởng lợi/chịu tác động) → CONSEQUENCE (Hệ quả cuối cùng).",
        "why_it_works": "Tiêu chí Task Response ở Band 7.0+ yêu cầu 'presents, extends and supports main ideas'. Giám khảo trừ điểm nặng các bài chỉ lặp lại luận điểm bằng từ đồng nghĩa thay vì xây dựng cơ chế chứng minh.",
        "common_mistakes": [
            "Lặp lại luận điểm bằng từ đồng nghĩa (Tautology)",
            "Nhảy cóc thẳng sang ví dụ cá nhân mà không có mắt xích giải thích ở giữa"
        ],
        "worked_example": {
            "input": "Luận điểm: Tăng trưởng kinh tế giúp xóa đói giảm nghèo.",
            "weak": "Economic growth helps reduce poverty because when the economy grows, poor people have better lives.",
            "better": "Economic expansion broadens the national tax base, enabling governments to allocate increased revenue toward public healthcare, schooling, and transport infrastructure, which ultimately enhances social mobility for disadvantaged households.",
            "explanation": "Xây dựng chuỗi cơ chế rõ ràng: Tăng trưởng → Tăng nguồn thu thuế → Đầu tư công vào hạ tầng/giáo dục → Tăng cơ hội thoát nghèo cho người thu nhập thấp."
        },
        "micro_practice": {
            "id": "P-W2-MECH-001",
            "type": "repair",
            "time_seconds": 60,
            "prompt": "Hoàn thiện mắt xích còn thiếu trong chuỗi cơ chế: 'Làm việc từ xa (Remote work) → [MẮT XÍCH CƠ CHẾ] → Giảm ùn tắc giao thông đô thị'. Chọn phương án nối logic nhất:",
            "options": [
                {
                    "id": "A",
                    "text": "→ Nhân viên không cần di chuyển trên đường vào giờ cao điểm, giảm lượng phương tiện cá nhân lưu thông đồng thời →",
                    "isCorrect": true,
                    "feedback": "Chính xác! Đây là cơ chế vật lý trực tiếp giải thích vì sao làm việc tại nhà làm giảm áp lực hạ tầng giao thông.",
                    "errorCode": null
                },
                {
                    "id": "B",
                    "text": "→ Nhân viên cảm thấy vui vẻ hơn khi ở nhà với gia đình →",
                    "isCorrect": false,
                    "feedback": "Lỗi W2-MECHANISM-MISSING: Vui vẻ là cảm xúc, không phải cơ chế giải thích việc giảm kẹt xe.",
                    "errorCode": "W2-MECHANISM-MISSING"
                }
            ],
            "socratic_guidance": "Cơ chế phải trả lời câu hỏi: 'Điều gì thay đổi trực tiếp trong chuỗi vận hành vật lý/xã hội để dẫn đến kết quả đó?'"
        },
        "recall_prompt": "Chuỗi 3 mắt xích bắt buộc để triển khai một luận điểm Task 2 sâu sắc là gì?",
        "recall_answer": "Luận điểm (Claim) → Cơ chế vận hành (Mechanism / How) → Hệ quả tác động (Consequence).",
        "related_skill_ids": [
            "W2-MECH-002",
            "W2-IDEA-001",
            "W2-EX-001"
        ],
        "error_code": "W2-MECHANISM-MISSING"
    },
    {
        "id": "W2-Q-002",
        "provenance": "HUY_DERIVED",
        "skill": "writing_task_2",
        "skill_name": "Writing Task 2",
        "subskill": "question_intelligence",
        "subskill_name": "Phân Tích Đề Bài",
        "title": "Bắt bẻ từ ngữ tuyệt đối hóa (Absolute Language Detection)",
        "band_range": [
            "6.5",
            "9.0"
        ],
        "difficulty": "reasoning",
        "hook": "Mỗi khi đề bài xuất hiện từ mang tính tuyệt đối, đó chính là 'tử huyệt' để bạn bẻ gãy và ghi điểm Task Response xuất sắc.",
        "core_rule": "Tìm kiếm các từ mang tính tuyệt đối trong đề: only, all, always, never, the best, the sole solution. Luôn phản biện bằng cách chỉ ra các ngoại lệ thực tế hoặc các giải pháp bổ trợ cần thiết.",
        "why_it_works": "Các đề bài chứa từ tuyệt đối thường là một tiền đề có lỗ hổng (flawed assumption). Chỉ ra được lỗ hổng này giúp bạn thể hiện Critical Thinking (Tư duy phản biện bậc cao).",
        "common_mistakes": [
            "Đồng ý tuyệt đối với đề bài mà không nhận ra sự phi lý khi áp dụng vào mọi hoàn cảnh",
            "Không đưa ra được trường hợp giới hạn"
        ],
        "worked_example": {
            "input": "Đề bài: 'The ONLY way to improve road safety is to impose strict punishments on driving offences.'",
            "weak": "I completely agree that severe punishment is the only way to make roads safe.",
            "better": "While rigorous penalties act as a powerful deterrent against dangerous driving, claiming that punishment is the sole remedy overlooks vital complementary factors such as driver education and road infrastructure improvements.",
            "explanation": "Thí sinh thừa nhận giá trị của hình phạt nhưng bẻ gãy từ 'ONLY' bằng 2 giải pháp song hành: giáo dục lái xe và nâng cấp chất lượng đường bộ."
        },
        "micro_practice": {
            "id": "P-W2-Q-002",
            "type": "recognize",
            "time_seconds": 45,
            "prompt": "Đề bài: 'University education should be FREE for ALL students.' Từ nào trong đề bài là điểm nhạy cảm cần được đưa vào phân tích giới hạn?",
            "options": [
                {
                    "id": "A",
                    "text": "'ALL' — Cần phân tích gánh nặng tài khóa của chính phủ và liệu mọi ngành học/mọi đối tượng giàu nghèo đều nên miễn phí 100% hay cần có học bổng theo nhu cầu.",
                    "isCorrect": true,
                    "feedback": "Chính xác! Từ 'ALL' mở ra hướng lập luận về phân bổ ngân sách công có chọn lọc.",
                    "errorCode": null
                },
                {
                    "id": "B",
                    "text": "'University' — Cần phân tích lịch sử của các trường đại học thời trung cổ.",
                    "isCorrect": false,
                    "feedback": "Lỗi W2-OFF-TASK: Lạc đề, không phục vụ mục đích kiểm tra tính khả thi của chính sách.",
                    "errorCode": "W2-OFF-TASK"
                }
            ],
            "socratic_guidance": "Hãy tự hỏi: Điều gì xảy ra nếu áp dụng chính sách này cho 100% mọi người mà không có bất kỳ ngoại lệ nào?"
        },
        "recall_prompt": "Những từ tuyệt đối hóa nào trong đề Writing Task 2 là tín hiệu mở ra cơ hội phản biện?",
        "recall_answer": "only, all, always, never, the best, the sole way/measure.",
        "related_skill_ids": [
            "W2-Q-001",
            "W2-EXTREME-001",
            "W2-COUNTER-001"
        ],
        "error_code": "W2-ASSUMPTION-UNTESTED"
    },
    {
        "id": "W2-IDEA-002",
        "provenance": "HUY_DERIVED",
        "skill": "writing_task_2",
        "skill_name": "Writing Task 2",
        "subskill": "idea_generation",
        "subskill_name": "Phát Triển Ý Tưởng",
        "title": "Đừng hỏi 'Ý này có tốt không?' — Hãy hỏi 'Tốt trong hoàn cảnh cụ thể nào?'",
        "band_range": [
            "6.0",
            "9.0"
        ],
        "difficulty": "control",
        "hook": "Mọi luận điểm chung chung đều trở nên sắc bén khi bạn đặt nó vào đúng ngữ cảnh và ranh giới áp dụng.",
        "core_rule": "Thay vì hỏi chung chung 'Tự chữa bệnh tại nhà (Self-treatment) có lợi không?', hãy hỏi 'Tự chữa bệnh có lợi đối với dạng bệnh nào (cảm cúm nhẹ) và trở nên nguy hiểm trong trường hợp nào (bệnh hiểm nghèo, cần chẩn đoán chuyên sâu)?'",
        "why_it_works": "Tạo ra ranh giới (Boundaries & Scenarios) giúp bài viết có chiều sâu biện chứng, tránh được lỗi vơ đũa cả nắm và nâng cao độ thuyết phục.",
        "common_mistakes": [
            "Khẳng định một phương pháp luôn đúng cho mọi đối tượng ở mọi hoàn cảnh",
            "Ý tưởng quá rộng đến mức không thể đưa ra ví dụ cụ thể"
        ],
        "worked_example": {
            "input": "Học trực tuyến (Online learning).",
            "weak": "Online learning is very beneficial for everyone.",
            "better": "Online education proves highly advantageous for working adults seeking schedule flexibility and specialized certifications, whereas it may hinder primary school children who depend on in-person social interactions and hands-on guidance.",
            "explanation": "Phân tách rõ 2 ngữ cảnh: Người lớn đi làm (hiệu quả cao) vs Trẻ tiểu học (gặp trở ngại)."
        },
        "micro_practice": {
            "id": "P-W2-IDEA-002",
            "type": "repair",
            "time_seconds": 60,
            "prompt": "Ý tưởng: 'Làm việc nhóm (Teamwork) luôn tốt hơn làm việc độc lập'. Hãy chọn câu triển khai có giới hạn ngữ cảnh sắc sảo nhất:",
            "options": [
                {
                    "id": "A",
                    "text": "Collaborative teamwork is indispensable in complex interdisciplinary projects requiring diverse skills, while autonomous independent work remains far more productive for deep creative thinking and technical writing.",
                    "isCorrect": true,
                    "feedback": "Chính xác! Phân định rõ ngữ cảnh: Dự án liên ngành đa kỹ năng vs Công việc chuyên sâu cần tập trung cá nhân.",
                    "errorCode": null
                },
                {
                    "id": "B",
                    "text": "Teamwork is always great because people can talk together and make friends easily at the office.",
                    "isCorrect": false,
                    "feedback": "Lỗi W2-IDEA-VAGUE: Lập luận cảm tính, ngô nghê và không có ranh giới phân tích học thuật.",
                    "errorCode": "W2-IDEA-VAGUE"
                }
            ],
            "socratic_guidance": "Hãy luôn thêm mệnh đề 'In situations where...' hoặc 'For individuals who...' để neo ý tưởng vào thực tế."
        },
        "recall_prompt": "Câu hỏi vàng để biến một ý tưởng nông cạn thành luận điểm sâu sắc là gì?",
        "recall_answer": "Ý tưởng này hữu ích / có hiệu lực trong hoàn cảnh và đối tượng cụ thể nào? (Useful in what situation?).",
        "related_skill_ids": [
            "W2-IDEA-001",
            "W2-STAKE-001"
        ],
        "error_code": "W2-IDEA-VAGUE"
    },
    {
        "id": "R-QF-001",
        "provenance": "HUY_DERIVED",
        "skill": "reading",
        "skill_name": "Reading",
        "subskill": "evidence_localisation",
        "subskill_name": "Định Vị Bằng Chứng",
        "title": "Đọc câu hỏi trước — Định vị mỏ neo độc nhất — Đọc ngữ cảnh hẹp để chốt đáp án",
        "band_range": [
            "5.5",
            "9.0"
        ],
        "difficulty": "foundation",
        "hook": "Đừng đọc từ đầu đến cuối 1000 từ của bài đọc như đọc tiểu thuyết trước khi làm bài thi.",
        "core_rule": "Quy trình quét bằng chứng 4 bước: (1) Phân tích câu hỏi → (2) Chọn 1-2 Cụm từ mỏ neo không thể thay thế (Tên riêng, số liệu, thuật ngữ kỹ thuật) → (3) Quét nhanh xác định vị trí đoạn văn → (4) Đọc kỹ cửa sổ ngữ cảnh hẹp (1-2 câu lân cận) để đối chiếu ý nghĩa.",
        "why_it_works": "Bài thi IELTS Reading kiểm tra khả năng định vị thông tin nhanh (Skimming/Scanning) và đọc hiểu cục bộ chính xác dưới áp lực thời gian 60 phút / 40 câu.",
        "common_mistakes": [
            "Đọc toàn bộ bài đọc từ từ làm cạn kiệt thời gian",
            "Chọn từ khóa chung chung như 'people', 'impact', 'problem' làm từ mỏ neo"
        ],
        "worked_example": {
            "input": "Câu hỏi: 'In 1984, Dr. Aris Thorne discovered that volcanic ash in the Andes contained unique traces of...'?",
            "weak": "Dùng từ 'discovered' hoặc 'contained' để đi tìm trong bài.",
            "better": "Neo vào: '1984', 'Dr. Aris Thorne', 'Andes', 'volcanic ash'. Đây là các mỏ neo độc nhất không thể bị paraphrase, mắt người bắt được trong 3 giây.",
            "explanation": "Các từ chuyên biệt (Proper nouns / dates) cho phép khoanh vùng chính xác dòng chứa câu trả lời ngay lập tức."
        },
        "micro_practice": {
            "id": "P-R-QF-001",
            "type": "recognize",
            "time_seconds": 30,
            "prompt": "Câu hỏi: 'According to Professor Higgins, the decline of the Mayan civilization was accelerated by prolonged megadroughts.' Đâu là cụm từ MỎ NEO định vị tốt nhất?",
            "options": [
                {
                    "id": "A",
                    "text": "'Professor Higgins' & 'megadroughts'",
                    "isCorrect": true,
                    "feedback": "Chính xác! Tên riêng viết hoa và thuật ngữ hiếm 'megadroughts' là mỏ neo vàng giúp định vị đoạn văn trong vài giây.",
                    "errorCode": null
                },
                {
                    "id": "B",
                    "text": "'decline' & 'civilization'",
                    "isCorrect": false,
                    "feedback": "Lỗi R-KEYWORD-TOO-GENERIC: Hai từ này là chủ đề chung của toàn bộ bài đọc, xuất hiện lặp lại ở hầu hết các đoạn.",
                    "errorCode": "R-KEYWORD-TOO-GENERIC"
                }
            ],
            "socratic_guidance": "Mỏ neo tốt là từ mà người viết KHÔNG THỂ thay thế bằng từ đồng nghĩa khác (tên người, năm tháng, thuật ngữ khoa học)."
        },
        "recall_prompt": "4 bước chuẩn xác của quy trình Question-First trong IELTS Reading là gì?",
        "recall_answer": "Đọc câu hỏi → Chọn cụm mỏ neo độc nhất → Định vị vị trí đoạn văn → Đọc kỹ cửa sổ ngữ cảnh hẹp.",
        "related_skill_ids": [
            "R-KEY-001",
            "R-PARA-001",
            "R-TIME-001"
        ],
        "error_code": "R-KEYWORD-TOO-GENERIC"
    },
    {
        "id": "R-PARA-001",
        "provenance": "HUY_DERIVED",
        "skill": "reading",
        "skill_name": "Reading",
        "subskill": "paraphrase_matching",
        "subskill_name": "Đối Chiếu Paraphrase",
        "title": "Khớp ý nghĩa thực chất, đừng để bị lừa bởi từ vựng giống hệt mặt chữ",
        "band_range": [
            "6.0",
            "9.0"
        ],
        "difficulty": "control",
        "hook": "Trong IELTS Reading, phương án nào chứa từ giống hệt 100% từng chữ trong bài đọc thường là CẠM BẪY giăng sẵn.",
        "core_rule": "Đáp án đúng gần như luôn được Paraphrase dưới dạng: (1) Từ đồng nghĩa học thuật, (2) Cấu trúc quan hệ nhân quả tương đương, hoặc (3) Diễn giải định nghĩa. Hãy tìm sự tương đồng về logic nội dung chứ không phải so từng ký tự.",
        "why_it_works": "Người ra đề thiết kế các bẫy Distractor bằng cách lấy nguyên xi 2-3 từ trong bài đọc rồi ghép vào một nhận định sai lệch ngữ cảnh để bẫy những thí sinh chỉ quét mắt tìm từ.",
        "common_mistakes": [
            "Thấy từ giống hệt trong bài đọc liền chọn ngay mà không đọc kỹ ngữ cảnh",
            "Bỏ qua đáp án đúng vì dùng từ vựng lạ hơn dù nghĩa tương đương"
        ],
        "worked_example": {
            "input": "Bài đọc: 'The government deemed it imperative to curb vehicular emissions in metropolitan hubs.'",
            "weak": "Chọn đáp án có chữ 'vehicular emissions' nhưng mang nghĩa: 'Emissions are increasing in cities'.",
            "better": "Chọn đáp án Paraphrase: 'Authorities considered it essential to reduce traffic pollution in major cities.'",
            "explanation": "'government' = 'authorities', 'deemed it imperative' = 'considered it essential', 'curb vehicular emissions' = 'reduce traffic pollution'."
        },
        "micro_practice": {
            "id": "P-R-PARA-001",
            "type": "diagnose",
            "time_seconds": 45,
            "prompt": "Bài đọc ghi: 'Prolonged exposure to artificial light disrupts the circadian rhythms of nocturnal animals.' Đáp án nào phản ánh ĐÚNG nghĩa bài đọc?",
            "options": [
                {
                    "id": "A",
                    "text": "Night-active creatures experience sleep-cycle disturbances due to sustained artificial illumination.",
                    "isCorrect": true,
                    "feedback": "Chính xác! 'Nocturnal animals' = 'night-active creatures', 'disrupts circadian rhythms' = 'experience sleep-cycle disturbances', 'prolonged exposure' = 'sustained artificial illumination'.",
                    "errorCode": null
                },
                {
                    "id": "B",
                    "text": "Artificial light encourages nocturnal animals to hunt during the daytime.",
                    "isCorrect": false,
                    "feedback": "Lỗi R-INFERENCE-OVERREACH: Bài đọc chỉ nói bị rối loạn nhịp sinh học, không hề nhắc đến việc 'đi săn ban ngày'.",
                    "errorCode": "R-INFERENCE-OVERREACH"
                }
            ],
            "socratic_guidance": "Đối chiếu từng thành phần: Chủ ngữ có khớp không? Động từ có bảo toàn bản chất hành động không? Trạng từ có làm sai lệch mức độ không?"
        },
        "recall_prompt": "Tại sao phương án chứa từ giống hệt từng chữ trong bài đọc Reading lại thường là bẫy?",
        "recall_answer": "Vì người ra đề dùng từ trùng lặp để gài bẫy người chỉ quét chữ; đáp án đúng thực sự gần như luôn được diễn giải lại (Paraphrased).",
        "related_skill_ids": [
            "R-QF-001",
            "R-ELIM-001",
            "R-INFER-001"
        ],
        "error_code": "R-WORD-MATCH-TRAP"
    },
    {
        "id": "L-CORR-001",
        "provenance": "HUY_DERIVED",
        "skill": "listening",
        "skill_name": "Listening",
        "subskill": "distractor_filtering",
        "subskill_name": "Lọc Bẫy Đổi Ý",
        "title": "Bắt sóng tín hiệu đính chính: Thông tin ban đầu → Tín hiệu đảo ý → Thông tin chốt",
        "band_range": [
            "5.0",
            "8.5"
        ],
        "difficulty": "foundation",
        "hook": "Đừng vội ghi ngay số đầu tiên bạn nghe thấy. Người bản xứ rất thích 'thay đổi ý định' ở giây tiếp theo!",
        "core_rule": "Cảnh giác cao độ với các từ chuyển hướng đính chính: 'Actually...', 'Wait, let me double check...', 'Sorry, that was yesterday's price, today it's...', 'I thought so, but instead...'. Thông tin sau từ đính chính mới là đáp án đúng.",
        "why_it_works": "Part 1 và Part 2 của IELTS Listening thường xuyên tạo bẫy hội thoại đời thực để kiểm tra xem thí sinh có theo dõi được diễn biến liên tục hay chỉ nghe giật cục từng từ.",
        "common_mistakes": [
            "Nghe thấy '$120' lập tức ghi vào giấy thi và ngừng nghe, bỏ lỡ câu tiếp theo đính chính còn $95",
            "Ghi nhầm số nhà/số điện thoại cũ trước khi được sửa lại"
        ],
        "worked_example": {
            "input": "Audio: 'We originally scheduled the workshop for Wednesday the 14th, but due to room availability, we've had to push it to Friday the 16th.'",
            "weak": "Ghi đáp án: 'Wednesday 14th'.",
            "better": "Ghi đáp án đúng: 'Friday 16th'.",
            "explanation": "'Originally' là tín hiệu cảnh báo thông tin phía sau sẽ bị hủy bỏ; đáp án thực sự nằm sau liên từ 'but'."
        },
        "micro_practice": {
            "id": "P-L-CORR-001",
            "type": "recognize",
            "time_seconds": 40,
            "prompt": "Nghe đoạn thoại giả định: 'The annual membership fee is £150, but if you sign up before noon today, you only need to pay £110.' Giá tiền thực tế học sinh cần đóng là bao nhiêu?",
            "options": [
                {
                    "id": "A",
                    "text": "£110 (Ưu đãi đăng ký trước buổi trưa)",
                    "isCorrect": true,
                    "feedback": "Chính xác! Tín hiệu 'but if you sign up before noon today' khẳng định mức phí thực tế áp dụng là £110.",
                    "errorCode": null
                },
                {
                    "id": "B",
                    "text": "£150 (Mức phí ban đầu)",
                    "isCorrect": false,
                    "feedback": "Lỗi L-CORRECTION-MISSED: Bạn đã mắc bẫy chọn thông tin gốc ban đầu trước khi người nói đưa ra điều kiện giảm giá.",
                    "errorCode": "L-CORRECTION-MISSED"
                }
            ],
            "socratic_guidance": "Hãy luôn kiên nhẫn đợi người nói kết thúc trọn vẹn câu thoại trước khi chốt đáp án vào phiếu trả lời."
        },
        "recall_prompt": "Các từ khóa báo hiệu người nói sắp đính chính thông tin trong IELTS Listening gồm những từ nào?",
        "recall_answer": "Actually, wait, sorry, originally, I thought so but, let me check, instead.",
        "related_skill_ids": [
            "L-PRED-001",
            "L-DIST-001"
        ],
        "error_code": "L-CORRECTION-MISSED"
    },
    {
        "id": "L-TRANS-001",
        "provenance": "HUY_DERIVED",
        "skill": "listening",
        "skill_name": "Listening",
        "subskill": "transition_recovery",
        "subskill_name": "Chuyển Giao & Phục Hồi",
        "title": "Bỏ qua câu đã lỡ — Tuyệt đối không mang tâm lý hoang mang sang phần tiếp theo",
        "band_range": [
            "5.5",
            "9.0"
        ],
        "difficulty": "control",
        "hook": "Một câu trôi qua là vĩnh viễn trôi qua. Đừng để 1 câu lỡ làm sập toàn bộ 10 câu tiếp theo!",
        "core_rule": "Nguyên tắc 'Miss-one-and-move-on': Nếu bạn lỡ mất 1 câu, hãy lập tức chọn đại 1 phán đoán nhanh trong 1 giây, buông bỏ hoàn toàn câu đó và chuyển mắt nhìn ngay sang từ khóa của câu tiếp theo trong bài nghe.",
        "why_it_works": "Băng ghi âm không dừng lại chờ bạn. Nếu bạn dùng 5 giây để tiếc nuối câu vừa rồi, bạn sẽ bỏ lỡ thời điểm người nói bắt đầu phát tín hiệu cho 2 câu kế tiếp, tạo nên hiệu ứng domino sụp đổ điểm số.",
        "common_mistakes": [
            "Ngồi suy nghĩ lại từ vừa nghe trong khi băng đã nói sang câu hỏi sau",
            "Mất bình tĩnh khi gặp từ lạ ở Part 3 dẫn đến bỏ trắng cả Part 4"
        ],
        "worked_example": {
            "input": "Bạn không nghe được câu 23 trong Part 3 về tên loài chim.",
            "weak": "Cố nhớ lại âm thanh câu 23, dẫn đến khi băng nói đến câu 24 và 25 bạn hoàn toàn không biết họ đang ở đoạn nào.",
            "better": "Khoanh nhanh 1 phương án hợp lý, đưa mắt ngay xuống câu 24 để đón bắt từ khóa tiếp theo.",
            "explanation": "Bảo toàn điểm số cho các câu còn lại quan trọng gấp 10 lần việc cứu vãn một câu đã trôi qua."
        },
        "micro_practice": {
            "id": "P-L-TRANS-001",
            "type": "recognize",
            "time_seconds": 30,
            "prompt": "Trong phòng thi Listening, nếu bạn nhận ra mình vừa bị lỡ mất câu số 14, hành động chuẩn xác nhất của một thí sinh bản lĩnh là gì?",
            "options": [
                {
                    "id": "A",
                    "text": "Lập tức buông bỏ câu 14, di chuyển tầm mắt xuống câu 15 và tập trung nghe từ khóa của câu 15.",
                    "isCorrect": true,
                    "feedback": "Chính xác! Cắt đứt chuỗi phản ứng dây chuyền thất bại (Chain Failure Prevention) là kỹ năng sống còn.",
                    "errorCode": null
                },
                {
                    "id": "B",
                    "text": "Tập trung nhắm mắt hồi tưởng lại 3 từ vừa nghe để suy đoán câu 14.",
                    "isCorrect": false,
                    "feedback": "Lỗi L-TRANSITION-CARRYOVER: Hồi tưởng trong lúc băng đang chạy sẽ khiến bạn bỏ lỡ tiếp các câu 15, 16, 17.",
                    "errorCode": "L-TRANSITION-CARRYOVER"
                }
            ],
            "socratic_guidance": "Điểm số IELTS là tổng số câu đúng trên 40 câu. Hy sinh 1 câu để bảo vệ 39 câu còn lại là quyết định chiến lược đúng đắn."
        },
        "recall_prompt": "Quy tắc vàng khi bị lỡ một câu hỏi trong phần thi Listening là gì?",
        "recall_answer": "Miss-one-and-move-on: Buông bỏ tức thì, chuyển mắt sang câu tiếp theo để tránh chuỗi sụp đổ (Chain failure).",
        "related_skill_ids": [
            "L-PRED-001",
            "L-REC-001"
        ],
        "error_code": "L-TRANSITION-CARRYOVER"
    },
    {
        "id": "S-EXP-001",
        "provenance": "HUY_DERIVED",
        "skill": "speaking",
        "skill_name": "Speaking",
        "subskill": "response_engine",
        "subskill_name": "Khung Trả Lời Linh Hoạt",
        "title": "Khung phản xạ 4 tầng: Trả lời trực diện → Lý do → Ví dụ/Tình huống → Mở rộng",
        "band_range": [
            "6.0",
            "9.0"
        ],
        "difficulty": "control",
        "hook": "Đừng trả lời nhát gừng 1 câu 'Yes, I do' rồi ngồi im nhìn giám khảo.",
        "core_rule": "Cấu trúc phản xạ linh hoạt: (1) Direct Answer (Trả lời thẳng thắn, không vòng vo) → (2) Reason (Tại sao lại như vậy) → (3) Example / Specific Situation (Tình huống thực tế gần đây) → (4) Extension / Contrast (Nếu ngược lại thì sao).",
        "why_it_works": "Tiêu chí Fluency & Coherence yêu cầu thí sinh duy trì độ dài câu trả lời phù hợp mà không cần giám khảo phải liên tục nhắc 'Why?'.",
        "common_mistakes": [
            "Học thuộc lòng một bài mẫu 500 từ rồi đọc như trả bài",
            "Chỉ trả lời một câu cụt lủn không giải thích"
        ],
        "worked_example": {
            "input": "Giám khảo: 'Do you enjoy reading books in your free time?'",
            "weak": "Yes, I like reading books very much because it is interesting and gives me knowledge.",
            "better": "To be completely honest, it really depends on the material. If it's an engaging non-fiction book related to psychology, I can easily spend hours immersed in it. However, with casual news or social media articles, I tend to just skim through them quickly to save time.",
            "explanation": "Câu trả lời có độ phân hóa hoàn cảnh rõ ràng ('depends on the material'), có lý do và sự so sánh tương phản tự nhiên."
        },
        "micro_practice": {
            "id": "P-S-EXP-001",
            "type": "repair",
            "time_seconds": 60,
            "prompt": "Câu hỏi: 'Do you prefer cooking at home or eating out?' Chọn câu trả lời phát triển tự nhiên và mạch lạc nhất:",
            "options": [
                {
                    "id": "A",
                    "text": "I generally prefer home-cooked meals during weekdays because it allows me to control nutrition and save money. However, on busy weekends, I often eat out with friends to unwind and try new cuisines.",
                    "isCorrect": true,
                    "feedback": "Chính xác! Trả lời trực diện, phân tách ngày thường vs cuối tuần, nêu lý do rõ ràng và từ vựng tự nhiên.",
                    "errorCode": null
                },
                {
                    "id": "B",
                    "text": "Cooking is very good. I cook every day. My mother cooks too. Cooking is my hobby.",
                    "isCorrect": false,
                    "feedback": "Lỗi S-NO-DIRECT-ANSWER / S-VOCAB-FORCED: Các câu đơn rời rạc, lặp từ và thiếu tính liên kết ngữ nghĩa.",
                    "errorCode": "S-NO-DIRECT-ANSWER"
                }
            ],
            "socratic_guidance": "Hãy luôn đưa ra sự so sánh giữa 'ngày thường vs cuối tuần' hoặc 'khi rảnh vs khi bận' để câu trả lời có độ co giãn linh hoạt."
        },
        "recall_prompt": "4 thành tố của khung trả lời Speaking tự nhiên (Response Engine) là gì?",
        "recall_answer": "Direct Answer (Trả lời trực diện) → Reason (Lý do) → Example/Situation (Tình huống) → Extension/Contrast (Mở rộng/Đối chiếu).",
        "related_skill_ids": [
            "S-NOMEM-001",
            "S-CONTEXT-001",
            "S-LENGTH-001"
        ],
        "error_code": "S-NO-DIRECT-ANSWER"
    },
    {
        "id": "V-CHUNK-001",
        "provenance": "HUY_DERIVED",
        "skill": "language_control",
        "skill_name": "Language Control",
        "subskill": "academic_collocations",
        "subskill_name": "Cụm Từ Học Thuật (Collocations)",
        "title": "Học từ vựng theo Cụm (Chunks / Collocations), không học từ đơn lẻ",
        "band_range": [
            "6.0",
            "9.0"
        ],
        "difficulty": "control",
        "hook": "Biết 1000 từ đơn lẻ rời rạc không bằng làm chủ 200 cụm từ đi liền nhau chuẩn bản xứ.",
        "core_rule": "Luôn ghi nhớ từ vựng kèm động từ, giới từ và danh từ đi kèm: Thay vì học 'attention', hãy học 'hold someone's attention'; thay vì học 'pressure', hãy học 'relieve unnecessary pressure'; thay vì học 'responsibility', hãy học 'bear moral responsibility'.",
        "why_it_works": "Tiêu chí Lexical Resource ở Band 7+ yêu cầu 'uses less common lexical items with some awareness of style and collocation'. Dùng sai Collocation là dấu hiệu rõ nhất của người dịch thô từng chữ.",
        "common_mistakes": [
            "Dịch Word-by-Word từ tiếng Việt sang: 'make a damage' (sai) thay vì 'cause damage' (đúng)",
            "Nhồi nhét từ hiếm vào vị trí không phù hợp"
        ],
        "worked_example": {
            "input": "Ý muốn nói: 'Chính sách này giảm bớt gánh nặng tài chính cho người nghèo'.",
            "weak": "This policy makes the money problem smaller for poor people.",
            "better": "This policy serves to alleviate the financial burden on low-income families.",
            "explanation": "Cụm Collocation chuẩn mực: 'alleviate the financial burden on' nghe học thuật, tự nhiên và chính xác tuyệt đối."
        },
        "micro_practice": {
            "id": "P-V-CHUNK-001",
            "type": "recognize",
            "time_seconds": 40,
            "prompt": "Chọn cụm Collocation CHUẨN XÁC để điền vào câu: 'Investing in renewable infrastructure will _____ to long-term economic resilience.'",
            "options": [
                {
                    "id": "A",
                    "text": "contribute significantly",
                    "isCorrect": true,
                    "feedback": "Chính xác! 'contribute significantly to' là collocation học thuật chuẩn mực C1/C2.",
                    "errorCode": null
                },
                {
                    "id": "B",
                    "text": "make heavily",
                    "isCorrect": false,
                    "feedback": "Lỗi V-COLLOCATION-UNNATURAL: 'make heavily to' là kết hợp từ sai ngữ pháp và không tồn tại trong tiếng Anh.",
                    "errorCode": "V-COLLOCATION-UNNATURAL"
                }
            ],
            "socratic_guidance": "Khi học một động từ mới, hãy luôn tra từ điển xem nó đi kèm với giới từ nào và danh từ nào ở tân ngữ."
        },
        "recall_prompt": "Tại sao học từ vựng theo cụm Collocations lại giúp tăng điểm Lexical Resource nhanh hơn học từ đơn lẻ?",
        "recall_answer": "Vì Collocations đảm bảo từ được sử dụng đúng ngữ cảnh tự nhiên, tránh lỗi dịch thô từng từ (Word-by-word translation).",
        "related_skill_ids": [
            "V-CONTEXT-001",
            "V-FUNCTION-001"
        ],
        "error_code": "V-COLLOCATION-UNNATURAL"
    }
];

const IELTS_ERROR_TAXONOMY = {
    "W1-INTRO-OVERPARAPHRASE": {
        "name": "Mở bài biến báo quá đà làm sai nghĩa",
        "skillId": "W1-INTRO-001",
        "description": "Bạn đã cố dùng từ phức tạp nhưng làm sai lệch bản chất số liệu hoặc ngữ cảnh đề bài.",
        "action": "Xem lại chiến lược Mở Bài An Toàn W1-INTRO-001"
    },
    "W1-OV-MISS-MAJOR": {
        "name": "Overview bỏ sót xu hướng chủ đạo",
        "skillId": "W1-OV-001",
        "description": "Overview chưa bao quát được toàn bộ đối tượng hoặc bỏ qua xu hướng quan trọng nhất.",
        "action": "Luyện bài tập chọn Main Features W1-OV-001"
    },
    "W1-OV-DETAIL-ONLY": {
        "name": "Overview nhồi nhét số liệu chi tiết",
        "skillId": "W1-OV-001",
        "description": "Overview đưa số liệu cụ thể thay vì mô tả quy luật và thứ bậc bao quát.",
        "action": "Xem quy tắc Overview = Trend + Difference W1-OV-001"
    },
    "W1-OV-OVERLOADED": {
        "name": "Overview câu quá tải thông tin",
        "skillId": "W1-OV-002",
        "description": "Cố ép 3 xu hướng trái ngược vào 1 câu ngột ngạt làm vỡ cú pháp câu.",
        "action": "Luyện tách 2 câu rõ ràng W1-OV-002"
    },
    "W1-DATA-LISTING": {
        "name": "Liệt kê số liệu rời rạc thiếu so sánh",
        "skillId": "W1-DATA-001",
        "description": "Thân bài chép lại từng số liệu độc lập mà không so sánh gấp mấy lần hay đối chiếu khoảng cách.",
        "action": "Luyện chuyển đổi List sang So sánh W1-DATA-001"
    },
    "W1-DATA-WRONG-RANK": {
        "name": "Nhận định sai thứ bậc hoặc bỏ lỡ cuộc đổi ngôi",
        "skillId": "W1-DATA-002",
        "description": "Chưa theo dõi sát sự vượt mặt thứ hạng giữa các đường dữ liệu qua các năm.",
        "action": "Ôn tập kỹ năng theo dõi Thứ Bậc W1-DATA-002"
    },
    "W1-DATA-DUMPING": {
        "name": "Xả rác số liệu thiếu chọn lọc",
        "skillId": "W1-DATA-003",
        "description": "Chép lại toàn bộ các mốc năm không quan trọng thay vì chọn 5 điểm dữ liệu vàng.",
        "action": "Luyện lọc 5 điểm dữ liệu then chốt W1-DATA-003"
    },
    "W1-MAP-WRONG-TRANSFORMATION": {
        "name": "Dùng sai động từ biến đổi bản đồ",
        "skillId": "W1-MAP-001",
        "description": "Nhầm lẫn giữa thay thế (replaced), mở rộng (expanded) và chuyển đổi công năng (converted).",
        "action": "Ôn tập 4 bước tư duy bản đồ W1-MAP-001"
    },
    "W1-PROCESS-STYLE": {
        "name": "Sai văn phong quy trình kỹ thuật",
        "skillId": "W1-PROCESS-001",
        "description": "Dùng thể chủ động chung chung hoặc từ khẩu ngữ thay vì thể bị động học thuật.",
        "action": "Luyện thể bị động trong quy trình W1-PROCESS-001"
    },
    "W2-MECHANISM-MISSING": {
        "name": "Thiếu mắt xích cơ chế giải thích",
        "skillId": "W2-MECH-001",
        "description": "Bạn chỉ nêu luận điểm mà chưa giải thích 'bằng cách nào' và mắt xích trung gian ra sao.",
        "action": "Luyện chuỗi Claim → Mechanism → Consequence W2-MECH-001"
    },
    "W2-ASSUMPTION-UNTESTED": {
        "name": "Bỏ qua từ ngữ tuyệt đối hóa trong đề",
        "skillId": "W2-Q-002",
        "description": "Chưa bóc tách được các từ 'only', 'all', 'the best' để mở ra cơ hội phản biện.",
        "action": "Luyện kỹ năng bắt bẻ từ tuyệt đối W2-Q-002"
    },
    "W2-IDEA-VAGUE": {
        "name": "Ý tưởng chung chung thiếu ranh giới",
        "skillId": "W2-IDEA-002",
        "description": "Ý tưởng quá rộng, chưa chỉ rõ áp dụng hiệu quả trong hoàn cảnh và đối tượng cụ thể nào.",
        "action": "Luyện đặt câu hỏi 'Hữu ích trong hoàn cảnh nào?' W2-IDEA-002"
    },
    "W2-OFF-TASK": {
        "name": "Lạc đề hoặc phân tích nội dung không được hỏi",
        "skillId": "W2-Q-002",
        "description": "Đưa các thông tin lịch sử hoặc phỏng đoán không phục vụ mục đích trả lời câu hỏi đề thi.",
        "action": "Luyện bám sát phạm vi đề bài W2-Q-002"
    },
    "R-KEYWORD-TOO-GENERIC": {
        "name": "Chọn từ mỏ neo quá chung chung",
        "skillId": "R-QF-001",
        "description": "Dùng các từ phổ thông xuất hiện khắp bài đọc khiến việc định vị mất thời gian.",
        "action": "Luyện kỹ năng chọn từ mỏ neo độc nhất R-QF-001"
    },
    "R-WORD-MATCH-TRAP": {
        "name": "Mắc bẫy từ vựng trùng lặp bề mặt",
        "skillId": "R-PARA-001",
        "description": "Chọn phương án vì thấy từ giống hệt trong bài đọc nhưng sai lệch bản chất logic.",
        "action": "Luyện đối chiếu Paraphrase R-PARA-001"
    },
    "R-INFERENCE-OVERREACH": {
        "name": "Suy diễn quá đà vượt ngoài bài đọc",
        "skillId": "R-PARA-001",
        "description": "Tự dùng kiến thức thực tế bên ngoài để phán đoán thay vì bám chặt chứng cứ đoạn văn.",
        "action": "Luyện đọc hiểu cục bộ có bằng chứng R-PARA-001"
    },
    "L-CORRECTION-MISSED": {
        "name": "Bỏ lỡ tín hiệu đính chính thông tin",
        "skillId": "L-CORR-001",
        "description": "Vội chọn thông tin đầu tiên mà không kiên nhẫn bắt từ khóa đảo ý (Actually, but...).",
        "action": "Luyện bắt sóng đính chính L-CORR-001"
    },
    "L-TRANSITION-CARRYOVER": {
        "name": "Để lỡ 1 câu làm sụp đổ các câu tiếp theo",
        "skillId": "L-TRANS-001",
        "description": "Mải tiếc nuối câu đã trôi qua khiến mất tập trung vào các câu sau.",
        "action": "Luyện nguyên tắc Miss-one-and-move-on L-TRANS-001"
    },
    "S-NO-DIRECT-ANSWER": {
        "name": "Trả lời vòng vo hoặc quá cụt lủn",
        "skillId": "S-EXP-001",
        "description": "Chưa áp dụng khung phản xạ 4 tầng (Trực diện → Lý do → Tình huống → Mở rộng).",
        "action": "Luyện khung Response Engine S-EXP-001"
    },
    "V-COLLOCATION-UNNATURAL": {
        "name": "Dịch thô từng từ hoặc dùng sai cụm từ",
        "skillId": "V-CHUNK-001",
        "description": "Ghép từ rời rạc không đúng thói quen kết hợp từ học thuật chuẩn bản xứ.",
        "action": "Luyện học từ theo cụm Chunks V-CHUNK-001"
    }
};

// Merge into window & global IELTS_DATA if available
if (typeof window !== 'undefined') {
    window.IELTS_EXPERT_STRATEGIES = IELTS_EXPERT_STRATEGIES;
    window.IELTS_ERROR_TAXONOMY = IELTS_ERROR_TAXONOMY;
    if (window.IELTS_DATA) {
        window.IELTS_DATA.expertStrategies = IELTS_EXPERT_STRATEGIES;
        window.IELTS_DATA.errorTaxonomy = IELTS_ERROR_TAXONOMY;
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        IELTS_EXPERT_STRATEGIES,
        IELTS_ERROR_TAXONOMY
    };
}
