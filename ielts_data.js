const IELTS_DATA = {
  "app": {
    "name": "Ôn Luyện Tiếng Anh IELTS cùng N&Mstudio",
    "version": "3.5",
    "description": "Tổ hợp ôn luyện IELTS toàn diện chuẩn Sư phạm DeepTutor — Phân hóa 6 Cấp độ & Ngân hàng Đề Đa Dạng Theo Chủ Đề",
    "levels": [
      {
        "id": "4.0",
        "name": "Level 1: Foundation (3.5 - 4.5)",
        "desc": "Khởi động nền tảng, bù đắp lỗ hổng ngữ âm & 12 thì cơ bản"
      },
      {
        "id": "5.0",
        "name": "Level 2: Pre-IELTS (4.5 - 5.0)",
        "desc": "Làm quen câu phức, nghe bắt từ khóa đơn giản, đọc quét thông tin"
      },
      {
        "id": "5.5",
        "name": "Level 3: Developing (5.0 - 5.5)",
        "desc": "Bắt paraphrase cơ bản, nhận diện bẫy đổi hướng thông tin trong hội thoại"
      },
      {
        "id": "6.0",
        "name": "Level 4: Intermediate (5.5 - 6.0)",
        "desc": "Chuẩn miễn thi tốt nghiệp THPT, viết đoạn văn PEEL Task 2, phân tích biểu đồ"
      },
      {
        "id": "6.5",
        "name": "Level 5: Upper-Intermediate (6.0 - 6.5)",
        "desc": "Target vàng xét tuyển Đại học Top đầu, làm chủ Matching Headings & Yes/No/NG"
      },
      {
        "id": "7.0",
        "name": "Level 6: Advanced (7.0+)",
        "desc": "Tư duy phản biện (Critical Thinking), văn phong học thuật tự nhiên & chiều sâu"
      }
    ],
    "topics": [
      {
        "id": "education",
        "name_en": "Education & Student Life",
        "name_vi": "Giáo dục & Đời sống học đường",
        "icon": "🎓"
      },
      {
        "id": "environment",
        "name_en": "Environment & Renewable Energy",
        "name_vi": "Môi trường & Năng lượng tái tạo",
        "icon": "🌿"
      },
      {
        "id": "technology",
        "name_en": "Technology & Artificial Intelligence",
        "name_vi": "Công nghệ & Trí tuệ nhân tạo",
        "icon": "💻"
      },
      {
        "id": "health",
        "name_en": "Health, Sports & Psychology",
        "name_vi": "Sức khỏe, Thể thao & Tâm lý học",
        "icon": "🏥"
      },
      {
        "id": "urban",
        "name_en": "Urban Planning, Architecture & Transport",
        "name_vi": "Đô thị hóa, Kiến trúc & Giao thông",
        "icon": "🏙️"
      },
      {
        "id": "society",
        "name_en": "Culture, History & Social Dynamics",
        "name_vi": "Văn hóa, Lịch sử & Động thái xã hội",
        "icon": "🏛️"
      }
    ]
  },
  "skills": [
    "listening",
    "reading",
    "writing",
    "speaking"
  ],
  "listening": {
    "lessons": [
      {
        "id": "L_LIS_1",
        "title_en": "Unit 1: Personal Information & Form Completion (Section 1)",
        "title_vi": "Chuyên đề 1: Điền thông tin cá nhân & Biểu mẫu (Section 1)",
        "band_target": "3.5 - 4.5",
        "topic": "education",
        "objectives": {
          "knowledge": "Quy tắc đánh vần tên riêng tiếng Anh (Stephen vs Steven, A-E-I-J-G), số điện thoại (0 = oh/zero, số lặp = double), mã bưu chính Anh (Postcodes: LM6 8PB).",
          "ability": "Nhận diện tức thì âm chữ cái gây nhầm lẫn (J và G, E và I, P và B); phân biệt đuôi số -teen (14) và -ty (40).",
          "behavior": "Luôn viết hoa chữ cái đầu của tên riêng, kiểm tra giới hạn từ (NO MORE THAN TWO WORDS AND/OR A NUMBER)."
        },
        "presentation": {
          "concepts": "Section 1 luôn là hội thoại đời sống giữa 2 người (đăng ký việc làm, thuê phòng trọ, đặt dịch vụ). Thông tin cần điền luôn là danh từ cụ thể, tên riêng hoặc con số.",
          "rules": "1. Đọc kỹ số từ cho phép trước khi nghe. 2. Dự đoán loại từ (tên người, tên đường, loại công việc) trước khi băng chạy.",
          "commonMistakes": [
            "Nhầm lẫn đuôi -teen (fourTEEN) và -ty (FORty).",
            "Nhầm lẫn giữa các chữ cái: A /eɪ/, E /iː/, I /aɪ/, J /dʒeɪ/, G /dʒiː/.",
            "Quên không đổi thông tin khi người nói đính chính lại (Self-correction trap)."
          ]
        },
        "practice": {
          "mechanical": "Luyện tập nghe chính tả 10 mã bưu điện Anh và 10 số điện thoại có 'double'.",
          "meaningful": "Hội thoại đăng ký việc làm bán thời gian tại văn phòng tuyển dụng Oxford Employment Agency.",
          "workedExample": {
            "prompt": "Applicant's full name: _____ | Address: 14 _____ Road",
            "steps": [
              "Bước 1: Nghe người nói giới thiệu tên 'Stephen Morgan' và đánh vần 'S-T-E-P-H-E-N'.",
              "Bước 2: Chú ý đây là Stephen có 'ph' chứ không phải 'v'.",
              "Bước 3: Nghe số nhà '14' và tên đường đánh vần 'S-Y-C-A-M-O-R-E'."
            ],
            "answer": "Stephen Morgan / Sycamore"
          }
        },
        "production": "Nghe trọn vẹn 1 biểu mẫu đăng ký tìm việc làm của học sinh sinh viên gồm 10 câu hỏi và tự rà soát chính tả."
      },
      {
        "id": "L_LIS_2",
        "title_en": "Unit 2: Map & Facility Orientation (Section 2)",
        "title_vi": "Chuyên đề 2: Định hướng Bản đồ & Mặt bằng Cơ sở (Section 2)",
        "band_target": "4.5 - 5.5",
        "topic": "urban",
        "objectives": {
          "knowledge": "Hệ thống từ chỉ phương hướng (north, south, east, west) và vị trí tương đối (opposite, adjacent to, at the far end, in the corner).",
          "ability": "Bám sát ngón tay hoặc con trỏ chuột theo lộ trình người nói khi di chuyển từ điểm xuất phát (You are here / Entrance).",
          "behavior": "Khoanh tròn điểm mốc trung tâm ngay trong 30 giây chuẩn bị, không nhìn vu vơ khắp bản đồ."
        },
        "presentation": {
          "concepts": "Section 2 là một bài độc thoại hướng dẫn phụ huynh hoặc du khách tham quan trường học, bảo tàng, hoặc công viên.",
          "rules": "Xác định rõ hướng của bản đồ (có la bàn chỉ North hay dùng Left/Right theo góc nhìn người bước vào).",
          "commonMistakes": [
            "Nhầm lẫn giữa bên trái/phải của người nghe và bên trái/phải của nhân vật di chuyển trong bản đồ.",
            "Bỏ qua các phòng mốc (landmark) như Reception Desk, Main Hall, Music Department."
          ]
        },
        "practice": {
          "mechanical": "Luyện phản xạ 8 hướng la bàn và các cụm: 'far left-hand corner', 'opposite side', 'on your right as you exit'.",
          "meaningful": "Sơ đồ mặt bằng buổi họp phụ huynh đầu năm tại trường THPT (School Open Evening layout).",
          "workedExample": {
            "prompt": "Refreshments: _____ | Reception Desk: _____ | Maths corridor: _____",
            "steps": [
              "Bước 1: Đi qua cửa sau của Hội trường, nhìn sang bên phải ngoài sảnh -> Refreshments (H).",
              "Bước 2: Đi tiếp đến cuối hành lang sảnh -> Bàn tiếp đón phụ huynh (Reception - G).",
              "Bước 3: Rẽ trái trước khi đến bàn tiếp đón -> Hành lang giáo viên, phòng đầu tiên bên trái là Maths (D)."
            ],
            "answer": "H / G / D"
          }
        },
        "production": "Hoàn thành bài tập gán nhãn 5 vị trí phòng học và khu tiện ích trong một khuôn viên trường THPT."
      },
      {
        "id": "L_LIS_3",
        "title_en": "Unit 3: Academic Dialogues & Distractor Traps (Section 3)",
        "title_vi": "Chuyên đề 3: Đối thoại Học thuật & Nhận diện Bẫy Nhiễu (Section 3)",
        "band_target": "5.5 - 6.5",
        "topic": "technology",
        "objectives": {
          "knowledge": "Các cấu trúc đồng tình (I couldn't agree more, That's spot on) và phản biện/nghi ngờ (Well, I'm not so sure, In theory yes, but...).",
          "ability": "Phân biệt quan điểm của người nam và người nữ; phát hiện bẫy 'nêu phương án rồi bác bỏ' (mention and reject).",
          "behavior": "Gạch chân từ khóa chỉ thái độ trong câu hỏi (amazed, surprised, disagreed, unexpected)."
        },
        "presentation": {
          "concepts": "Section 3 là cuộc thảo luận giữa 2-3 sinh viên hoặc sinh viên với giáo viên hướng dẫn về dự án nghiên cứu hoặc bài tập lớn.",
          "rules": "Không chọn phương án đầu tiên nghe thấy. Đáp án đúng thường được diễn đạt lại bằng từ đồng nghĩa (Paraphrased).",
          "commonMistakes": [
            "Chọn phương án chỉ vì nghe thấy từ vựng giống hệt trong băng (Exact word match trap).",
            "Nhầm lẫn ý kiến của người hỏi với kết luận cuối cùng của cả nhóm."
          ]
        },
        "practice": {
          "mechanical": "Phân loại 15 câu thoại vào nhóm: Hoàn toàn đồng ý / Đồng ý một phần / Bác bỏ.",
          "meaningful": "Cuộc thảo luận giữa Liam và Holly về lịch sử báo chí và tác động của thời đại số hóa (Newspaper archive study).",
          "workedExample": {
            "prompt": "What surprised both Liam and Holly about the newspaper in the 1960s? A. The price B. The extremely high sales C. The political stance",
            "steps": [
              "Bước 1: Holly nhận xét: 'sales figures were incredibly high'.",
              "Bước 2: Liam tiếp lời xác nhận: 'Amazing and way beyond what I would have thought'.",
              "Bước 3: Cả hai đều kinh ngạc về số lượng báo bán ra (sales figures)."
            ],
            "answer": "B"
          }
        },
        "production": "Luyện 1 Section 3 gồm 6 câu trắc nghiệm nhiều lựa chọn và giải trình lý do loại trừ từng phương án sai."
      },
      {
        "id": "L_LIS_4",
        "title_en": "Unit 4: Academic Monologue & Technical Processes (Section 4)",
        "title_vi": "Chuyên đề 4: Thuyết trình Khoa học & Quy trình Kỹ thuật (Section 4)",
        "band_target": "6.5 - 7.5+",
        "topic": "urban",
        "objectives": {
          "knowledge": "Từ vựng chuyên ngành kỹ thuật, lịch sử, sinh thái; từ nối chuyển ý học thuật (Consequently, In conjunction with, To elucidate).",
          "ability": "Duy trì sự tập trung cao độ trong suốt bài giảng 10 phút không nghỉ; ghi chép vắn tắt (note-taking) theo cấu trúc nguyên nhân - kết quả.",
          "behavior": "Luôn kiểm tra ngữ pháp của từ cần điền (danh từ số ít/số nhiều, tính từ hay động từ) để bảo đảm đúng cú pháp."
        },
        "presentation": {
          "concepts": "Section 4 là một bài giảng đại học thực thụ. Diễn giả nói liên tục không có quãng ngắt giữa chừng.",
          "rules": "Bám sát các tiêu đề phụ (Subheadings) và dấu hiệu chuyển đoạn bằng giọng điệu (Signposting language).",
          "commonMistakes": [
            "Bỏ lỡ từ nối chuyển ý dẫn đến mất dấu vị trí câu hỏi trên đề thi.",
            "Viết sai dạng từ (điền động từ nguyên mẫu vào vị trí cần danh từ số nhiều)."
          ]
        },
        "practice": {
          "mechanical": "Nhận diện các từ tín hiệu báo hiệu chuyển mục trong bài giảng: 'Turning now to...', 'Let us examine...', 'In addition to this...'",
          "meaningful": "Bài giảng về lịch sử xây dựng và nguyên lý vận hành thủy lực của cầu Tháp London (Tower Bridge hydraulic mechanisms).",
          "workedExample": {
            "prompt": "The bascules were operated by pressurized water pumped through _____ .",
            "steps": [
              "Bước 1: Nghe diễn giả mô tả động cơ hơi nước: 'these engines produced pressurized water'.",
              "Bước 2: Tìm bộ phận dẫn nước: 'This was sent via pipes to the driving engines'.",
              "Bước 3: Từ cần điền là danh từ chỉ phương tiện dẫn nước: 'pipes'."
            ],
            "answer": "pipes / water pipes"
          }
        },
        "production": "Luyện 1 bài giảng Section 4 hoàn chỉnh 10 câu điền từ và phân tích các lỗi chính tả danh từ số nhiều (-s/-es)."
      },
      {
        "id": "L_LIS_5",
        "title_en": "Unit 5: Fast Connected Speech & Weak Forms Mastery",
        "title_vi": "Chuyên đề 5: Nối âm Tốc độ cao & Dạng yếu của Từ (Weak Forms)",
        "band_target": "5.0 - 6.5",
        "topic": "health",
        "objectives": {
          "knowledge": "Hiện tượng nuốt âm (Elision), nối phụ âm với nguyên âm (Linking /r/, /j/, /w/), và dạng yếu (Weak form of 'of', 'to', 'can', 'have').",
          "ability": "Bắt kịp âm thanh khi người bản xứ nói nhanh ở tốc độ 160–180 từ/phút mà không bị 'vấp tai'.",
          "behavior": "Tập thói quen chép chính tả từng cụm từ (chunking) thay vì cố dịch từng từ đơn lẻ sang tiếng Việt trong đầu."
        },
        "presentation": {
          "concepts": "Trong tiếng Anh tự nhiên, các từ chức năng (giới từ, trợ động từ, đại từ) luôn bị hạ nhẹ âm lượng và đọc rất lướt (schwa /ə/).",
          "rules": "Tập trung tai vào các từ mang trọng âm (Content words: danh từ, động từ chính, tính từ), không hoảng loạn khi không nghe rõ giới từ.",
          "commonMistakes": [
            "Tưởng nhầm 'would have' /wʊdəv/ thành một từ mới xa lạ.",
            "Không nhận ra số nhiều vì âm đuôi /s/ bị nối sang từ tiếp theo."
          ]
        },
        "practice": {
          "mechanical": "Nghe và chép chính tả 10 câu chứa hiện tượng linking và weak forms.",
          "meaningful": "Phân tích đoạn hội thoại phản bác thông tin về thời gian biểu tàu hỏa.",
          "workedExample": {
            "prompt": "Audio: 'We could've caught the train at eight-fifteen if we'd left earlier.'",
            "steps": [
              "Nhận diện 'could've' = could have.",
              "Nhận diện 'eight-fifteen' = 8:15.",
              "Nhận diện 'if we'd left' = if we had left."
            ],
            "answer": "could have / 8:15 / had left"
          }
        },
        "production": "Luyện tập phương pháp Shadowing (nói đuổi theo băng) một đoạn trích 1 phút từ Cambridge Listening."
      },
      {
        "id": "L_LIS_6",
        "title_en": "Unit 6: Statistical Data & Trend Interpretation in Listening",
        "title_vi": "Chuyên đề 6: Số liệu Thống kê & Biến động Xu hướng trong Bài nghe",
        "band_target": "6.0 - 7.5+",
        "topic": "environment",
        "objectives": {
          "knowledge": "Cách đọc phân số, tỷ lệ phần trăm, số thập phân, tiền tệ quốc tế và các cụm chỉ xu hướng (quadrupled, plummeted, plateaued).",
          "ability": "Ghi nhận tức thì con số chính xác kèm đơn vị đo lường (meters, kilograms, pounds, percentage).",
          "behavior": "Ghi chú nhanh bằng ký hiệu toán học (%, $, ↑, ↓) trước khi viết lại thành từ đầy đủ vào phiếu trả lời."
        },
        "presentation": {
          "concepts": "Các bài thi Band 6.5+ thường đưa ra nhiều con số liên tiếp (năm trước, năm nay, dự báo năm tới) để thử thách khả năng lọc dữ liệu.",
          "rules": "Đối chiếu từ chỉ thời gian trong câu hỏi với thời điểm mà con số đó đại diện trong băng.",
          "commonMistakes": [
            "Điền nhầm số liệu của đối tượng so sánh thay vì đối tượng được hỏi.",
            "Quên không ghi đơn vị đo lường khi đề bài yêu cầu."
          ]
        },
        "practice": {
          "mechanical": "Luyện nghe viết nhanh 10 dãy số liệu kinh tế và đơn vị tiền tệ.",
          "meaningful": "Bài báo cáo về lượng khách du lịch và chi tiêu tại các vườn quốc gia.",
          "workedExample": {
            "prompt": "Tourism revenue in 2020: $ _____ million (down by 35%)",
            "steps": [
              "Băng nói: 'In 2019, revenue peaked at 100 million, but dropped to 65 million in 2020.'",
              "Xác định năm cần tìm: 2020.",
              "Con số chính xác: 65."
            ],
            "answer": "65"
          }
        },
        "production": "Hoàn thành bảng số liệu thống kê gồm 8 ô trống trong bài giảng kinh tế học môi trường."
      }
    ],
    "flashcards": [
      {
        "id": "FC_LIS_01",
        "topic": "education",
        "term": "Accommodation",
        "ipa": "/əˌkɒm.əˈdeɪ.ʃən/",
        "def": "Chỗ ở, phòng trọ (Lưu ý chính tả: 2 chữ 'c' và 2 chữ 'm' — bẫy kinh điển trong Section 1).",
        "ex": "The university provides student accommodation within walking distance."
      },
      {
        "id": "FC_LIS_02",
        "topic": "urban",
        "term": "Opposite",
        "ipa": "/ˈɒp.ə.zɪt/",
        "def": "Đối diện (Từ khóa định hướng bản đồ Section 2, đồng nghĩa với 'facing' hoặc 'across the road').",
        "ex": "The library is situated directly opposite the main cafeteria."
      },
      {
        "id": "FC_LIS_03",
        "topic": "urban",
        "term": "Adjoining",
        "ipa": "/əˈdʒɔɪ.nɪŋ/",
        "def": "Kế bên, liền kề (Thường dùng thay cho 'next to' trong bài định hướng sơ đồ).",
        "ex": "The conference room has an adjoining terrace for coffee breaks."
      },
      {
        "id": "FC_LIS_04",
        "topic": "education",
        "term": "Signposting",
        "ipa": "/ˈsaɪnˌpəʊ.stɪŋ/",
        "def": "Từ tín hiệu dẫn đường trong bài giảng (First, Next, Turning to, In summary).",
        "ex": "Good lecturers use clear signposting language to structure their discourse."
      },
      {
        "id": "FC_LIS_05",
        "topic": "education",
        "term": "Self-correction",
        "ipa": "/ˌself.kəˈrek.ʃən/",
        "def": "Hiện tượng tự sửa lời của người nói (Bẫy: đưa ra thông tin A, rồi nói 'Sorry, I meant B').",
        "ex": "Listen out for self-correction: 'It opens at 9... no, wait, on Sundays it's 10.'"
      },
      {
        "id": "FC_LIS_06",
        "topic": "education",
        "term": "Compulsory",
        "ipa": "/kəmˈpʌl.sər.i/",
        "def": "Bắt buộc (Đồng nghĩa: mandatory, obligatory; trái nghĩa: optional, elective).",
        "ex": "Mathematics and science were compulsory subjects in our curriculum."
      },
      {
        "id": "FC_LIS_07",
        "topic": "education",
        "term": "Vocational",
        "ipa": "/vəʊˈkeɪ.ʃən.əl/",
        "def": "Hướng nghiệp, dạy nghề (Khác với academic — học thuật).",
        "ex": "She opted for vocational training in graphic design rather than university."
      },
      {
        "id": "FC_LIS_08",
        "topic": "education",
        "term": "Distractor",
        "ipa": "/dɪˈstræk.tər/",
        "def": "Phương án bẫy nhiễu (Chứa từ vựng nghe thấy trong bài nhưng sai về mặt ý nghĩa hoặc ngữ cảnh).",
        "ex": "Option A was a distractor designed to catch students who only listened for keywords."
      },
      {
        "id": "FC_LIS_09",
        "topic": "education",
        "term": "Refreshments",
        "ipa": "/rɪˈfreʃ.mənts/",
        "def": "Đồ ăn nhẹ và nước giải khát (Xuất hiện liên tục trong bài nghe sự kiện trường học).",
        "ex": "Light refreshments will be served in the foyer immediately following the talk."
      },
      {
        "id": "FC_LIS_10",
        "topic": "urban",
        "term": "Bascules",
        "ipa": "/ˈbæskjuːlz/",
        "def": "Hai nhịp cầu nâng (Thuật ngữ trong bài kỹ thuật cầu Tháp London).",
        "ex": "The bascules are raised to allow large ships to pass through."
      },
      {
        "id": "FC_LIS_11",
        "topic": "urban",
        "term": "Corridor",
        "ipa": "/ˈkɒr.ɪ.dɔːr/",
        "def": "Hành lang nối các phòng (Từ khóa vị trí bản đồ).",
        "ex": "Walk straight down the corridor until you reach the chemistry lab."
      },
      {
        "id": "FC_LIS_12",
        "topic": "education",
        "term": "Shift system",
        "ipa": "/ˈʃɪft ˌsɪs.təm/",
        "def": "Hệ thống chia ca làm việc (ca sáng, ca tối trong công việc bán thời gian).",
        "ex": "The café operates a shift system, so evening work will occasionally be necessary."
      },
      {
        "id": "FC_LIS_13",
        "topic": "education",
        "term": "Retail",
        "ipa": "/ˈriː.teɪl/",
        "def": "Ngành bán lẻ, cửa hàng phục vụ khách hàng trực tiếp.",
        "ex": "He gained valuable customer service experience working in the retail sector."
      },
      {
        "id": "FC_LIS_14",
        "topic": "technology",
        "term": "Incredibly",
        "ipa": "/ɪnˈkred.ə.bli/",
        "def": "Cực kỳ, khó tin (Từ chỉ thái độ kinh ngạc trong Section 3: incredibly high sales).",
        "ex": "Newspaper sales in the mid-twentieth century were incredibly high."
      },
      {
        "id": "FC_LIS_15",
        "topic": "urban",
        "term": "Hydraulic",
        "ipa": "/haɪˈdrɒl.ɪk/",
        "def": "Thủy lực (Chạy bằng áp lực nước hoặc dầu).",
        "ex": "The original bridge utilized a hydraulic mechanism powered by steam engines."
      },
      {
        "id": "FC_LIS_16",
        "topic": "environment",
        "term": "Subsidize",
        "ipa": "/ˈsʌb.sɪ.daɪz/",
        "def": "Trợ cấp, bao cấp tài chính (Đồng nghĩa: fund, sponsor).",
        "ex": "The local government agreed to subsidize public transport for students."
      },
      {
        "id": "FC_LIS_17",
        "topic": "urban",
        "term": "Counter-clockwise",
        "ipa": "/ˌkaʊn.tərˈklɒk.waɪz/",
        "def": "Ngược chiều kim đồng hồ (Từ khóa bản đồ).",
        "ex": "Follow the perimeter path in a counter-clockwise direction."
      },
      {
        "id": "FC_LIS_18",
        "topic": "education",
        "term": "Paraphrasing",
        "ipa": "/ˈpær.əˌfreɪ.zɪŋ/",
        "def": "Cách diễn đạt lại cùng một ý bằng từ vựng và cấu trúc câu khác.",
        "ex": "IELTS questions rely heavily on paraphrasing rather than exact words from the audio."
      },
      {
        "id": "FC_LIS_19",
        "topic": "technology",
        "term": "Circulation",
        "ipa": "/ˌsɜː.kjəˈleɪ.ʃən/",
        "def": "Số lượng phát hành báo chí hoặc sự lưu thông tiền tệ/không khí.",
        "ex": "The daily newspaper had a peak circulation of over four million copies."
      },
      {
        "id": "FC_LIS_20",
        "topic": "education",
        "term": "Apprenticeship",
        "ipa": "/əˈpren.tɪs.ʃɪp/",
        "def": "Thời gian học việc, chương trình thực tập sinh kỹ thuật.",
        "ex": "He completed a four-year apprenticeship before qualifying as an electrician."
      },
      {
        "id": "FC_LIS_21",
        "topic": "environment",
        "term": "Ecological",
        "ipa": "/ˌiː.kəˈlɒdʒ.ɪ.kəl/",
        "def": "Thuộc về sinh thái học và bảo vệ môi trường tự nhiên.",
        "ex": "The dam construction caused irreversible ecological disruption downstream."
      },
      {
        "id": "FC_LIS_22",
        "topic": "health",
        "term": "Cardiovascular",
        "ipa": "/ˌkɑː.di.əʊˈvæs.kjə.lər/",
        "def": "Thuộc về tim mạch và hệ tuần hoàn máu.",
        "ex": "Regular aerobic exercise significantly enhances cardiovascular endurance."
      },
      {
        "id": "FC_LIS_23",
        "topic": "technology",
        "term": "Algorithm",
        "ipa": "/ˈæl.ɡə.rɪ.ðəm/",
        "def": "Thuật toán xử lý dữ liệu của máy tính.",
        "ex": "Search engines use sophisticated algorithms to index web content."
      },
      {
        "id": "FC_LIS_24",
        "topic": "society",
        "term": "Demographics",
        "ipa": "/ˌdem.əˈɡræf.ɪks/",
        "def": "Số liệu nhân khẩu học (độ tuổi, thu nhập, giới tính).",
        "ex": "Marketers analyze consumer demographics to target promotional campaigns."
      },
      {
        "id": "FC_LIS_25",
        "topic": "health",
        "term": "Sedentary",
        "ipa": "/ˈsed.ən.tər.i/",
        "def": "Thụ động, ít vận động, ngồi nhiều một chỗ.",
        "ex": "A sedentary lifestyle is strongly correlated with obesity and diabetes."
      },
      {
        "id": "FC_LIS_26",
        "topic": "urban",
        "term": "Pedestrian zone",
        "ipa": "/pəˈdes.tri.ən zəʊn/",
        "def": "Tuyến phố đi bộ, khu vực cấm xe cơ giới.",
        "ex": "The city center was transformed into a bustling pedestrian zone."
      },
      {
        "id": "FC_LIS_27",
        "topic": "society",
        "term": "Heritage",
        "ipa": "/ˈher.ɪ.tɪdʒ/",
        "def": "Di sản văn hóa hoặc lịch sử truyền thống.",
        "ex": "Preserving architectural heritage requires continuous civic funding."
      },
      {
        "id": "FC_LIS_28",
        "topic": "technology",
        "term": "Autonomous",
        "ipa": "/ɔːˈtɒn.ə.məs/",
        "def": "Tự hành, tự chủ, không cần người điều khiển.",
        "ex": "Autonomous vehicles are currently undergoing extensive urban road tests."
      },
      {
        "id": "FC_LIS_29",
        "topic": "environment",
        "term": "Biodiversity",
        "ipa": "/ˌbaɪ.əʊ.daɪˈvɜː.sə.ti/",
        "def": "Đa dạng sinh học trong một hệ sinh thái tự nhiên.",
        "ex": "Tropical rainforests harbor immense biodiversity of plant and insect species."
      },
      {
        "id": "FC_LIS_30",
        "topic": "education",
        "term": "Curriculum",
        "ipa": "/kəˈrɪk.jə.ləm/",
        "def": "Khung chương trình giảng dạy toàn khóa của nhà trường.",
        "ex": "The school revised its science curriculum to include hands-on robotics workshops."
      }
    ],
    "exams": {
      "4.0": [
        {
          "id": "L40_T1",
          "topic": "education",
          "topic_vi": "Giáo dục & Tuyển dụng",
          "title": "Listening 4.0 — Đề 1: Stephen's Job Registration (Oxford Masterclass)",
          "title_vi": "Bài nghe 4.0 (Đề 1): Đăng ký việc làm của Stephen",
          "time_minutes": 10,
          "questions": [
            {
              "id": "L40_1_1",
              "band": "4.0",
              "type": "fill_in",
              "text": "Applicant's surname: Stephen _____ .",
              "options": null,
              "correct": "Morgan",
              "distractorReasons": {
                "Morgan": "Chính xác: người nói nêu rõ họ là Morgan sau khi đánh vần tên Stephen.",
                "wrong": "Lắng nghe kỹ phần giới thiệu họ và tên."
              },
              "socraticPrompt": "Khi người phỏng vấn hỏi 'And your surname?', ứng viên đã trả lời từ gì?",
              "breakdown": {
                "concept": "Name recording",
                "steps": [
                  "Nghe tên đầy đủ",
                  "Tách riêng Surname",
                  "Ghi Morgan"
                ],
                "trap": "Ghi cả tên đệm hoặc nhầm lẫn tên với họ."
              },
              "context": "Oxford Employment Agency Interview",
              "context_vi": "Phỏng vấn đăng ký tìm việc tại trung tâm",
              "passage": ""
            },
            {
              "id": "L40_1_2",
              "band": "4.0",
              "type": "fill_in",
              "text": "Current street address: 14 _____ Road.",
              "options": null,
              "correct": "Sycamore",
              "distractorReasons": {
                "Sycamore": "Chính xác: người nói đánh vần từng chữ cái S-Y-C-A-M-O-R-E.",
                "wrong": "Nghe kỹ từng âm chữ cái được đánh vần."
              },
              "socraticPrompt": "Người nói đánh vần tên con đường như thế nào (S-Y-C-A-M-O-R-E)?",
              "breakdown": {
                "concept": "Street spelling",
                "steps": [
                  "Nghe số nhà 14",
                  "Ghi từng chữ cái",
                  "Ghép thành Sycamore"
                ],
                "trap": "Nhầm âm Y /waɪ/."
              },
              "context": "Oxford Employment Agency Interview",
              "context_vi": "Ghi địa chỉ nhà ở",
              "passage": ""
            },
            {
              "id": "L40_1_3",
              "band": "4.0",
              "type": "fill_in",
              "text": "British Postcode: _____ .",
              "options": null,
              "correct": "LM6 8PB",
              "distractorReasons": {
                "LM6 8PB": "Chính xác: mã bưu điện Anh kết hợp chữ cái và số.",
                "wrong": "Phân biệt chữ P và B trong phát âm tiếng Anh."
              },
              "socraticPrompt": "Mã bưu chính gồm LM6 và 3 ký tự tiếp theo là gì?",
              "breakdown": {
                "concept": "Alphanumeric code",
                "steps": [
                  "Nghe LM6",
                  "Nghe số 8",
                  "Phân biệt P và B"
                ],
                "trap": "Viết nhầm P thành B."
              },
              "context": "Oxford Employment Agency Interview",
              "context_vi": "Mã bưu cục",
              "passage": ""
            },
            {
              "id": "L40_1_4",
              "band": "4.0",
              "type": "fill_in",
              "text": "Academic degree subject: _____ (currently in 2nd year).",
              "options": null,
              "correct": "economics",
              "distractorReasons": {
                "economics": "Chính xác: ứng viên nói 'I'm doing a degree in economics'.",
                "wrong": "Tên chuyên ngành học thuật kết thúc bằng đuôi -ics."
              },
              "socraticPrompt": "Ứng viên đang theo học ngành gì ở trường đại học?",
              "breakdown": {
                "concept": "Academic subject",
                "steps": [
                  "Nghe từ khóa degree",
                  "Bắt từ economics",
                  "Kiểm tra chính tả"
                ],
                "trap": "Bỏ quên chữ 's' ở cuối từ economics."
              },
              "context": "Oxford Employment Agency Interview",
              "context_vi": "Chuyên ngành học tại đại học",
              "passage": ""
            }
          ]
        },
        {
          "id": "L40_T2",
          "topic": "education",
          "topic_vi": "Trường học & Thư viện",
          "title": "Listening 4.0 — Đề 2: University Library Registration",
          "title_vi": "Bài nghe 4.0 (Đề 2): Đăng ký Thẻ Thư viện Đại học",
          "time_minutes": 10,
          "questions": [
            {
              "id": "L40_2_1",
              "band": "4.0",
              "type": "fill_in",
              "text": "Student ID number: _____ .",
              "options": null,
              "correct": "ST88402",
              "distractorReasons": {
                "ST88402": "Chính xác: đọc là 'S-T double eight four oh two'.",
                "wrong": "Lưu ý 'double eight' là 88 và 'oh' là số 0."
              },
              "socraticPrompt": "Khi nhân viên thư viện yêu cầu mã sinh viên, bạn nghe thấy tiền tố ST và những con số nào?",
              "breakdown": {
                "concept": "Student ID recording",
                "steps": [
                  "Nghe chữ cái ST",
                  "Nghe double eight = 88",
                  "Nghe four oh two = 402"
                ],
                "trap": "Ghi số 8 một lần vì không nhận ra từ 'double'."
              },
              "context": "Campus Library Helpdesk",
              "context_vi": "Đăng ký thẻ thư viện",
              "passage": ""
            },
            {
              "id": "L40_2_2",
              "band": "4.0",
              "type": "mcq",
              "text": "How many books can a first-year undergraduate borrow at one time?",
              "options": {
                "A": "Up to 3 books",
                "B": "Up to 6 books",
                "C": "Up to 12 books",
                "D": "Unlimited books"
              },
              "correct": "B",
              "distractorReasons": {
                "A": "Bẫy: Đây là số lượng sách tham khảo ngắn hạn.",
                "B": "Chính xác: 'First-year students are entitled to borrow up to six books simultaneously.'",
                "C": "Bẫy: Hạn mức của học viên cao học.",
                "D": "Không có mượn không giới hạn."
              },
              "socraticPrompt": "Hạn mức mượn sách thông thường của sinh viên đại học năm nhất là bao nhiêu cuốn?",
              "breakdown": {
                "concept": "Number filtering by category",
                "steps": [
                  "Xác định đối tượng: first-year",
                  "Lắng nghe con số tương ứng: six",
                  "Chọn B"
                ],
                "trap": "Nhầm với con số 12 của sinh viên cao học."
              },
              "context": "Campus Library Helpdesk",
              "context_vi": "Quy định mượn sách thư viện",
              "passage": ""
            }
          ]
        }
      ],
      "5.0": [
        {
          "id": "L50_T1",
          "topic": "education",
          "topic_vi": "Kinh nghiệm làm việc",
          "title": "Listening 5.0 — Đề 1: Retail & Hospitality Work Experience",
          "title_vi": "Bài nghe 5.0 (Đề 1): Kinh nghiệm làm việc bán lẻ & nhà hàng",
          "time_minutes": 12,
          "questions": [
            {
              "id": "L50_1_1",
              "band": "5.0",
              "type": "fill_in",
              "text": "Previous retail experience: 2 months as an assistant in a _____ shop.",
              "options": null,
              "correct": "sports",
              "distractorReasons": {
                "sports": "Chính xác: ứng viên nêu rõ 'I worked for two months in a sports shop'.",
                "wrong": "Danh từ chỉ loại cửa hàng bán lẻ có đuôi 's'."
              },
              "socraticPrompt": "Cửa hàng bán lẻ mà ứng viên từng làm việc kinh doanh mặt hàng gì?",
              "breakdown": {
                "concept": "Specific noun retrieval",
                "steps": [
                  "Nghe từ khóa assistant",
                  "Bắt từ sports",
                  "Kiểm tra đuôi 's'"
                ],
                "trap": "Viết 'sport' thiếu 's'."
              },
              "context": "Employment Agency Experience Check",
              "context_vi": "Kinh nghiệm làm việc trước đây",
              "passage": ""
            },
            {
              "id": "L50_1_2",
              "band": "5.0",
              "type": "mcq",
              "text": "What actual job did Stephen do at the Italian restaurant?",
              "options": {
                "A": "Kitchen assistant washing dishes",
                "B": "Waiter serving customers",
                "C": "Cashier at the front desk",
                "D": "Delivery driver"
              },
              "correct": "B",
              "distractorReasons": {
                "A": "Bẫy: Vị trí ban đầu được tuyển.",
                "B": "Chính xác: 'They needed another waiter as they were short of them, so that's what I did.'",
                "C": "Không được đề cập.",
                "D": "Không được đề cập."
              },
              "socraticPrompt": "Mặc dù được nhận làm phụ bếp, khi đến nơi Stephen đã được phân công làm công việc gì?",
              "breakdown": {
                "concept": "Correction trap",
                "steps": [
                  "Nghe vị trí ban đầu: kitchen assistant",
                  "Nghe từ chuyển hướng: but when I arrived...",
                  "Chọn việc thực tế: waiter"
                ],
                "trap": "Chọn ngay kitchen assistant vì nghe thấy trước."
              },
              "context": "Employment Agency Experience Check",
              "context_vi": "Vị trí thực tế đã làm",
              "passage": ""
            }
          ]
        },
        {
          "id": "L50_T2",
          "topic": "health",
          "topic_vi": "Thể thao & Sức khỏe",
          "title": "Listening 5.0 — Đề 2: Community Fitness Center Membership",
          "title_vi": "Bài nghe 5.0 (Đề 2): Đăng ký Hội viên Trung tâm Thể thao",
          "time_minutes": 12,
          "questions": [
            {
              "id": "L50_2_1",
              "band": "5.0",
              "type": "fill_in",
              "text": "Swimming pool opening time on Saturdays: _____ a.m.",
              "options": null,
              "correct": "7.30",
              "distractorReasons": {
                "7.30": "Chính xác: 'On weekdays we open at 6, but on Saturdays it's half past seven.'",
                "wrong": "Phân biệt giờ mở cửa ngày thường và thứ Bảy."
              },
              "socraticPrompt": "Hồ bơi mở cửa ngày thường lúc 6h, nhưng vào thứ Bảy mở cửa lúc mấy giờ?",
              "breakdown": {
                "concept": "Day-specific schedule",
                "steps": [
                  "Nghe weekdays = 6am",
                  "Nghe từ chuyển: but on Saturdays",
                  "Bắt half past seven = 7.30"
                ],
                "trap": "Điền giờ 6.00 của ngày thường."
              },
              "context": "Sports Complex Reception",
              "context_vi": "Hỏi giờ mở cửa hồ bơi",
              "passage": ""
            }
          ]
        }
      ],
      "5.5": [
        {
          "id": "L55_T1",
          "topic": "urban",
          "topic_vi": "Mặt bằng trường học",
          "title": "Listening 5.5 — Đề 1: School Open Evening & Map Orientation",
          "title_vi": "Bài nghe 5.5 (Đề 1): Định hướng Sơ đồ Buổi đón tiếp Phụ huynh",
          "time_minutes": 12,
          "questions": [
            {
              "id": "L55_1_1",
              "band": "5.5",
              "type": "mcq",
              "text": "Why have new arrangements been introduced for school lunchtimes?",
              "options": {
                "A": "To lower the price of school meals",
                "B": "To avoid overcrowding and shorten waiting times",
                "C": "To enforce a strictly vegetarian dietary policy",
                "D": "To allow students to eat at home"
              },
              "correct": "B",
              "distractorReasons": {
                "A": "Không nhắc đến giảm giá.",
                "B": "Chính xác: 'to avoid overcrowding and make it easier for everyone to eat without waiting too long'.",
                "C": "Không bắt buộc ăn chay.",
                "D": "Không được đề cập."
              },
              "socraticPrompt": "Nhà trường thay đổi giờ ăn trưa để tránh tình trạng gì và giảm thời gian chờ đợi?",
              "breakdown": {
                "concept": "Purpose identification",
                "steps": [
                  "Tìm từ khóa lunchtimes",
                  "Nghe avoid overcrowding",
                  "Chọn B"
                ],
                "trap": "Bẫy từ ăn chay lành mạnh."
              },
              "context": "School Principal Welcome Speech",
              "context_vi": "Phát biểu của Hiệu trưởng",
              "passage": ""
            },
            {
              "id": "L55_1_2",
              "band": "5.5",
              "type": "mcq",
              "text": "Where can parents find refreshments immediately upon exiting the main hall?",
              "options": {
                "A": "On their immediate right outside the back doors",
                "B": "In the far left-hand corner of the stage",
                "C": "Inside the Head Teacher's office",
                "D": "In the underground gymnasium"
              },
              "correct": "A",
              "distractorReasons": {
                "A": "Chính xác: 'leave the hall through doors at the back, find refreshments on their right'.",
                "B": "Vị trí của Music department bên trong hội trường.",
                "C": "Nằm ở hành lang khác.",
                "D": "Không có trong sơ đồ."
              },
              "socraticPrompt": "Khi bước qua cửa sau hội trường ra sảnh, quầy giải khát nằm ở phía nào?",
              "breakdown": {
                "concept": "Spatial preposition",
                "steps": [
                  "Xác định điểm xuất phát: back doors",
                  "Nghe hướng: on their right",
                  "Chọn A"
                ],
                "trap": "Nhầm lẫn giữa bên trong hội trường và sảnh ngoài."
              },
              "context": "School Facilities Map",
              "context_vi": "Định vị khu vực giải khát ngoài sảnh",
              "passage": ""
            }
          ]
        },
        {
          "id": "L55_T2",
          "topic": "environment",
          "topic_vi": "Công viên Sinh thái",
          "title": "Listening 5.5 — Đề 2: Botanical Nature Reserve Guided Tour",
          "title_vi": "Bài nghe 5.5 (Đề 2): Bản đồ Tuyến đường Tham quan Vườn Bách thảo",
          "time_minutes": 12,
          "questions": [
            {
              "id": "L55_2_1",
              "band": "5.5",
              "type": "mcq",
              "text": "Where is the rare orchid glasshouse situated relative to the central lake?",
              "options": {
                "A": "Directly on the northern shore of the lake",
                "B": "Across the wooden bridge on the south-west bank",
                "C": "Behind the gift shop in the car park",
                "D": "Underneath the water reservoir"
              },
              "correct": "B",
              "distractorReasons": {
                "A": "Bờ phía Bắc là khu bảo tồn chim.",
                "B": "Chính xác: 'cross the wooden footbridge and you will see the glasshouse on the south-west bank'.",
                "C": "Bãi xe nằm ở lối vào chính.",
                "D": "Không có cấu trúc ngầm."
              },
              "socraticPrompt": "Người hướng dẫn nói du khách cần đi qua cây cầu gỗ để thấy nhà kính trồng lan ở bờ hồ phía nào?",
              "breakdown": {
                "concept": "Map direction with landmark bridge",
                "steps": [
                  "Bắt mốc wooden footbridge",
                  "Nghe hướng: south-west bank",
                  "Chọn B"
                ],
                "trap": "Nhầm bờ Bắc của khu bảo tồn chim."
              },
              "context": "Nature Reserve Audio Guide",
              "context_vi": "Bản đồ tham quan vườn bách thảo",
              "passage": ""
            }
          ]
        }
      ],
      "6.0": [
        {
          "id": "L60_T1",
          "topic": "technology",
          "topic_vi": "Truyền thông số & Báo chí",
          "title": "Listening 6.0 — Đề 1: Media Studies: Historical Press & Digital Paywalls",
          "title_vi": "Bài nghe 6.0 (Đề 1): Báo chí Lịch sử & Mô hình Thu phí Báo điện tử",
          "time_minutes": 15,
          "questions": [
            {
              "id": "L60_1_1",
              "band": "6.0",
              "type": "mcq",
              "text": "What do Liam and Holly agree was remarkable regarding the newspaper's historical sales?",
              "options": {
                "A": "The price was kept artificially low by state funding",
                "B": "The sales figures were exceptionally high compared to current standards",
                "C": "The newspaper was distributed exclusively to overseas colonies",
                "D": "Most copies were given away free to school students"
              },
              "correct": "B",
              "distractorReasons": {
                "A": "Báo chí tự vận hành thương mại.",
                "B": "Chính xác: Holly dùng 'incredibly high' và Liam tán thành 'Amazing and way beyond what I thought'.",
                "C": "Phát hành toàn quốc.",
                "D": "Chỉ thời kỳ mạng mới có miễn phí."
              },
              "socraticPrompt": "Cả hai bạn sinh viên dùng các từ 'incredibly high' và 'amazing' để bày tỏ sự ngạc nhiên về điều gì?",
              "breakdown": {
                "concept": "Agreement marker",
                "steps": [
                  "Lắng nghe ý kiến của Holly",
                  "Lắng nghe sự đồng tình của Liam",
                  "Chọn B"
                ],
                "trap": "Bẫy chi tiết đọc báo miễn phí trên mạng."
              },
              "context": "University Media Studies Tutorial",
              "context_vi": "Thảo luận về chuyển đổi số báo chí",
              "passage": ""
            }
          ]
        },
        {
          "id": "L60_T2",
          "topic": "education",
          "topic_vi": "Dự án Nông nghiệp Đô thị",
          "title": "Listening 6.0 — Đề 2: Student Research Project: Urban Rooftop Farming",
          "title_vi": "Bài nghe 6.0 (Đề 2): Dự án Nghiên cứu Sinh viên: Nông nghiệp trên Mái nhà",
          "time_minutes": 15,
          "questions": [
            {
              "id": "L60_2_1",
              "band": "6.0",
              "type": "mcq",
              "text": "What major obstacle did the student researchers encounter when measuring crop yield?",
              "options": {
                "A": "A sudden pest infestation that destroyed 90% of the seedlings",
                "B": "Irregular water pressure from the building's secondary plumbing system",
                "C": "A complete ban by local municipal fire authorities",
                "D": "The refusal of supermarket chains to buy organic tomatoes"
              },
              "correct": "B",
              "distractorReasons": {
                "A": "Sâu bệnh chỉ ảnh hưởng dưới 5%.",
                "B": "Chính xác: 'sensor readings were skewed because of inconsistent water pressure from auxiliary pipes'.",
                "C": "Đã được cấp phép an toàn PCCC.",
                "D": "Dự án nghiên cứu học thuật."
              },
              "socraticPrompt": "Hệ thống đường ống dẫn nước phụ của tòa nhà đã gây ra vấn đề kỹ thuật gì khiến số liệu đo đạc bị sai lệch?",
              "breakdown": {
                "concept": "Technical obstacle in student research",
                "steps": [
                  "Nghe từ khóa crop yield",
                  "Bắt cụm inconsistent water pressure",
                  "Chọn B"
                ],
                "trap": "Nhầm lẫn với bẫy sâu bệnh hại rau."
              },
              "context": "University Agronomy Seminar",
              "context_vi": "Hội thảo báo cáo tiến độ đề tài nông nghiệp",
              "passage": ""
            }
          ]
        }
      ],
      "6.5": [
        {
          "id": "L65_T1",
          "topic": "urban",
          "topic_vi": "Kỹ thuật Thủy lực Cầu Tháp",
          "title": "Listening 6.5 — Đề 1: Industrial Archaeology: Tower Bridge Engineering",
          "title_vi": "Bài nghe 6.5 (Đề 1): Khảo cổ Công nghiệp: Cơ cấu Kỹ thuật Cầu Tháp",
          "time_minutes": 15,
          "questions": [
            {
              "id": "L65_1_1",
              "band": "6.5",
              "type": "fill_in",
              "text": "Energy source: Steam engines generated _____ which was transferred via pipes to raise the bascules.",
              "options": null,
              "correct": "pressurized water",
              "distractorReasons": {
                "pressurized water": "Chính xác: 'these engines produced pressurized water, which was sent via pipes'.",
                "water": "Chấp nhận được nhưng thiếu chính xác kỹ thuật.",
                "wrong": "Cần trạng thái của nước được tạo ra bởi động cơ hơi nước."
              },
              "socraticPrompt": "Động cơ hơi nước tạo ra dòng gì có áp suất cao được dẫn qua đường ống để nâng nhịp cầu?",
              "breakdown": {
                "concept": "Technical terminology",
                "steps": [
                  "Nghe steam engines",
                  "Bắt pressurized water",
                  "Kiểm tra chính tả"
                ],
                "trap": "Chỉ ghi từ 'steam' hoặc 'water' đơn thuần."
              },
              "context": "History of Civil Engineering Lecture",
              "context_vi": "Bài giảng kỹ thuật cầu Tháp London",
              "passage": ""
            },
            {
              "id": "L65_1_2",
              "band": "6.5",
              "type": "fill_in",
              "text": "Operational control: The levers were manipulated by the _____ situated at the base of the south tower.",
              "options": null,
              "correct": "Bridge Operator",
              "distractorReasons": {
                "Bridge Operator": "Chính xác: 'operated by the Bridge Operator, who was situated at the bottom of the tower'.",
                "wrong": "Danh từ chỉ chức danh người điều khiển cầu."
              },
              "socraticPrompt": "Người đứng ở chân tháp phía Nam để điều khiển các cần gạt nâng cầu có chức danh là gì?",
              "breakdown": {
                "concept": "Job title identification",
                "steps": [
                  "Nghe levers",
                  "Bắt Bridge Operator",
                  "Viết hoa chữ cái đầu"
                ],
                "trap": "Nhầm sang Chief Engineer."
              },
              "context": "History of Civil Engineering Lecture",
              "context_vi": "Chức danh người vận hành cầu",
              "passage": ""
            }
          ]
        },
        {
          "id": "L65_T2",
          "topic": "health",
          "topic_vi": "Khoa học Thần kinh & Giấc ngủ",
          "title": "Listening 6.5 — Đề 2: Cognitive Neuroscience: Sleep Architecture & Memory",
          "title_vi": "Bài nghe 6.5 (Đề 2): Khoa học Thần kinh: Cấu trúc Giấc ngủ & Trí nhớ",
          "time_minutes": 15,
          "questions": [
            {
              "id": "L65_2_1",
              "band": "6.5",
              "type": "mcq",
              "text": "During which phase of sleep does the hippocampus primarily replay newly encoded informational patterns?",
              "options": {
                "A": "Rapid Eye Movement (REM) phase",
                "B": "Slow-Wave Non-REM (NREM) sleep",
                "C": "The initial hypnagogic twilight transition",
                "D": "During sudden sleepwalking episodes"
              },
              "correct": "B",
              "distractorReasons": {
                "A": "REM liên quan đến giấc mơ và cảm xúc.",
                "B": "Chính xác: 'orchestrated primarily during slow-wave sleep in non-rapid eye movement (NREM) phases'.",
                "C": "Giai đoạn thiu thiu ngủ ban đầu.",
                "D": "Mộng du là rối loạn giấc ngủ."
              },
              "socraticPrompt": "Vùng hải mã tái phát lại các mô thức thông tin mới tiếp nhận trong giai đoạn giấc ngủ sóng chậm nào?",
              "breakdown": {
                "concept": "Scientific phase terminology",
                "steps": [
                  "Tìm từ khóa hippocampus replay",
                  "Bắt cụm slow-wave NREM sleep",
                  "Chọn B"
                ],
                "trap": "Chọn REM vì quen thuộc với từ giấc ngủ REM."
              },
              "context": "Neuroscience Lecture",
              "context_vi": "Bài giảng khoa học thần kinh về giấc ngủ",
              "passage": ""
            }
          ]
        }
      ],
      "7.0": [
        {
          "id": "L70_T1",
          "topic": "environment",
          "topic_vi": "Kinh tế học Năng lượng Tái tạo",
          "title": "Listening 7.0+ — Đề 1: Environmental Economics & Renewable Subsidies",
          "title_vi": "Bài nghe 7.0+ (Đề 1): Kinh tế học Môi trường & Trợ cấp Năng lượng Sạch",
          "time_minutes": 15,
          "questions": [
            {
              "id": "L70_1_1",
              "band": "7.0",
              "type": "mcq",
              "text": "What underlying contradiction in renewable energy subsidies does the speaker highlight?",
              "options": {
                "A": "Developing countries spend proportionately more on solar than wealthy nations",
                "B": "Subsidies frequently foster short-term market distortion, inadvertently disincentivizing private grid-storage innovation",
                "C": "Governments enforce renewable mandates while taxing clean technology patents",
                "D": "Consumers consistently refuse to use subsidized power due to aesthetic concerns"
              },
              "correct": "B",
              "distractorReasons": {
                "A": "Các nước giàu vẫn chiếm phần lớn nguồn vốn trợ cấp ban đầu.",
                "B": "Chính xác: 'subsidies inadvertently disincentivize private investment in battery storage by creating artificial spot pricing'.",
                "C": "Không có thuế bằng sáng chế.",
                "D": "Yếu tố thẩm mỹ chỉ là phụ."
              },
              "socraticPrompt": "Khi nhà nước can thiệp trợ cấp giá điện quá sâu, tác dụng phụ vô tình gây ra cho việc nghiên cứu pin lưu trữ là gì?",
              "breakdown": {
                "concept": "Nuanced policy critique",
                "steps": [
                  "Lắng nghe mệnh đề nghịch lý: inadvertently disincentivizing",
                  "Đối chiếu thuật ngữ thị trường",
                  "Chọn B"
                ],
                "trap": "Bị phân tâm bởi các tranh cãi thẩm mỹ cánh quạt gió."
              },
              "context": "Doctoral Colloquium on Energy Economics",
              "context_vi": "Hội thảo tiến sĩ về kinh tế học năng lượng",
              "passage": ""
            }
          ]
        },
        {
          "id": "L70_T2",
          "topic": "society",
          "topic_vi": "Triết học Khoa học",
          "title": "Listening 7.0+ — Đề 2: Philosophy of Science: Thomas Kuhn & Paradigm Incommensurability",
          "title_vi": "Bài nghe 7.0+ (Đề 2): Triết học Khoa học: Thomas Kuhn & Tính bất khả ước của Hệ hình",
          "time_minutes": 15,
          "questions": [
            {
              "id": "L70_2_1",
              "band": "7.0",
              "type": "mcq",
              "text": "According to Kuhn's thesis, why are competing scientific paradigms considered 'incommensurable'?",
              "options": {
                "A": "Because competing scientists speak entirely different national languages",
                "B": "Because paradigms lack a shared, neutral observational vocabulary to arbitrate truth claims objectively",
                "C": "Because older scientists invariably destroy laboratory equipment before retiring",
                "D": "Because government funding is strictly limited to one theoretical school at a time"
              },
              "correct": "B",
              "distractorReasons": {
                "A": "Không liên quan đến rào cản ngôn ngữ quốc gia.",
                "B": "Chính xác: 'competing paradigms lack a shared neutral observational vocabulary, rendering direct empirical comparison impossible'.",
                "C": "Hài hước, phi học thuật.",
                "D": "Kinh phí nghiên cứu không phải lý do triết học cốt lõi."
              },
              "socraticPrompt": "Thuật ngữ 'incommensurable' trong triết học khoa học chỉ việc hai trường phái lý thuyết thiếu đi công cụ khách quan chung nào để phân xử đúng sai?",
              "breakdown": {
                "concept": "Epistemological incommensurability",
                "steps": [
                  "Tìm từ khóa incommensurable",
                  "Nghe định nghĩa: lack of shared neutral observational vocabulary",
                  "Chọn B"
                ],
                "trap": "Hiểu incommensurable theo nghĩa đen là không đo được bằng thước mét."
              },
              "context": "Philosophy of Science Graduate Seminar",
              "context_vi": "Hội thảo sau đại học về triết học khoa học",
              "passage": ""
            }
          ]
        }
      ]
    }
  },
  "reading": {
    "lessons": [
      {
        "id": "L_RD_1",
        "title_en": "Unit 1: Skimming & Scanning Essentials",
        "title_vi": "Chuyên đề 1: Kỹ thuật Đọc lướt (Skimming) & Đọc quét (Scanning)",
        "band_target": "3.5 - 4.5",
        "topic": "education",
        "objectives": {
          "knowledge": "Khái niệm Skimming (đọc lấy ý chính trong 2-3 phút) và Scanning (quét tìm con số, tên riêng, ngày tháng cụ thể).",
          "ability": "Không đọc từng chữ (word-by-word); sử dụng đầu ngón tay hoặc bút chì để quét mắt theo hình chữ Z.",
          "behavior": "Kiềm chế thói quen tra từ điển với mọi từ mới; đoán nghĩa qua ngữ cảnh xung quanh."
        },
        "presentation": {
          "concepts": "Bài đọc IELTS Academic dài gần 900 từ mỗi bài. Nếu đọc kỹ từng từ, học sinh sẽ không bao giờ kịp giờ.",
          "rules": "1. Đọc tiêu đề chính và tiêu đề phụ trước. 2. Đọc câu đầu và câu cuối mỗi đoạn. 3. Khoanh tròn các con số và danh từ riêng khi lướt qua.",
          "commonMistakes": [
            "Dừng lại quá lâu ở một từ vựng chuyên ngành khó hiểu.",
            "Đọc từ đầu đến cuối bài đọc rồi mới quay lại xem câu hỏi."
          ]
        },
        "practice": {
          "mechanical": "Thực hành quét 10 con số và 5 tên nhà khoa học trong một đoạn văn 300 từ trong thời gian 45 giây.",
          "meaningful": "Bài đọc về lịch sử phát triển đồng hồ cơ học và cách mạng đo lường thời gian.",
          "workedExample": {
            "prompt": "In which year did Christiaan Huygens invent the pendulum clock?",
            "steps": [
              "Bước 1: Xác định từ khóa quét: 'Christiaan Huygens', 'pendulum clock', 'year'.",
              "Bước 2: Quét mắt tìm chữ viết hoa 'Huygens' và 4 chữ số chỉ năm.",
              "Bước 3: Dừng lại ở câu: 'In 1656, Dutch scientist Christiaan Huygens patented the first pendulum clock...'"
            ],
            "answer": "1656"
          }
        },
        "production": "Áp dụng kỹ thuật Skimming & Scanning để trả lời 4 câu hỏi định vị thông tin trong bài đọc về loài cá voi xanh."
      },
      {
        "id": "L_RD_2",
        "title_en": "Unit 2: True / False / Not Given & Yes / No / Not Given",
        "title_vi": "Chuyên đề 2: Chinh phục Dạng bài True / False / Not Given",
        "band_target": "4.5 - 5.5",
        "topic": "environment",
        "objectives": {
          "knowledge": "Định nghĩa chuẩn xác: TRUE = Trùng khớp hoàn toàn về ý; FALSE = Thông tin mâu thuẫn trực tiếp; NOT GIVEN = Không đủ căn cứ để kết luận.",
          "ability": "Nhận diện bẫy hạn định từ (Quantifiers: all, some, never, always, mostly).",
          "behavior": "Chỉ dựa vào thông tin có trong bài đọc; tuyệt đối không dùng kiến thức thực tế bên ngoài để suy diễn."
        },
        "presentation": {
          "concepts": "Đây là dạng bài gây mất điểm nhiều nhất cho học sinh Việt Nam vì thói quen 'suy diễn tự nhiên'.",
          "rules": "Nếu thông tin trong câu hỏi chỉ có 50% được nhắc đến và phần còn lại không thể chứng minh là đúng hay sai -> Chắc chắn là NOT GIVEN.",
          "commonMistakes": [
            "Nhầm lẫn giữa FALSE (bài đọc nói ngược lại) và NOT GIVEN (bài đọc không nói tới).",
            "Bỏ qua các từ chỉ tần suất như 'frequently' biến thành 'always' trong câu hỏi."
          ]
        },
        "practice": {
          "mechanical": "Xác định giá trị chân lý cho 5 cặp câu có chứa các từ hạn định 'only', 'all', 'predominantly'.",
          "meaningful": "Bài đọc về sự phát triển của nông nghiệp hữu cơ tại New Zealand.",
          "workedExample": {
            "prompt": "Statement: 'Organic farming eliminates all chemical runoff into local rivers.' | Passage: 'Organic practices substantially reduce synthetic fertilizers, although some soil mineral runoffs persist.'",
            "steps": [
              "Bước 1: Đối chiếu từ khóa: 'eliminates all' vs 'substantially reduce... runoffs persist'.",
              "Bước 2: Phân tích: 'Loại bỏ hoàn toàn' đối nghịch trực tiếp với 'vẫn còn một lượng tồn dư chất khoáng'.",
              "Bước 3: Kết luận mâu thuẫn -> FALSE."
            ],
            "answer": "FALSE"
          }
        },
        "production": "Làm 5 câu True/False/Not Given trích từ bài thi Cambridge IELTS 12 và viết lý giải vì sao chọn Not Given."
      },
      {
        "id": "L_RD_3",
        "title_en": "Unit 3: Matching Headings & Paragraph Main Ideas",
        "title_vi": "Chuyên đề 3: Nối Tiêu Đề Đoạn Văn (Matching Headings)",
        "band_target": "5.5 - 6.5",
        "topic": "urban",
        "objectives": {
          "knowledge": "Cấu trúc đoạn văn học thuật: Câu chủ đề (Topic sentence), Luận cứ bổ trợ (Supporting details), Câu kết luận (Concluding sentence).",
          "ability": "Tóm tắt ý tưởng cốt lõi của cả đoạn văn trong 3–5 từ trước khi nhìn vào danh sách tiêu đề cho sẵn.",
          "behavior": "Không chọn tiêu đề chỉ vì nó chứa một từ vựng xuất hiện trong đoạn (Word-matching trap)."
        },
        "presentation": {
          "concepts": "Tiêu đề chuẩn phải bao quát toàn bộ nội dung của đoạn, không được quá hẹp và không được quá rộng.",
          "rules": "Làm dạng bài Matching Headings sau khi đã làm các dạng bài chi tiết khác để đã có hiểu biết tổng quan về bài đọc.",
          "commonMistakes": [
            "Bị lừa bởi tiêu đề có chứa từ vựng giống hệt nhưng thực tế chỉ là một chi tiết nhỏ trong câu thứ hai.",
            "Không đọc kỹ câu chuyển ý giữa các đoạn văn."
          ]
        },
        "practice": {
          "mechanical": "Đọc 3 đoạn văn ngắn và tự đặt tiêu đề tiếng Anh cho từng đoạn trước khi so sánh với đáp án chuẩn.",
          "meaningful": "Bài đọc về chiến lược phục hồi các khu rừng ngập mặn tại Đông Nam Á.",
          "workedExample": {
            "prompt": "Paragraph B describes both the high economic costs of seedling nurseries and the innovative low-cost community planting methods that solved the budget crisis.",
            "steps": [
              "Bước 1: Xác định 2 vế: Chi phí cao vs Giải pháp cộng đồng giá rẻ.",
              "Bước 2: Tìm tiêu đề mang tính bao quát: 'Overcoming financial barriers through local engagement'.",
              "Bước 3: Loại bỏ tiêu đề 'The soaring costs of nurseries' vì quá hẹp."
            ],
            "answer": "Overcoming financial barriers through local engagement"
          }
        },
        "production": "Hoàn thành bài tập nối 6 tiêu đề đoạn văn cho bài đọc về trí thông minh của loài quạ đen."
      },
      {
        "id": "L_RD_4",
        "title_en": "Unit 4: Summary, Note & Table Completion with Paraphrase Mastery",
        "title_vi": "Chuyên đề 4: Hoàn thành Bản Tóm Tắt & Làm chủ Paraphrasing",
        "band_target": "5.5 - 6.5",
        "topic": "society",
        "objectives": {
          "knowledge": "Các hình thức Paraphrase: Dùng từ đồng nghĩa (synonyms), Đổi họ từ (word forms), Đổi thể chủ động sang bị động.",
          "ability": "Dự đoán loại từ (Noun, Verb, Adjective) và giới hạn từ của ô trống trong bản tóm tắt.",
          "behavior": "Kiểm tra sự hòa hợp ngữ pháp giữa từ được chọn và câu văn xung quanh ô trống."
        },
        "presentation": {
          "concepts": "Bản tóm tắt là sự cô đọng của 1–3 đoạn văn. Các câu trong summary luôn được viết lại bằng từ ngữ hoàn toàn khác với bài đọc gốc.",
          "rules": "Tìm điểm neo (Anchors: tên riêng, năm tháng, thuật ngữ) để xác định đúng vị trí đoạn văn cần đọc.",
          "commonMistakes": [
            "Viết vượt quá số từ cho phép.",
            "Chọn từ sai dạng ngữ pháp."
          ]
        },
        "practice": {
          "mechanical": "Nối 10 cặp từ đồng nghĩa học thuật thường gặp trong IELTS Reading (curb = restrict, foster = encourage, pivotal = crucial).",
          "meaningful": "Bản tóm tắt quy trình khảo cổ học khai quật tàu cổ Mary Rose.",
          "workedExample": {
            "prompt": "Summary sentence: 'The hull of the ship was stabilized using a specialized _____ solution.' | Passage: 'Conservators sprayed the fragile timber with polyethylene glycol, a synthetic wax mixture...'",
            "steps": [
              "Bước 1: Xác định loại từ cần điền sau tính từ 'specialized': Danh từ.",
              "Bước 2: Tìm từ trong bài mang nghĩa dung dịch bảo quản: 'polyethylene glycol'.",
              "Bước 3: Điền từ chính xác."
            ],
            "answer": "polyethylene glycol / synthetic wax"
          }
        },
        "production": "Hoàn thành bản tóm tắt 5 ô trống cho một đoạn văn khoa học về công nghệ nano."
      },
      {
        "id": "L_RD_5",
        "title_en": "Unit 5: Matching Information & Features (People & Opinions)",
        "title_vi": "Chuyên đề 5: Ghép Thông Tin với Đặc Điểm (Tác giả & Quan điểm)",
        "band_target": "6.0 - 7.0+",
        "topic": "health",
        "objectives": {
          "knowledge": "Kỹ thuật quét tên tác giả/nhà nghiên cứu và các động từ tường thuật quan điểm (argues, postulates, refutes, demonstrates).",
          "ability": "Phân biệt giữa quan điểm cá nhân của tác giả và phát hiện thực nghiệm của các nhà khoa học được trích dẫn.",
          "behavior": "Đánh dấu tất cả các vị trí xuất hiện của một tên người trước khi trả lời câu hỏi liên quan đến người đó."
        },
        "presentation": {
          "concepts": "Dạng bài này kiểm tra khả năng theo dõi nhiều luồng quan điểm khác nhau trong một bài báo khoa học.",
          "rules": "Một nhà khoa học có thể được ghép với nhiều quan điểm nếu có ghi chú NB.",
          "commonMistakes": [
            "Chỉ đọc câu đầu tiên chứa tên mà không đọc 2-3 câu phía sau nơi quan điểm thực sự được diễn giải.",
            "Nhầm lẫn giữa giả thuyết ban đầu và kết luận cuối cùng."
          ]
        },
        "practice": {
          "mechanical": "Luyện tìm nhanh tên của 4 chuyên gia trong một bài báo dài 800 từ trong vòng 1 phút.",
          "meaningful": "Phân tích tranh luận giữa các nhà ngôn ngữ học về nguồn gốc của ngôn ngữ loài người.",
          "workedExample": {
            "prompt": "Which researcher demonstrated that infant babbling exhibits phonetic rhythm? | Passage: 'Dr. Laura Petitto at McGill University showed that babies exposed to sign language produce rhythmic manual gestures...'",
            "steps": [
              "Bước 1: Tìm tên 'Dr. Laura Petitto'.",
              "Bước 2: Đọc hành động: 'showed that babies... produce rhythmic manual gestures'.",
              "Bước 3: Ghép đúng với đặc điểm: phonetic rhythm in infancy."
            ],
            "answer": "Dr. Laura Petitto"
          }
        },
        "production": "Làm bài tập ghép 5 quan điểm với danh sách 4 nhà khảo cổ học trong bài đọc về nền văn minh Maya."
      },
      {
        "id": "L_RD_6",
        "title_en": "Unit 6: Identifying Author's Purpose, Tone & Subtle Nuances",
        "title_vi": "Chuyên đề 6: Xác định Mục đích Tác giả, Giọng văn & Sắc thái Ý nghĩa",
        "band_target": "6.5 - 7.5+",
        "topic": "technology",
        "objectives": {
          "knowledge": "Ngôn ngữ rào đón (Hedging: appears to, arguably) và thái độ của tác giả (objective, critical, skeptical).",
          "ability": "Nhận ra sự dè dặt học thuật trong văn phong tiếng Anh nâng cao.",
          "behavior": "Đọc kỹ các liên từ tương phản (Nevertheless, Notwithstanding) để nắm bắt điểm lật của tác giả."
        },
        "presentation": {
          "concepts": "Ở thang điểm 7.0+, bài thi kiểm tra sự thấu hiểu thái độ và mục đích sâu xa của tác giả.",
          "rules": "Quan sát các tính từ và phó từ mang tính đánh giá (surprisingly, merely, ostensibly).",
          "commonMistakes": [
            "Cho rằng tác giả hoàn toàn ủng hộ một lý thuyết trong khi tác giả chỉ đang dẫn lại lời người khác.",
            "Bỏ qua các từ phủ định ngầm (questionable, far from conclusive)."
          ]
        },
        "practice": {
          "mechanical": "Phân loại 10 câu văn vào 3 nhóm thái độ: Tán thành nhiệt tình / Hoài nghi thận trọng / Trung lập tuyệt đối.",
          "meaningful": "Bài bình luận về tương lai của trí tuệ nhân tạo trong lĩnh vực sáng tạo nghệ thuật.",
          "workedExample": {
            "prompt": "What is the author's primary attitude toward AI-generated poetry? | Passage: 'While algorithms can churn out grammatically immaculate stanzas, they remain hollow echoes, devoid of genuine human heartache.'",
            "steps": [
              "Bước 1: Nhận diện từ nhượng bộ: 'While... grammatically immaculate'.",
              "Bước 2: Nhận diện từ đánh giá cốt lõi: 'hollow echoes, devoid of genuine human heartache'.",
              "Bước 3: Kết luận thái độ: Hoài nghi tính nghệ thuật đích thực của AI."
            ],
            "answer": "Skeptical of its authentic emotional depth"
          }
        },
        "production": "Viết đoạn phân tích 100 từ về sắc thái giọng văn của tác giả trong một bài xã luận trích từ The Economist."
      }
    ],
    "flashcards": [
      {
        "id": "FC_RD_01",
        "topic": "education",
        "term": "Substantiate",
        "ipa": "/səbˈstæn.ʃi.eɪt/",
        "def": "Chứng minh, cung cấp bằng chứng xác thực cho một luận điểm.",
        "ex": "The researchers lacked adequate empirical data to substantiate their hypothesis."
      },
      {
        "id": "FC_RD_02",
        "topic": "environment",
        "term": "Plummet",
        "ipa": "/ˈplʌm.ɪt/",
        "def": "Lao dốc, sụt giảm nghiêm trọng và nhanh chóng (Từ khóa xu hướng Reading & Task 1).",
        "ex": "The cost of solar panels plummeted by over 80 percent within a decade."
      },
      {
        "id": "FC_RD_03",
        "topic": "environment",
        "term": "Imperative",
        "ipa": "/ɪmˈper.ə.tɪv/",
        "def": "Cấp bách, mang tính sống còn, cực kỳ quan trọng.",
        "ex": "Immediate transition to renewable energy is imperative to avert ecological catastrophe."
      },
      {
        "id": "FC_RD_04",
        "topic": "education",
        "term": "Disparate",
        "ipa": "/ˈdɪs.pər.ət/",
        "def": "Khác biệt hoàn toàn, không cùng chủng loại.",
        "ex": "The study integrated disparate methodologies from sociology and neuroscience."
      },
      {
        "id": "FC_RD_05",
        "topic": "technology",
        "term": "Ubiquitous",
        "ipa": "/juːˈbɪk.wɪ.təs/",
        "def": "Có mặt khắp nơi, phổ biến rộng rãi.",
        "ex": "Smartphones have become ubiquitous across all demographics of modern society."
      },
      {
        "id": "FC_RD_06",
        "topic": "education",
        "term": "Hedging",
        "ipa": "/ˈhedʒ.ɪŋ/",
        "def": "Biện pháp rào đón học thuật (Dùng likely, suggests để tránh khẳng định tuyệt đối).",
        "ex": "Academic writers use hedging to avoid making claims that cannot be fully defended."
      },
      {
        "id": "FC_RD_07",
        "topic": "education",
        "term": "Scrutinize",
        "ipa": "/ˈskruː.tɪ.naɪz/",
        "def": "Xem xét, kiểm tra kỹ lưỡng từng chi tiết.",
        "ex": "Peer reviewers scrutinized the clinical trial data for potential sample bias."
      },
      {
        "id": "FC_RD_08",
        "topic": "education",
        "term": "Counter-intuitive",
        "ipa": "/ˌkaʊn.tər.ɪnˈtjuː.ɪ.tɪv/",
        "def": "Đi ngược lại trực giác thông thường nhưng lại đúng với thực tế.",
        "ex": "The finding that reducing speed limits actually decreased congestion seemed counter-intuitive."
      },
      {
        "id": "FC_RD_09",
        "topic": "education",
        "term": "Prerequisite",
        "ipa": "/ˌpriːˈrek.wɪ.zɪt/",
        "def": "Điều kiện tiên quyết, bắt buộc phải có trước.",
        "ex": "A solid grounding in algebra is an essential prerequisite for quantum mechanics."
      },
      {
        "id": "FC_RD_10",
        "topic": "society",
        "term": "Corroborate",
        "ipa": "/kəˈrɒb.ə.reɪt/",
        "def": "Củng cố, xác nhận thêm tính đúng đắn của một lời khai hoặc phát hiện.",
        "ex": "Subsequent archaeological excavations corroborated the ancient traveler's accounts."
      },
      {
        "id": "FC_RD_11",
        "topic": "environment",
        "term": "Disproportionate",
        "ipa": "/ˌdɪs.prəˈpɔː.ʃən.ət/",
        "def": "Không cân xứng, quá mức so với quy mô bình thường.",
        "ex": "A disproportionate share of global carbon emissions originates from heavy industries."
      },
      {
        "id": "FC_RD_12",
        "topic": "education",
        "term": "Anomalous",
        "ipa": "/əˈnɒm.ə.ləs/",
        "def": "Bất thường, dị thường, lệch khỏi quy luật chung.",
        "ex": "The sensor detected anomalous temperature spikes during the deep-sea drill."
      },
      {
        "id": "FC_RD_13",
        "topic": "environment",
        "term": "Proponent",
        "ipa": "/prəˈpəʊ.nənt/",
        "def": "Người ủng hộ một quan điểm, học thuyết (Trái nghĩa: opponent, critic).",
        "ex": "Proponents of nuclear energy argue it provides reliable baseline zero-carbon electricity."
      },
      {
        "id": "FC_RD_14",
        "topic": "environment",
        "term": "Exacerbate",
        "ipa": "/ɪɡˈzæs.ə.beɪt/",
        "def": "Làm trầm trọng thêm một vấn đề hoặc căn bệnh.",
        "ex": "Unregulated deforestation exacerbates soil erosion and increases flash flood risks."
      },
      {
        "id": "FC_RD_15",
        "topic": "society",
        "term": "Paradigm shift",
        "ipa": "/ˈpær.ə.daɪm ʃɪft/",
        "def": "Bước chuyển dịch hệ tư tưởng, thay đổi căn bản trong nhận thức.",
        "ex": "Einstein's theory of relativity represented a profound paradigm shift in physics."
      },
      {
        "id": "FC_RD_16",
        "topic": "environment",
        "term": "Volatile",
        "ipa": "/ˈvɒl.ə.taɪl/",
        "def": "Biến động thất thường, không ổn định.",
        "ex": "Wind and solar energy are subject to volatile atmospheric conditions."
      },
      {
        "id": "FC_RD_17",
        "topic": "education",
        "term": "Inadvertently",
        "ipa": "/ˌɪn.ədˈvɜː.tənt.li/",
        "def": "Vô tình, không cố ý.",
        "ex": "The introduction of non-native trout inadvertently devastated local amphibian populations."
      },
      {
        "id": "FC_RD_18",
        "topic": "technology",
        "term": "Feasible",
        "ipa": "/ˈfiː.zə.bəl/",
        "def": "Khả thi, có thể thực hiện được trong thực tế.",
        "ex": "With modern battery advancements, electrifying short-haul aviation is now feasible."
      },
      {
        "id": "FC_RD_19",
        "topic": "education",
        "term": "Nuance",
        "ipa": "/ˈnjuː.ɑːns/",
        "def": "Sắc thái ý nghĩa tinh tế, sự khác biệt nhỏ nhưng quan trọng.",
        "ex": "Translators must capture every subtle cultural nuance to preserve the text's essence."
      },
      {
        "id": "FC_RD_20",
        "topic": "education",
        "term": "Disseminate",
        "ipa": "/dɪˈsem.ɪ.neɪt/",
        "def": "Phổ biến, lan truyền rộng rãi (thông tin, kiến thức khoa học).",
        "ex": "The research institute aims to disseminate peer-reviewed findings to global policymakers."
      },
      {
        "id": "FC_RD_21",
        "topic": "urban",
        "term": "Microclimate",
        "ipa": "/ˈmaɪ.krəʊˌklaɪ.mət/",
        "def": "Vi khí hậu, khí hậu đặc thù của một khu vực nhỏ hẹp.",
        "ex": "Dense skyscrapers create a distinct microclimate with high localized wind velocities."
      },
      {
        "id": "FC_RD_22",
        "topic": "health",
        "term": "Synaptic",
        "ipa": "/sɪˈnæp.tɪk/",
        "def": "Thuộc về khớp thần kinh kết nối các nơ-ron não bộ.",
        "ex": "Sleep consolidation reinforces synaptic pathways formed during daytime study."
      },
      {
        "id": "FC_RD_23",
        "topic": "technology",
        "term": "Photovoltaic",
        "ipa": "/ˌfəʊ.təʊ.vɒlˈteɪ.ɪk/",
        "def": "Quang điện, biến đổi năng lượng ánh sáng mặt trời thành dòng điện.",
        "ex": "Photovoltaic efficiency has climbed steadily while production costs have dropped."
      },
      {
        "id": "FC_RD_24",
        "topic": "society",
        "term": "Excavation",
        "ipa": "/ˌek.skəˈveɪ.ʃən/",
        "def": "Hoạt động khai quật khảo cổ học dưới lòng đất hoặc đáy biển.",
        "ex": "The marine excavation revealed hundreds of remarkably preserved Tudor artifacts."
      },
      {
        "id": "FC_RD_25",
        "topic": "urban",
        "term": "Thermal insulation",
        "ipa": "/ˈθɜː.məl ˌɪn.sjəˈleɪ.ʃən/",
        "def": "Khả năng cách nhiệt ngăn chặn truyền nhiệt qua kết cấu công trình.",
        "ex": "Green roofs provide natural thermal insulation, cutting cooling electricity demand."
      },
      {
        "id": "FC_RD_26",
        "topic": "society",
        "term": "Teleology",
        "ipa": "/ˌtiː.liˈɒl.ə.dʒi/",
        "def": "Mục đích luận (học thuyết triết học cho rằng mọi tiến trình đều hướng về một cứu cánh).",
        "ex": "Kuhn rejected the teleology of scientific progress as an inevitable march toward absolute truth."
      },
      {
        "id": "FC_RD_27",
        "topic": "environment",
        "term": "Transpiration",
        "ipa": "/ˌtræn.spɪˈreɪ.ʃən/",
        "def": "Quá trình thoát hơi nước qua bề mặt lá cây giúp làm mát không khí.",
        "ex": "Vegetative transpiration significantly lowers ambient surface temperatures in urban parks."
      },
      {
        "id": "FC_RD_28",
        "topic": "health",
        "term": "Biomechanical",
        "ipa": "/ˌbaɪ.əʊ.mɪˈkæn.ɪ.kəl/",
        "def": "Cơ sinh học (nghiên cứu chuyển động cơ học của cơ thể sống).",
        "ex": "Biomechanical sensors track the swimmer's angle of entry into the water."
      },
      {
        "id": "FC_RD_29",
        "topic": "technology",
        "term": "Electrolyzer",
        "ipa": "/ɪˈlek.trəˌlaɪ.zər/",
        "def": "Thiết bị điện phân tách nước thành khí hydro và oxy.",
        "ex": "Deploying cost-effective electrolyzers is crucial for scaling green hydrogen production."
      },
      {
        "id": "FC_RD_30",
        "topic": "society",
        "term": "Incommensurable",
        "ipa": "/ˌɪn.kəˈmen.ʃər.ə.bəl/",
        "def": "Bất khả ước (không thể so sánh theo cùng một tiêu chuẩn chung).",
        "ex": "Competing scientific paradigms are often fundamentally incommensurable."
      }
    ],
    "exams": {
      "4.0": [
        {
          "id": "R40_T1",
          "topic": "society",
          "topic_vi": "Lịch sử & Thời gian",
          "title": "Reading 4.0 — Đề 1: The Story of Mechanical Clocks",
          "title_vi": "Bài đọc 4.0 (Đề 1): Lịch sử Phát minh Đồng hồ Cơ học",
          "passage": "Before the invention of mechanical clocks, humans relied on natural phenomena such as the position of the sun, water clocks, and hourglasses to measure time. While sundials were effective on cloudless days, they were useless during the night or overcast weather. In the late thirteenth century, European craftsmen began building large mechanical clocks for church bell towers. These early clocks did not have dials or hands; they simply rang a bell every hour to alert town residents. In 1656, Dutch scientist Christiaan Huygens made a dramatic breakthrough by patenting the first pendulum clock. The regular swing of the pendulum vastly improved accuracy, reducing daily timekeeping errors from fifteen minutes down to merely fifteen seconds. This paved the way for industrial manufacturing, where coordinated labor schedules became indispensable.",
          "questions": [
            {
              "id": "R40_1_1",
              "band": "4.0",
              "type": "mcq",
              "text": "What was the main limitation of sundials mentioned in the passage?",
              "options": {
                "A": "They were too expensive for ordinary town residents to purchase",
                "B": "They could not function at night or in cloudy weather",
                "C": "Their metal components rusted very quickly in rain",
                "D": "They were prohibited by church authorities"
              },
              "correct": "B",
              "distractorReasons": {
                "A": "Không có thông tin về giá thành.",
                "B": "Chính xác: 'they were useless during the night or overcast weather'.",
                "C": "Không nhắc đến rỉ sét.",
                "D": "Không có lệnh cấm nào."
              },
              "socraticPrompt": "Đồng hồ mặt trời cần ánh sáng mặt trời để hoạt động. Vậy khi trời tối hoặc nhiều mây thì điều gì xảy ra?",
              "breakdown": {
                "concept": "Direct factual lookup",
                "steps": [
                  "Tìm từ khóa sundials",
                  "Đọc useless during night or overcast weather",
                  "Chọn B"
                ],
                "trap": "Suy diễn ngoài bài về chi phí."
              },
              "context": "History of Time Measurement",
              "context_vi": "Lịch sử đo lường thời gian",
              "passage": ""
            },
            {
              "id": "R40_1_2",
              "band": "4.0",
              "type": "fill_in",
              "text": "In 1656, Christiaan Huygens invented the _____ clock.",
              "options": null,
              "correct": "pendulum",
              "distractorReasons": {
                "pendulum": "Chính xác: 'patented the first pendulum clock'.",
                "wrong": "Cần điền từ chỉ loại đồng hồ mà Huygens đã phát minh."
              },
              "socraticPrompt": "Nhà khoa học Christiaan Huygens đã được cấp bằng sáng chế cho loại đồng hồ nào vào năm 1656?",
              "breakdown": {
                "concept": "Scanning for year & noun",
                "steps": [
                  "Quét năm 1656",
                  "Tìm danh từ trước 'clock'",
                  "Điền pendulum"
                ],
                "trap": "Điền 'mechanical' thay vì 'pendulum'."
              },
              "context": "History of Time Measurement",
              "context_vi": "Phát minh đồng hồ con lắc",
              "passage": ""
            }
          ]
        },
        {
          "id": "R40_T2",
          "topic": "environment",
          "topic_vi": "Sinh học Biển & Cá voi",
          "title": "Reading 4.0 — Đề 2: The Migration of the Blue Whale",
          "title_vi": "Bài đọc 4.0 (Đề 2): Hành trình Di cư của Loài Cá voi Xanh",
          "passage": "The blue whale is the largest animal ever known to have lived on Earth, reaching lengths of up to 30 meters and weighing as much as 170 tonnes. Despite their colossal dimensions, these gentle marine giants feed almost exclusively on krill—tiny shrimp-like organisms. During the polar summer months, blue whales consume approximately 4 tonnes of krill every single day in the nutrient-rich icy waters of the Antarctic. As winter approaches and ice freezes over their feeding grounds, the whales undertake an extraordinary migration of several thousand kilometers toward warm equatorial lagoons to breed and nurse their newly born calves. Throughout this arduous journey, which can last several months, adult whales consume virtually no food, surviving entirely upon the thick layers of blubber accumulated during their polar feast.",
          "questions": [
            {
              "id": "R40_2_1",
              "band": "4.0",
              "type": "mcq",
              "text": "What is the primary food source of the blue whale?",
              "options": {
                "A": "Large predatory sharks",
                "B": "Small shrimp-like organisms called krill",
                "C": "Deep-sea giant squids",
                "D": "Floating polar seaweeds"
              },
              "correct": "B",
              "distractorReasons": {
                "A": "Cá voi xanh không săn cá mập.",
                "B": "Chính xác: 'feed almost exclusively on krill—tiny shrimp-like organisms'.",
                "C": "Mực khổng lồ là thức ăn của cá nhà táng (sperm whale).",
                "D": "Không ăn rong biển."
              },
              "socraticPrompt": "Đoạn văn miêu tả thức ăn hầu như duy nhất của cá voi xanh là sinh vật nhỏ giống tôm nào?",
              "breakdown": {
                "concept": "Direct detail identification",
                "steps": [
                  "Tìm từ khóa feed on",
                  "Đọc krill - tiny shrimp-like organisms",
                  "Chọn B"
                ],
                "trap": "Nghĩ rằng cá voi khổng lồ phải ăn cá lớn."
              },
              "context": "Marine Biology",
              "context_vi": "Tập tính dinh dưỡng của cá voi xanh",
              "passage": ""
            },
            {
              "id": "R40_2_2",
              "band": "4.0",
              "type": "fill_in",
              "text": "During their long winter migration, adult whales survive by using their stored _____ .",
              "options": null,
              "correct": "blubber",
              "distractorReasons": {
                "blubber": "Chính xác: 'surviving entirely upon the thick layers of blubber accumulated during their polar feast'.",
                "wrong": "Điền từ chỉ lớp mỡ dưới da cá voi."
              },
              "socraticPrompt": "Trong suốt chuyến di cư mùa đông không ăn uống, cá voi trưởng thành sống sót nhờ lớp mỡ tích lũy nào (blubber)?",
              "breakdown": {
                "concept": "Scanning for biological term",
                "steps": [
                  "Tìm từ khóa surviving entirely upon",
                  "Bắt danh từ blubber",
                  "Điền chính xác"
                ],
                "trap": "Ghi từ 'food' hoặc 'krill'."
              },
              "context": "Marine Biology",
              "context_vi": "Cơ chế sinh tồn trong kỳ di cư",
              "passage": ""
            }
          ]
        }
      ],
      "5.0": [
        {
          "id": "R50_T1",
          "topic": "environment",
          "topic_vi": "Năng lượng Tái tạo",
          "title": "Reading 5.0 — Đề 1: Renewable Energy Transition & Solar Adoption",
          "title_vi": "Bài đọc 5.0 (Đề 1): Chuyển dịch Năng lượng Tái tạo & Điện Mặt trời",
          "passage": "Renewable energy has evolved from a niche experiment into a dominant force in global power generation. Over the last decade, the cost of photovoltaic solar panels has plummeted by over 80 percent, rendering solar cheaper than coal in many geographic zones. However, the integration of variable energy into traditional electrical grids poses substantial technical hurdles. Wind and solar depend upon weather volatility, demanding massive investments in grid-scale battery storage and decentralized distribution networks. While sceptics once claimed green technologies could never power heavy industry, recent breakthroughs in green hydrogen are rapidly disproving their doubts.",
          "questions": [
            {
              "id": "R50_1_1",
              "band": "5.0",
              "type": "mcq",
              "text": "According to the passage, the primary cause of solar energy's rapid adoption is _____ .",
              "options": {
                "A": "Mandatory government legislation",
                "B": "A drastic reduction in manufacturing and component costs",
                "C": "The complete exhaustion of fossil fuel reserves",
                "D": "Unanimous agreement among heavy industries"
              },
              "correct": "B",
              "distractorReasons": {
                "A": "Không được nhắc tới.",
                "B": "Chính xác: 'plummeted by over 80 percent, rendering solar cheaper'.",
                "C": "Nguồn hóa thạch chưa cạn kiệt.",
                "D": "Trái với thực tế trong bài."
              },
              "socraticPrompt": "Cụm từ 'plummeted by over 80 percent' nói về sự sụt giảm của yếu tố nào?",
              "breakdown": {
                "concept": "Paraphrase identification",
                "steps": [
                  "Tìm từ khóa cost",
                  "Đối chiếu drastic reduction",
                  "Chọn B"
                ],
                "trap": "Suy diễn ngoài bài."
              },
              "context": "Renewable Energy Transition",
              "context_vi": "Chuyển dịch năng lượng tái tạo",
              "passage": ""
            },
            {
              "id": "R50_1_2",
              "band": "5.0",
              "type": "mcq",
              "text": "Why do wind and solar energies require investments in battery storage?",
              "options": {
                "A": "Because they are strictly seasonal crops",
                "B": "Because power generation fluctuates with changing weather conditions",
                "C": "Because batteries make electricity more expensive to sell",
                "D": "Because governments forbid connecting solar directly to homes"
              },
              "correct": "B",
              "distractorReasons": {
                "A": "Không phải cây trồng.",
                "B": "Chính xác: 'depend upon weather volatility, demanding massive investments in grid-scale battery storage'.",
                "C": "Lưu trữ để ổn định chứ không để tăng giá.",
                "D": "Không có lệnh cấm."
              },
              "socraticPrompt": "Tính biến động (volatility) của thời tiết giải thích điều gì về sản lượng điện?",
              "breakdown": {
                "concept": "Cause and effect",
                "steps": [
                  "Tìm battery storage",
                  "Đọc weather volatility",
                  "Ghép với fluctuates with changing weather"
                ],
                "trap": "Bẫy suy diễn thương mại."
              },
              "context": "Renewable Energy Transition",
              "context_vi": "Nguyên nhân cần pin lưu trữ",
              "passage": ""
            }
          ]
        },
        {
          "id": "R50_T2",
          "topic": "technology",
          "topic_vi": "Công nghệ Cổ đại & Giấy Cói",
          "title": "Reading 5.0 — Đề 2: Ancient Papyrus Paper Manufacturing",
          "title_vi": "Bài đọc 5.0 (Đề 2): Quy trình Sản xuất Giấy Cói Thời Cổ đại",
          "passage": "Long before the invention of modern wood-pulp paper in China, the ancient Egyptians devised an ingenious writing surface from the Cyperus papyrus plant, which grew abundantly along the marshy delta of the River Nile. The manufacturing process was meticulous. Craftsmen first harvested the tall triangular reeds and peeled away the tough green outer husk. The white inner pith was subsequently sliced into thin longitudinal strips. These moist strips were arranged side by side in two overlapping perpendicular layers on a hard stone slab. Workers then pounded the sheets vigorously with wooden mallets for several hours. The natural sticky sap contained within the plant fibers acted as a potent natural adhesive, welding the strips together without the addition of artificial glue. Finally, the sheets were dried under the Mediterranean sun and polished smooth with rounded ivory stones.",
          "questions": [
            {
              "id": "R50_2_1",
              "band": "5.0",
              "type": "mcq",
              "text": "What acted as the adhesive binding the papyrus strips together?",
              "options": {
                "A": "Boiled animal bone glue imported from Greece",
                "B": "Synthetic chemical resins applied by brushes",
                "C": "The plant's own natural sap released during pounding",
                "D": "A mixture of River Nile mud and wheat flour"
              },
              "correct": "C",
              "distractorReasons": {
                "A": "Không có keo xương động vật.",
                "B": "Thời cổ đại chưa có keo hóa học tổng hợp.",
                "C": "Chính xác: 'The natural sticky sap contained within the plant fibers acted as a potent natural adhesive'.",
                "D": "Bùn sông Nile không phải chất kết dính."
              },
              "socraticPrompt": "Chất dịch dính tự nhiên nào nằm bên trong sợi cây đã đóng vai trò làm keo dán khi bị đập dập?",
              "breakdown": {
                "concept": "Process detail lookup",
                "steps": [
                  "Tìm từ khóa adhesive",
                  "Đọc natural sticky sap within plant fibers",
                  "Chọn C"
                ],
                "trap": "Nghĩ rằng phải pha thêm keo nhân tạo."
              },
              "context": "Ancient Technologies",
              "context_vi": "Chất kết dính giấy cói tự nhiên",
              "passage": ""
            }
          ]
        }
      ],
      "5.5": [
        {
          "id": "R55_T1",
          "topic": "health",
          "topic_vi": "Khoa học Thể thao & Bơi lội",
          "title": "Reading 5.5 — Đề 1: Elite Sports Science & Athletic Innovation (Cambridge 6)",
          "title_vi": "Bài đọc 5.5 (Đề 1): Khoa học Thể thao Đỉnh cao & Đổi mới Huấn luyện",
          "passage": "At the Australian Institute of Sport (AIS), scientists and elite trainers utilize cutting-edge biomechanical monitoring to refine athletic performance. In the swimming division, high-definition optical tracking cameras record swimmers from multiple angles above and beneath the surface. This footage is fed into a 3D visual analysis tool that maps the athlete's stroke velocity and drag resistance with millisecond precision. Interestingly, techniques pioneered in swimming have been adapted for squash and track cycling, illustrating an exchange of expertise across disparate disciplines. However, AIS director Peter Fricker stresses that technology cannot replace raw dedication: 'We cannot waste our time chasing minor computational novelties if the fundamental cardiovascular conditioning is neglected.'",
          "questions": [
            {
              "id": "R55_1_1",
              "band": "5.5",
              "type": "mcq",
              "text": "The 3D analysis tool mentioned in the passage primarily demonstrates the use of _____ .",
              "options": {
                "A": "Genetic modification of elite athletes",
                "B": "Visual imaging to scrutinize movement mechanics",
                "C": "Psychological counseling for competition anxiety",
                "D": "Automated dietary calorie calculation"
              },
              "correct": "B",
              "distractorReasons": {
                "A": "Không có biến đổi gen.",
                "B": "Chính xác: 'high-definition optical tracking cameras... 3D visual analysis tool that maps stroke velocity'.",
                "C": "Không đề cập tư vấn tâm lý.",
                "D": "Không đề cập tính calo."
              },
              "socraticPrompt": "Công cụ phân tích 3D sử dụng hình ảnh camera quang học độ nét cao đại diện cho công nghệ gì?",
              "breakdown": {
                "concept": "Paraphrase identification",
                "steps": [
                  "Tìm 3D visual analysis tool",
                  "Đối chiếu visual imaging",
                  "Chọn B"
                ],
                "trap": "Chọn dinh dưỡng vì tưởng thể thao luôn đi kèm ăn uống."
              },
              "context": "Sports Science Technology",
              "context_vi": "Công nghệ phân tích hình ảnh thể thao",
              "passage": ""
            },
            {
              "id": "R55_1_2",
              "band": "5.5",
              "type": "mcq",
              "text": "How did AIS demonstrate cross-disciplinary innovation?",
              "options": {
                "A": "By training squash players to compete in Olympic swimming",
                "B": "By transferring biomechanical techniques developed in swimming to squash and cycling",
                "C": "By firing trainers who did not hold dual degrees",
                "D": "By merging all sports into a single triathlon event"
              },
              "correct": "B",
              "distractorReasons": {
                "A": "Vận động viên squash không đi bơi.",
                "B": "Chính xác: 'techniques pioneered in swimming have been adapted for squash and track cycling, illustrating an exchange of expertise'.",
                "C": "Không sa thải ai.",
                "D": "Không gộp môn."
              },
              "socraticPrompt": "Câu văn nói về việc kỹ thuật bơi lội được áp dụng sang bóng quần và đua xe đạp diễn giải khái niệm gì?",
              "breakdown": {
                "concept": "Exchange of expertise",
                "steps": [
                  "Tìm cross-disciplinary",
                  "Đọc exchange of expertise across disparate disciplines",
                  "Chọn B"
                ],
                "trap": "Hiểu nhầm là vận động viên đổi môn thi."
              },
              "context": "Sports Science Technology",
              "context_vi": "Chuyển giao kỹ thuật giữa các môn",
              "passage": ""
            }
          ]
        },
        {
          "id": "R55_T2",
          "topic": "environment",
          "topic_vi": "Nông nghiệp Hữu cơ & Dòng chảy Khoáng chất",
          "title": "Reading 5.5 — Đề 2: Organic Farming & Waterway Runoff in New Zealand",
          "title_vi": "Bài đọc 5.5 (Đề 2): Nông nghiệp Hữu cơ & Kiểm soát Dòng chảy Khoáng chất",
          "passage": "In the Canterbury Plains of New Zealand, commercial agriculture has long faced severe public scrutiny regarding synthetic nitrate runoff into local aquifers and freshwater rivers. In response, a five-year longitudinal study compared conventional dairy operations with certified organic pastures. The empirical findings demonstrated that organic practices substantially reduced synthetic fertilizer runoff by 74 percent. However, the report noted that soil mineral runoffs persist even on strictly organic plots, primarily due to natural livestock manure accumulation during intense monsoon downpours. Consequently, environmental scientists emphasize that while organic certification represents a significant ecological milestone, it does not completely eliminate nutrient leaching into riparian ecosystems.",
          "questions": [
            {
              "id": "R55_2_1",
              "band": "5.5",
              "type": "mcq",
              "text": "According to the passage, does organic farming completely stop all chemical and nutrient runoff into rivers?",
              "options": {
                "A": "Yes, it guarantees 100% zero runoff under all weather conditions",
                "B": "No, natural mineral runoffs from animal manure still persist during heavy rains",
                "C": "Yes, but only if cows are replaced with robotic machinery",
                "D": "The passage provides no scientific data regarding rivers"
              },
              "correct": "B",
              "distractorReasons": {
                "A": "Bẫy: Tuyên bố tuyệt đối 100% trái với câu cuối 'does not completely eliminate nutrient leaching'.",
                "B": "Chính xác: 'soil mineral runoffs persist... due to natural livestock manure accumulation during intense monsoon downpours'.",
                "C": "Hài hước, không có bò robot.",
                "D": "Bài đọc có đầy đủ số liệu về sông ngòi."
              },
              "socraticPrompt": "Câu cuối bài đọc khẳng định điều gì về việc liệu canh tác hữu cơ có thể loại bỏ hoàn toàn (completely eliminate) sự rửa trôi dưỡng chất vào nguồn nước không?",
              "breakdown": {
                "concept": "Hedging & absolute claims",
                "steps": [
                  "Đọc câu kết luận: does not completely eliminate",
                  "Tìm nguyên nhân: natural livestock manure",
                  "Chọn B"
                ],
                "trap": "Mắc bẫy suy nghĩ rằng 'hữu cơ' nghĩa là 100% không ô nhiễm."
              },
              "context": "Agronomy & Water Conservation",
              "context_vi": "Thực nghiệm rửa trôi khoáng chất hữu cơ",
              "passage": ""
            }
          ]
        }
      ],
      "6.0": [
        {
          "id": "R60_T1",
          "topic": "urban",
          "topic_vi": "Đảo nhiệt Đô thị & Mái nhà Xanh",
          "title": "Reading 6.0 — Đề 1: Urban Microclimates & Green Architecture",
          "title_vi": "Bài đọc 6.0 (Đề 1): Vi khí hậu Đô thị & Kiến trúc Xanh",
          "passage": "Urban heat islands (UHIs) represent one of the most pressing ecological challenges of modern urbanization. Dense concrete structures, asphalt pavements, and the continuous expulsion of waste heat from air conditioning systems create localized microclimates that are frequently 4 to 7 degrees Celsius warmer than adjacent rural perimeters. To mitigate this thermal accumulation, architects are implementing intensive green roofs and living walls. Far from being merely ornamental, vegetative layers provide evaporative cooling through plant transpiration, while simultaneously acting as thermal insulation that reduces a building's internal energy consumption by up to 30 percent. Nevertheless, critics argue that the structural load-bearing requirements and substantial irrigation expenses often restrict green facades to prestige corporate headquarters rather than affordable residential blocks.",
          "questions": [
            {
              "id": "R60_1_1",
              "band": "6.0",
              "type": "mcq",
              "text": "What is the primary thermodynamic benefit of living walls and green roofs according to the text?",
              "options": {
                "A": "They generate commercial timber for downtown construction",
                "B": "They provide evaporative cooling and internal thermal insulation",
                "C": "They eliminate all external noise pollution entirely",
                "D": "They absorb carbon dioxide and convert it into pure methane"
              },
              "correct": "B",
              "distractorReasons": {
                "A": "Không dùng khai thác gỗ.",
                "B": "Chính xác: 'provide evaporative cooling through plant transpiration, while simultaneously acting as thermal insulation'.",
                "C": "Bẫy từ tuyệt đối 'eliminate all'.",
                "D": "Sai kiến thức sinh học."
              },
              "socraticPrompt": "Hai cơ chế kép nào giúp thảm thực vật trên mái nhà giảm nhiệt độ?",
              "breakdown": {
                "concept": "Technical mechanism extraction",
                "steps": [
                  "Định vị evaporative cooling",
                  "Đọc thermal insulation",
                  "Chọn B"
                ],
                "trap": "Bẫy từ tuyệt đối 'eliminate all'."
              },
              "context": "Sustainable Urban Design",
              "context_vi": "Thiết kế đô thị bền vững",
              "passage": ""
            },
            {
              "id": "R60_1_2",
              "band": "6.0",
              "type": "mcq",
              "text": "What constraint limits the widespread adoption of green facades in low-cost housing?",
              "options": {
                "A": "A complete lack of certified landscape architects in metropolitan areas",
                "B": "Structural weight burdens and ongoing irrigation costs",
                "C": "Municipal laws that ban plants on exterior walls",
                "D": "Public superstition regarding rooftop vegetation"
              },
              "correct": "B",
              "distractorReasons": {
                "A": "Không thiếu kiến trúc sư.",
                "B": "Chính xác: 'structural load-bearing requirements and substantial irrigation expenses often restrict green facades'.",
                "C": "Không có luật cấm.",
                "D": "Không có mê tín dị đoan."
              },
              "socraticPrompt": "Hai rào cản tài chính và kỹ thuật nào khiến nhà ở giá rẻ khó lắp đặt tường xanh?",
              "breakdown": {
                "concept": "Constraint & barrier analysis",
                "steps": [
                  "Tìm từ khóa restrict",
                  "Đọc structural load-bearing... irrigation expenses",
                  "Chọn B"
                ],
                "trap": "Nhầm rào cản kỹ thuật thành rào cản pháp lý."
              },
              "context": "Sustainable Urban Design",
              "context_vi": "Rào cản nhân rộng tường xanh",
              "passage": ""
            }
          ]
        },
        {
          "id": "R60_T2",
          "topic": "health",
          "topic_vi": "Trí thông minh Loài Quạ",
          "title": "Reading 6.0 — Đề 2: Avian Cognition: The Problem-Solving Intellect of Crows",
          "title_vi": "Bài đọc 6.0 (Đề 2): Nhận thức Loài Chim: Trí tuệ Giải quyết Vấn đề của Quạ",
          "passage": "For centuries, the human capacity for tool modification was regarded as an unbridgeable cognitive boundary separating primates from the remainder of the animal kingdom. However, laboratory experiments conducted with New Caledonian crows (Corvus moneduloides) have radically overturned this anthropological dogma. When presented with a narrow vertical tube containing food suspended in a tiny bucket, crows demonstrated the spontaneous ability to bend straight pieces of pliable wire into functional hooks to retrieve the treat. Remarkably, the birds performed this multistep reasoning without prior observational conditioning. Subsequent neurological imaging revealed that while avian brains lack a laminated mammalian neocortex, their densely packed forebrain structure—known as the nidopallium—exhibits synaptic connectivity and computational density comparable to that of advanced chimpanzees.",
          "questions": [
            {
              "id": "R60_2_1",
              "band": "6.0",
              "type": "mcq",
              "text": "How did New Caledonian crows challenge traditional scientific assumptions about tool use?",
              "options": {
                "A": "By purchasing tools using currency in human supermarkets",
                "B": "By spontaneously fabricating functional hook tools from straight wire without previous training",
                "C": "By teaching human researchers how to build wooden nests",
                "D": "By speaking fluent English to demand treats"
              },
              "correct": "B",
              "distractorReasons": {
                "A": "Phi thực tế.",
                "B": "Chính xác: 'demonstrated the spontaneous ability to bend straight pieces of pliable wire into functional hooks... without prior observational conditioning'.",
                "C": "Đảo ngược đối tượng thí nghiệm.",
                "D": "Hài hước."
              },
              "socraticPrompt": "Hành động tự phát nào của loài quạ (spontaneous fabrication of hooks) đã làm đảo lộn quan niệm truyền thống về việc chế tạo công cụ?",
              "breakdown": {
                "concept": "Scientific breakthrough interpretation",
                "steps": [
                  "Tìm cụm overturned this anthropological dogma",
                  "Đọc chi tiết uốn dây kim loại thành móc câu",
                  "Chọn B"
                ],
                "trap": "Nhầm giữa học vẹt (conditioning) và tư duy tự phát (spontaneous reasoning)."
              },
              "context": "Comparative Animal Cognition",
              "context_vi": "Nghiên cứu nhận thức so sánh loài quạ",
              "passage": ""
            }
          ]
        }
      ],
      "6.5": [
        {
          "id": "R65_T1",
          "topic": "health",
          "topic_vi": "Khoa học Thần kinh & Trí nhớ",
          "title": "Reading 6.5 — Đề 1: Cognitive Psychology of Memory Consolidation",
          "title_vi": "Bài đọc 6.5 (Đề 1): Tâm lý học Nhận thức về Củng cố Trí nhớ",
          "passage": "The consolidation of episodic memory is no longer conceived as a passive settling of neural traces, but rather as an active, iterative reorganization orchestrated primarily during slow-wave sleep. During non-rapid eye movement (NREM) phases, the hippocampus repeatedly replays recently acquired informational patterns, progressively transferring the synaptic weight to neocortical storage sites. This dual-system model accounts for both rapid acquisition and enduring preservation without catastrophic interference—a computational dilemma where new inputs obliterate pre-existing knowledge. Intrigued by these biological dynamics, modern machine learning researchers are implementing synthetic 'replay buffers' in deep reinforcement networks, directly mirroring hippocampal-cortical dialogue to enhance robotic autonomy.",
          "questions": [
            {
              "id": "R65_1_1",
              "band": "6.5",
              "type": "mcq",
              "text": "What dilemma does the dual-system memory consolidation model effectively resolve?",
              "options": {
                "A": "The inability of human eyes to track high-speed objects in daylight",
                "B": "The risk that novel inputs would overwrite and erase established memories",
                "C": "The biological requirement to consume calories prior to intellectual labor",
                "D": "The permanent deterioration of neocortical tissue during adolescence"
              },
              "correct": "B",
              "distractorReasons": {
                "A": "Không liên quan đến mắt.",
                "B": "Chính xác: 'without catastrophic interference—a computational dilemma where new inputs obliterate pre-existing knowledge'.",
                "C": "Không liên quan calo.",
                "D": "Không có thoái hóa vĩnh viễn não bộ."
              },
              "socraticPrompt": "Thuật ngữ 'catastrophic interference' được định nghĩa sau dấu gạch ngang là tình trạng gì đối với kiến thức có từ trước?",
              "breakdown": {
                "concept": "Appositive definition",
                "steps": [
                  "Tìm computational dilemma",
                  "Đọc new inputs obliterate pre-existing knowledge",
                  "Ghép overwrite and erase established memories"
                ],
                "trap": "Bị choáng ngợp bởi thuật ngữ thần kinh học."
              },
              "context": "Neuroscience & AI Convergence",
              "context_vi": "Khoa học thần kinh và trí tuệ nhân tạo",
              "passage": ""
            }
          ]
        },
        {
          "id": "R65_T2",
          "topic": "society",
          "topic_vi": "Khảo cổ học Hàng hải & Mary Rose",
          "title": "Reading 6.5 — Đề 2: Marine Archaeology: Preserving the Tudor Warship Mary Rose",
          "title_vi": "Bài đọc 6.5 (Đề 2): Khảo cổ Hàng hải: Bảo tồn Chiến hạm Cổ Mary Rose",
          "passage": "When the flagship of King Henry VIII, the Mary Rose, capsized and sank in the Solent in 1545, it was rapidly engulfed by deep marine silt. This anaerobic, oxygen-depleted seabed environment protected the starboard hull from timber-eating mollusks and biological decay for more than four centuries. Following the dramatic salvage operation in 1982, conservators faced an immense thermodynamic challenge: if waterlogged oak dries too rapidly in ambient air, internal capillary tension causes cell walls to collapse, reducing priceless historical artifacts to brittle dust. To avert this catastrophic disintegration, conservators embarked upon a pioneering thirty-year conservation regimen, continuously spraying the hull with polyethylene glycol (PEG)—a synthetic water-soluble wax that gradually permeated the cellular matrix, replacing water molecules before controlled air-drying commenced.",
          "questions": [
            {
              "id": "R65_2_1",
              "band": "6.5",
              "type": "mcq",
              "text": "Why did conservators treat the waterlogged oak hull with polyethylene glycol (PEG)?",
              "options": {
                "A": "To make the wooden warship flammable for ceremonial burning",
                "B": "To replace water in the cellular matrix and prevent structural collapse during drying",
                "C": "To poison modern tourists who touch the historical timber",
                "D": "To change the color of the ship from dark oak to bright gold"
              },
              "correct": "B",
              "distractorReasons": {
                "A": "Bảo tồn chứ không đốt.",
                "B": "Chính xác: 'gradually permeated the cellular matrix, replacing water molecules before controlled air-drying commenced'.",
                "C": "Phi lý, độc hại.",
                "D": "Không đổi màu gỗ thành vàng."
              },
              "socraticPrompt": "Dung dịch sáp tổng hợp PEG được phun liên tục lên thân tàu nhằm thay thế phân tử nước trong cấu trúc tế bào để ngăn chặn hiện tượng gì?",
              "breakdown": {
                "concept": "Chemical conservation rationale",
                "steps": [
                  "Tìm polyethylene glycol",
                  "Đọc replacing water molecules... prevent collapse",
                  "Chọn B"
                ],
                "trap": "Nhầm tưởng đó là sơn phủ bề mặt thông thường."
              },
              "context": "Maritime Archaeology",
              "context_vi": "Bảo tồn di sản chiến hạm cổ",
              "passage": ""
            }
          ]
        }
      ],
      "7.0": [
        {
          "id": "R70_T1",
          "topic": "society",
          "topic_vi": "Triết học Khoa học & Hệ hình",
          "title": "Reading 7.0+ — Đề 1: Epistemology & Scientific Paradigm Shifts",
          "title_vi": "Bài đọc 7.0+ (Đề 1): Nhận thức luận & Bước chuyển Hệ hình Khoa học",
          "passage": "In his seminal 1962 treatise, Thomas Kuhn contested the prevailing positivist teleology which characterized scientific progress as a seamless, cumulative accumulation of verifiable facts. Kuhn posited instead that normal science operates within an entrenched paradigm—an unwritten consensus of theoretical assumptions, experimental protocols, and ontological commitments. Inevitably, anomalies emerge that resist assimilation into the existing framework. Initial institutional reactions are almost uniformly conservative: anomalies are dismissed as experimental errors or peripheral trivialities. Only when recalcitrant anomalies proliferate to an unsustainable tipping point does a discipline enter a state of acute crisis, precipitating a paradigm shift that inaugurates a radically incommensurable worldview.",
          "questions": [
            {
              "id": "R70_1_1",
              "band": "7.0",
              "type": "mcq",
              "text": "How do established scientific institutions initially react when faced with theoretical anomalies?",
              "options": {
                "A": "They immediately discard their overarching paradigms in favor of radical alternatives",
                "B": "They tend to repudiate or minimize the anomalies as anomalous outliers or methodological errors",
                "C": "They petition governmental bodies to criminalize the dissenting researchers",
                "D": "They cease all laboratory funding until theoretical consensus is mathematically proven"
              },
              "correct": "B",
              "distractorReasons": {
                "A": "Trái ngược: phản ứng ban đầu luôn bảo thủ.",
                "B": "Chính xác: 'Initial institutional reactions are almost uniformly conservative: anomalies are dismissed as experimental errors or peripheral trivialities'.",
                "C": "Không hình sự hóa.",
                "D": "Không đình chỉ kinh phí."
              },
              "socraticPrompt": "Từ 'dismissed as experimental errors or peripheral trivialities' tương đương với việc các viện nghiên cứu làm gì với hiện tượng bất thường?",
              "breakdown": {
                "concept": "Philosophical nuance",
                "steps": [
                  "Tìm Initial institutional reactions",
                  "Đọc anomalies dismissed as experimental errors",
                  "Ghép repudiate or minimize"
                ],
                "trap": "Chọn A vì nghĩ khoa học luôn sẵn sàng thay đổi ngay."
              },
              "context": "Philosophy of Science",
              "context_vi": "Triết học khoa học và bước chuyển hệ hình Kuhn",
              "passage": ""
            }
          ]
        },
        {
          "id": "R70_T2",
          "topic": "health",
          "topic_vi": "Ngôn ngữ học Nhận thức & Trẻ sơ sinh",
          "title": "Reading 7.0+ — Đề 2: Cognitive Linguistics: Phonetic Invariance & Infant Speech Perception",
          "title_vi": "Bài đọc 7.0+ (Đề 2): Ngôn ngữ học Nhận thức: Bất biến Ngữ âm & Tri giác Ngôn ngữ Trẻ thơ",
          "passage": "Generative linguists have long posited the existence of an innate Universal Grammar, arguing that the chaotic acoustic input received by human infants is far too impoverished to account for the astonishing velocity of childhood language acquisition. However, groundbreaking neuro-imaging studies by Dr. Patricia Kuhl at the University of Washington have revealed a vastly more dynamic epigenetic process: 'statistical learning.' Prior to eight months of age, human infants function as universal citizens, capable of distinguishing all phonetic contrasts across all human tongues. Between eight and ten months, however, a critical neural pruning occurs: through continuous statistical tracking of distributional syllable frequencies in ambient parental speech, the infant's brain constructs neural commitment maps, tuning itself exclusively to the phonemic inventory of its native tongue while progressively shedding sensitivity to foreign contrasts.",
          "questions": [
            {
              "id": "R70_2_1",
              "band": "7.0",
              "type": "mcq",
              "text": "What does Dr. Patricia Kuhl's research demonstrate occurs between 8 and 10 months of age in infants?",
              "options": {
                "A": "Infants completely lose the ability to digest milk products",
                "B": "Infants undergo neural pruning, tuning phonetic perception to their native language through statistical frequency tracking",
                "C": "Infants learn to write full sentences using pencil and paper",
                "D": "Infants forget their parents' faces due to visual cortical degradation"
              },
              "correct": "B",
              "distractorReasons": {
                "A": "Sinh học tiêu hóa không liên quan.",
                "B": "Chính xác: 'Between eight and ten months... critical neural pruning occurs: through continuous statistical tracking... tuning itself exclusively to the phonemic inventory of its native tongue'.",
                "C": "Trẻ 8 tháng chưa thể cầm bút viết.",
                "D": "Không liên quan thị giác."
              },
              "socraticPrompt": "Tiến trình 'neural pruning' (cắt tỉa nơ-ron) trong khoảng 8 đến 10 tháng tuổi giúp não bộ của trẻ định hình điều gì dựa trên thống kê tần suất âm thanh?",
              "breakdown": {
                "concept": "Developmental psycholinguistics",
                "steps": [
                  "Tìm mốc Between eight and ten months",
                  "Đọc neural pruning... tuning exclusively to native tongue",
                  "Chọn B"
                ],
                "trap": "Bị choáng bởi các thuật ngữ epigenetic và phonemic inventory."
              },
              "context": "Developmental Psycholinguistics",
              "context_vi": "Tri giác ngữ âm và học thống kê ở trẻ thơ",
              "passage": ""
            }
          ]
        }
      ]
    }
  },
  "writing": {
    "lessons": [
      {
        "id": "L_WR_1",
        "title_en": "Unit 1: Task 1 Visual Data & Trend Vocabulary",
        "title_vi": "Chuyên đề 1: Phân tích Dữ liệu Biểu đồ & Từ vựng Xu hướng (Task 1)",
        "band_target": "3.5 - 4.5",
        "topic": "education",
        "objectives": {
          "knowledge": "Cấu trúc 4 đoạn chuẩn Task 1: Introduction, Overview, Body 1, Body 2.",
          "ability": "Sử dụng chính xác cặp Động từ + Trạng từ hoặc Tính từ + Danh từ.",
          "behavior": "Tuyệt đối không đưa ý kiến cá nhân (I think) vào bài viết Task 1."
        },
        "presentation": {
          "concepts": "Task 1 yêu cầu tóm tắt khách quan dữ liệu số trong 150 từ trong 20 phút.",
          "rules": "Đoạn Overview là trái tim của bài Task 1. Không có Overview điểm không vượt qua Band 5.0.",
          "commonMistakes": [
            "Liệt kê tất cả các con số thành danh sách khô khan.",
            "Sai thì động từ (quá khứ dùng hiện tại)."
          ]
        },
        "practice": {
          "mechanical": "Viết lại 5 câu biến đổi giữa cấu trúc: [S + V + Adv] và [There was an Adj + N in S].",
          "meaningful": "Phân tích biểu đồ đường thể hiện tỷ lệ tiêu thụ thịt bò và thịt gà tại Anh (1980–2010).",
          "workedExample": {
            "prompt": "Prompt: 'Chicken consumption rose from 100g to 250g per person.'",
            "steps": [
              "Cách 1: Chicken consumption increased significantly from 100g to 250g...",
              "Cách 2: There was a significant rise in the consumption of chicken..."
            ],
            "answer": "There was a significant increase in chicken consumption, which rose from 100g to 250g per person."
          }
        },
        "production": "Viết đoạn Overview hoàn chỉnh cho biểu đồ cột so sánh tỷ lệ tốt nghiệp đại học giữa nam và nữ."
      },
      {
        "id": "L_WR_2",
        "title_en": "Unit 2: Task 2 PEEL Paragraph Architecture",
        "title_vi": "Chuyên đề 2: Cấu trúc Đoạn văn PEEL trong Luận đề (Task 2)",
        "band_target": "4.5 - 5.5",
        "topic": "health",
        "objectives": {
          "knowledge": "Quy tắc 4 bước PEEL: P (Point), E (Explanation), E (Example), L (Link).",
          "ability": "Triển khai một ý tưởng đầy đủ sâu sắc trong 4–5 câu văn thay vì liệt kê 5 ý tưởng hời hợt.",
          "behavior": "Dành 5 phút lập dàn ý trước khi viết; không vừa viết vừa nghĩ."
        },
        "presentation": {
          "concepts": "Mỗi đoạn thân bài phải có một chủ đề rõ ràng (Central topic) được phát triển mạch lạc.",
          "rules": "Câu đầu tiên của thân bài (Topic sentence) phải nêu trực diện luận điểm.",
          "commonMistakes": [
            "Đưa ví dụ cá nhân vụn vặt ('My uncle John...').",
            "Thiếu từ nối lập luận (Furthermore, Consequently)."
          ]
        },
        "practice": {
          "mechanical": "Sắp xếp 4 câu văn rời rạc thành một đoạn thân bài PEEL chuẩn mực.",
          "meaningful": "Viết đoạn thân bài ủng hộ việc nhà nước đầu tư phát triển giao thông công cộng.",
          "workedExample": {
            "prompt": "Topic: Public transit mitigates emissions.",
            "steps": [
              "P: First and foremost, allocating capital to public transit directly mitigates vehicular emissions.",
              "E: When efficient metro lines are accessible, commuters transition away from private cars.",
              "E: For instance, cities like Tokyo demonstrated a measurable drop in carbon output.",
              "L: Thus, public investment yields tangible environmental dividends."
            ],
            "answer": "Đoạn văn PEEL hoàn chỉnh kết hợp 4 bước liền mạch."
          }
        },
        "production": "Viết đoạn thân bài 90 từ theo mô hình PEEL: 'Should university education be free for all students?'"
      },
      {
        "id": "L_WR_3",
        "title_en": "Unit 3: Task 2 Opinion Essays (Agree / Disagree)",
        "title_vi": "Chuyên đề 3: Dạng bài Đồng ý hay Phản đối (Agree / Disagree)",
        "band_target": "5.5 - 6.5",
        "topic": "society",
        "objectives": {
          "knowledge": "Chiến lược lập trường: Hoàn toàn đồng ý/phản đối (Strong view) hoặc Cân bằng có điều kiện (Nuanced view).",
          "ability": "Viết mở bài 2 câu: Câu 1 Paraphrase đề bài, Câu 2 Thesis statement nêu rõ lập trường.",
          "behavior": "Giữ vững lập trường xuyên suốt từ mở bài đến kết bài; không tự mâu thuẫn."
        },
        "presentation": {
          "concepts": "Đề thi hỏi 'To what extent do you agree or disagree?'. Cần trả lời dứt khoát mức độ đồng tình.",
          "rules": "Kết bài không bao giờ được đưa thêm ý tưởng mới; chỉ tóm lược lại thân bài.",
          "commonMistakes": [
            "Mở bài nói đồng ý nhưng thân bài lại chỉ viết về lý do phản đối.",
            "Dùng từ ngữ quá cực đoan ('100% true and no one can deny')."
          ]
        },
        "practice": {
          "mechanical": "Viết 3 câu Thesis statement cho 3 đề bài Agree/Disagree theo phong cách học thuật.",
          "meaningful": "Phân tích đề thi: 'Businesses also have social responsibilities. Do you agree or disagree?' (Ngọc Bách).",
          "workedExample": {
            "prompt": "Businesses must have social responsibilities.",
            "steps": [
              "Mở bài: Paraphrase profit maximization và societal welfare.",
              "Thesis: While profitability is essential, corporations have an ethical obligation to serve communities.",
              "Thân bài 1: Trách nhiệm môi trường.",
              "Thân bài 2: Phúc lợi nhân viên và đóng góp cộng đồng."
            ],
            "answer": "Dàn bài chi tiết 4 đoạn chuẩn mực Band 7.5."
          }
        },
        "production": "Viết bài luận hoàn chỉnh 250 từ về trách nhiệm xã hội của doanh nghiệp."
      },
      {
        "id": "L_WR_4",
        "title_en": "Unit 4: Task 2 Discussion & Problem-Solution Essays",
        "title_vi": "Chuyên đề 4: Dạng bài Thảo luận 2 chiều & Nguyên nhân - Giải pháp",
        "band_target": "5.5 - 6.5",
        "topic": "urban",
        "objectives": {
          "knowledge": "Cấu trúc 'Discuss both views and give your opinion' và 'Problems & Solutions'.",
          "ability": "Phân bổ dung lượng cân đối giữa 2 quan điểm; liên kết trực tiếp mỗi giải pháp với một nguyên nhân cụ thể.",
          "behavior": "Luôn thể hiện rõ quan điểm của mình ủng hộ phía nào ngay trong phần mở bài hoặc từng thân bài."
        },
        "presentation": {
          "concepts": "Dạng bài Discussion yêu cầu phân tích khách quan cả 2 mặt trước khi chốt lại lập trường.",
          "rules": "Mỗi giải pháp đề xuất phải có tính khả thi trong thực tế (actionable & realistic).",
          "commonMistakes": [
            "Chỉ phân tích 1 phía và bỏ quên phía còn lại.",
            "Đề xuất giải pháp chung chung ('the government should raise awareness') mà không có hành động cụ thể."
          ]
        },
        "practice": {
          "mechanical": "Ghép 4 nguyên nhân gây ùn tắc giao thông đô thị với 4 giải pháp tương ứng.",
          "meaningful": "Phân tích đề tài: 'Traffic congestion in modern cities: causes and solutions'.",
          "workedExample": {
            "prompt": "Problem: Excessive private automobile usage.",
            "steps": [
              "Cause: Inadequate suburban metro connectivity forces commuters into personal cars.",
              "Solution: Municipalities must invest in high-frequency electric bus rapid transit (BRT) networks.",
              "Evaluation: This provides a cost-effective, time-saving alternative."
            ],
            "answer": "Cặp Nguyên nhân - Giải pháp đồng bộ, chặt chẽ."
          }
        },
        "production": "Viết một bài luận 250 từ phân tích nguyên nhân và giải pháp cho vấn đề rác thải nhựa đại dương."
      },
      {
        "id": "L_WR_5",
        "title_en": "Unit 5: Task 1 Process & Map Description Mastery",
        "title_vi": "Chuyên đề 5: Làm chủ Dạng bài Quy trình (Process) & Bản đồ (Map)",
        "band_target": "6.0 - 7.0+",
        "topic": "technology",
        "objectives": {
          "knowledge": "Quy chuẩn thể bị động (Passive voice) trong quy trình nhân tạo; hệ thống từ chỉ vị trí và sự chuyển dịch không gian trong Map.",
          "ability": "Nhóm các bước trong quy trình thành 2 giai đoạn tự nhiên (Thu hoạch/Sơ chế vs Đóng gói/Thành phẩm); so sánh sự thay đổi của khu vực qua 2 mốc thời gian.",
          "behavior": "Không bỏ sót bất kỳ bước nào trong sơ đồ quy trình."
        },
        "presentation": {
          "concepts": "Quy trình nhân tạo yêu cầu khách quan tuyệt đối; Map yêu cầu từ vựng chỉ sự mở rộng (expanded), phá bỏ (demolished), chuyển đổi (converted).",
          "rules": "Sử dụng từ nối tuần tự: 'Subsequently', 'Following this', 'In the final phase'.",
          "commonMistakes": [
            "Dùng thể chủ động ('Workers pick the tea leaves') thay vì bị động ('Tea leaves are picked').",
            "Nhầm lẫn hướng Đông/Tây trên bản đồ."
          ]
        },
        "practice": {
          "mechanical": "Chuyển 5 câu mô tả từ chủ động sang bị động trong quy trình sản xuất xi măng.",
          "meaningful": "Mô tả sự phát triển của một thị trấn ven hồ từ năm 1995 đến 2015.",
          "workedExample": {
            "prompt": "Old farmland was replaced by a shopping mall.",
            "steps": [
              "Nâng cấp: 'The agricultural farmland situated in the north-east was completely cleared to make way for a contemporary commercial shopping complex.'",
              "Từ nối: 'Meanwhile, the adjacent residential cottages were demolished and replaced by high-rise apartment blocks.'"
            ],
            "answer": "Đoạn văn Map chuẩn mực Band 7.5."
          }
        },
        "production": "Viết bài mô tả 150 từ cho quy trình sản xuất gạch xây dựng truyền thống."
      },
      {
        "id": "L_WR_6",
        "title_en": "Unit 6: Academic Hedging & Lexical Precision in Task 2",
        "title_vi": "Chuyên đề 6: Kỹ thuật Rào đón Học thuật & Độ chính xác Từ vựng",
        "band_target": "6.5 - 7.5+",
        "topic": "education",
        "objectives": {
          "knowledge": "Thang đo Lexical Resource Band 7-8: Sử dụng từ ít phổ biến đúng ngữ cảnh và Collocations chuẩn mực.",
          "ability": "Thay thế các khẳng định võ đoán bằng ngôn ngữ rào đón (tend to, arguably, can potentially lead to).",
          "behavior": "Rà soát lại để loại bỏ từ văn nói suồng sã (kids, stuff, a lot of)."
        },
        "presentation": {
          "concepts": "Văn phong học thuật quốc tế đánh giá cao tính khách quan và khiêm tốn trí tuệ.",
          "rules": "Hạn chế dùng đại từ 'you'; thay bằng 'individuals', 'citizens', 'commuters'.",
          "commonMistakes": [
            "Nhồi nhét từ 'đao to búa lớn' nhưng sai ngữ cảnh.",
            "Dùng thành ngữ giao tiếp ('piece of cake') vào văn bản học thuật."
          ]
        },
        "practice": {
          "mechanical": "Sửa 10 câu văn từ phong cách cực đoan sang phong cách học thuật có rào đón.",
          "meaningful": "Nâng cấp đoạn văn về Trí tuệ nhân tạo và việc làm từ Band 5.5 lên Band 7.5.",
          "workedExample": {
            "prompt": "Band 5.0: 'AI will definitely take all human jobs and destroy society.'",
            "steps": [
              "Rào đón: 'could potentially displace a substantial proportion of vocations'.",
              "Từ vựng: 'thereby posing profound structural challenges to global labor markets.'",
              "Ghép câu: 'It is widely contended that the acceleration of artificial intelligence could potentially displace a substantial proportion of traditional vocations, thereby posing profound structural challenges to labor markets.'"
            ],
            "answer": "Câu văn học thuật Band 8.0."
          }
        },
        "production": "Viết lại một đoạn văn mẫu 80 từ bằng cách áp dụng 3 kỹ thuật rào đón học thuật."
      }
    ],
    "flashcards": [
      {
        "id": "FC_WR_01",
        "topic": "education",
        "term": "Substantial increase",
        "ipa": "/səbˈstæn.ʃəl ˈɪn.kriːs/",
        "def": "Sự gia tăng đáng kể, có ý nghĩa lớn về mặt số liệu (Task 1).",
        "ex": "There was a substantial increase in online retail sales during the pandemic."
      },
      {
        "id": "FC_WR_02",
        "topic": "education",
        "term": "Plateau",
        "ipa": "/ˈplæt.əʊ/",
        "def": "Đi ngang, duy trì trạng thái bình ổn sau một giai đoạn tăng hoặc giảm (Task 1).",
        "ex": "Car production plateaued at approximately 50,000 units per month between 2012 and 2015."
      },
      {
        "id": "FC_WR_03",
        "topic": "education",
        "term": "First and foremost",
        "ipa": "/ˌfɜːst ənd ˈfɔː.məʊst/",
        "def": "Trước hết và quan trọng nhất (Liên từ mở đầu luận điểm chính trong Task 2).",
        "ex": "First and foremost, governments must prioritize primary healthcare infrastructure."
      },
      {
        "id": "FC_WR_04",
        "topic": "education",
        "term": "Consequently",
        "ipa": "/ˈkɒn.sɪ.kwənt.li/",
        "def": "Hậu quả là, do đó (Chỉ kết quả tất yếu của một hành động).",
        "ex": "Many citizens lack access to clean water; consequently, waterborne illnesses proliferate."
      },
      {
        "id": "FC_WR_05",
        "topic": "environment",
        "term": "Mitigate",
        "ipa": "/ˈmɪt.ɪ.ɡeɪt/",
        "def": "Giảm thiểu tác động tiêu cực của một vấn đề (Collocation: mitigate climate change / risks).",
        "ex": "Strict carbon taxation serves to mitigate industrial greenhouse emissions."
      },
      {
        "id": "FC_WR_06",
        "topic": "education",
        "term": "Conversely",
        "ipa": "/ˈkɒn.vɜːs.li/",
        "def": "Ngược lại (Liên từ so sánh tương phản mạnh giữa 2 mệnh đề độc lập).",
        "ex": "Urban areas enjoy robust public transit; conversely, rural communities remain car-dependent."
      },
      {
        "id": "FC_WR_07",
        "topic": "education",
        "term": "Exemplify",
        "ipa": "/ɪɡˈzem.plɪ.faɪ/",
        "def": "Minh họa điển hình cho một luận điểm (Dùng thay thế cho 'For example').",
        "ex": "This phenomenon is clearly exemplified by the rapid urbanization of East Asian capitals."
      },
      {
        "id": "FC_WR_08",
        "topic": "education",
        "term": "Inadvertent",
        "ipa": "/ˌɪn.ədˈvɜː.tənt/",
        "def": "Vô ý, không lường trước (Collocation: inadvertent consequences).",
        "ex": "The policy produced several inadvertent economic consequences for small retail businesses."
      },
      {
        "id": "FC_WR_09",
        "topic": "education",
        "term": "Pivotal role",
        "ipa": "/ˈpɪv.ə.təl rəʊl/",
        "def": "Vai trò then chốt, mang tính chất quyết định.",
        "ex": "Primary school educators play a pivotal role in shaping adolescent cognitive development."
      },
      {
        "id": "FC_WR_10",
        "topic": "health",
        "term": "Detrimental effect",
        "ipa": "/ˌdet.rɪˈmen.təl ɪˈfekt/",
        "def": "Tác động có hại, gây tổn hại nghiêm trọng.",
        "ex": "Excessive screen immersion exerts a demonstrably detrimental effect on sleep quality."
      },
      {
        "id": "FC_WR_11",
        "topic": "education",
        "term": "Fluctuate wildly",
        "ipa": "/ˈflʌk.tʃu.eɪt ˈwaɪld.li/",
        "def": "Biến động dữ dội, lên xuống thất thường (Task 1).",
        "ex": "Oil prices fluctuated wildly between $40 and $120 per barrel over the decade."
      },
      {
        "id": "FC_WR_12",
        "topic": "education",
        "term": "Proponent",
        "ipa": "/prəˈpəʊ.nənt/",
        "def": "Người tán thành một quan điểm trong bài luận thảo luận 2 chiều.",
        "ex": "Proponents of renewable subsidies argue that clean energy ensures long-term security."
      },
      {
        "id": "FC_WR_13",
        "topic": "society",
        "term": "Underlying cause",
        "ipa": "/ˌʌn.dəˈlaɪ.ɪŋ kɔːz/",
        "def": "Nguyên nhân sâu xa, cốt lõi nằm bên dưới bề mặt.",
        "ex": "Poverty and lack of educational access are the underlying causes of urban crime."
      },
      {
        "id": "FC_WR_14",
        "topic": "education",
        "term": "Substantiate",
        "ipa": "/səbˈstæn.ʃi.eɪt/",
        "def": "Cung cấp chứng cứ để làm vững chắc thêm luận điểm.",
        "ex": "Writers must provide concrete empirical examples to substantiate theoretical claims."
      },
      {
        "id": "FC_WR_15",
        "topic": "education",
        "term": "Diverge",
        "ipa": "/daɪˈvɜːdʒ/",
        "def": "Phân kỳ, đi theo 2 hướng khác nhau (Task 1).",
        "ex": "The spending habits of urban and rural families began to diverge sharply after 2010."
      },
      {
        "id": "FC_WR_16",
        "topic": "education",
        "term": "Overriding priority",
        "ipa": "/ˌəʊ.vəˈraɪ.dɪŋ praɪˈɒr.ə.ti/",
        "def": "Ưu tiên tối thượng, quan trọng hơn mọi yếu tố khác.",
        "ex": "Ensuring national public health must remain the overriding priority during pandemics."
      },
      {
        "id": "FC_WR_17",
        "topic": "society",
        "term": "Disproportionately",
        "ipa": "/ˌdɪs.prəˈpɔː.ʃən.ət.li/",
        "def": "Một cách không tương xứng, dồn gánh nặng vào một nhóm.",
        "ex": "Economic recessions disproportionately impact low-income hourly workers."
      },
      {
        "id": "FC_WR_18",
        "topic": "technology",
        "term": "In tandem with",
        "ipa": "/ɪn ˈtæn.dəm wɪð/",
        "def": "Song song với, phối hợp đồng thời cùng.",
        "ex": "Solar installations must expand in tandem with grid-scale battery storage."
      },
      {
        "id": "FC_WR_19",
        "topic": "education",
        "term": "Indispensable",
        "ipa": "/ˌɪn.dɪˈspen.sə.bəl/",
        "def": "Không thể thiếu được, mang tính thiết yếu.",
        "ex": "Critical thinking skills are indispensable for students navigating the information age."
      },
      {
        "id": "FC_WR_20",
        "topic": "technology",
        "term": "Far-reaching implications",
        "ipa": "/ˌfɑːˈriː.tʃɪŋ ˌɪm.plɪˈkeɪ.ʃənz/",
        "def": "Những hệ quả sâu rộng, tác động đến nhiều lĩnh vực.",
        "ex": "The advent of generative artificial intelligence carries far-reaching implications for education."
      },
      {
        "id": "FC_WR_21",
        "topic": "urban",
        "term": "Demolished",
        "ipa": "/dɪˈmɒl.ɪʃt/",
        "def": "Bị phá dỡ hoàn toàn để xây công trình mới (Map Task 1).",
        "ex": "The derelict warehouses were demolished to make space for a waterfront park."
      },
      {
        "id": "FC_WR_22",
        "topic": "technology",
        "term": "Subsequently",
        "ipa": "/ˈsʌb.sɪ.kwənt.li/",
        "def": "Sau đó, tiếp theo đó trong một quy trình công nghiệp.",
        "ex": "The mixture is heated to 1000 degrees and subsequently cooled in water chambers."
      },
      {
        "id": "FC_WR_23",
        "topic": "society",
        "term": "Ethical obligation",
        "ipa": "/ˈeθ.ɪ.kəl ˌɒb.lɪˈɡeɪ.ʃən/",
        "def": "Nghĩa vụ đạo đức đối với cộng đồng và xã hội.",
        "ex": "Multinational corporations possess an ethical obligation to minimize plastic packaging."
      },
      {
        "id": "FC_WR_24",
        "topic": "education",
        "term": "Perseverance",
        "ipa": "/ˌpɜː.sɪˈvɪə.rəns/",
        "def": "Sự kiên trì bền bỉ vượt qua khó khăn để đạt mục tiêu.",
        "ex": "Perseverance in the face of academic setbacks is the hallmark of successful learners."
      },
      {
        "id": "FC_WR_25",
        "topic": "society",
        "term": "Assimilation",
        "ipa": "/əˌsɪm.ɪˈleɪ.ʃən/",
        "def": "Sự đồng hóa văn hóa của người nhập cư vào xã hội mới.",
        "ex": "Cultural assimilation should not necessitate the complete abandonment of indigenous traditions."
      },
      {
        "id": "FC_WR_26",
        "topic": "health",
        "term": "Sedentary lifestyle",
        "ipa": "/ˈsed.ən.tər.i ˈlaɪf.staɪl/",
        "def": "Lối sống thụ động ngồi nhiều, ít vận động thể chất.",
        "ex": "Combating the rise of sedentary lifestyles requires accessible public sports parks."
      },
      {
        "id": "FC_WR_27",
        "topic": "urban",
        "term": "Alleviate congestion",
        "ipa": "/əˈliː.vi.eɪt kənˈdʒes.tʃən/",
        "def": "Làm giảm bớt tình trạng ùn tắc giao thông đô thị.",
        "ex": "Expanding subway lines remains the most potent measure to alleviate roadway congestion."
      },
      {
        "id": "FC_WR_28",
        "topic": "education",
        "term": "Empirical evidence",
        "ipa": "/ɪmˈpɪr.ɪ.kəl ˈev.ɪ.dəns/",
        "def": "Bằng chứng thực nghiệm thu thập được từ quan sát khoa học.",
        "ex": "Essay arguments must be supported by empirical evidence rather than mere intuition."
      },
      {
        "id": "FC_WR_29",
        "topic": "environment",
        "term": "Carbon footprint",
        "ipa": "/ˌkɑː.bən ˈfʊt.prɪnt/",
        "def": "Dấu chân carbon, tổng lượng khí nhà kính phát thải do một cá nhân/tổ chức gây ra.",
        "ex": "Transitioning to a plant-based diet drastically reduces an individual's carbon footprint."
      },
      {
        "id": "FC_WR_30",
        "topic": "society",
        "term": "Catalytic factor",
        "ipa": "/ˌkæt.əˈlɪt.ɪk ˈfæk.tər/",
        "def": "Yếu tố đóng vai trò chất xúc tác thúc đẩy sự kiện diễn ra nhanh hơn.",
        "ex": "While luck may serve as a catalytic factor, sustained effort determines ultimate success."
      }
    ],
    "exams": {
      "4.0": [
        {
          "id": "W40_T1",
          "topic": "education",
          "topic_vi": "Cấu trúc Mô tả Số liệu",
          "title": "Writing 4.0 — Đề 1: Sentence Construction & Prepositions in Task 1",
          "title_vi": "Bài viết 4.0 (Đề 1): Cấu trúc Câu & Giới từ trong Task 1",
          "questions": [
            {
              "id": "W40_1_1",
              "band": "4.0",
              "type": "mcq",
              "text": "Which of the following sentences correctly describes an increase from 20% to 50%?",
              "options": {
                "A": "The percentage rose by 30% to reach 50% in 2020.",
                "B": "The percentage decreased from 20% down to 50% in 2020.",
                "C": "The percentage was 20% and then it went nothing in 2020.",
                "D": "The percentage reached at 50% by 20% in 2020."
              },
              "correct": "A",
              "distractorReasons": {
                "A": "Chính xác: 'rose by 30% to reach 50%' diễn đạt chuẩn xác mức tăng và đích đến.",
                "B": "Dùng sai động từ 'decreased'.",
                "C": "Ngữ pháp sai hoàn toàn.",
                "D": "Sai giới từ ('reached at')."
              },
              "socraticPrompt": "Khi một con số tăng từ 20% lên 50%, mức chênh lệch tăng thêm là bao nhiêu (rose by ...) và đích đến là bao nhiêu (to reach ...)?",
              "breakdown": {
                "concept": "Preposition accuracy",
                "steps": [
                  "Xác định chiều: Tăng",
                  "Tính chênh lệch: 30% (by 30%)",
                  "Mốc cuối: to 50%"
                ],
                "trap": "Nhầm giữa 'by' và 'to'."
              },
              "context": "Task 1 Data Description",
              "context_vi": "Mô tả số liệu Task 1",
              "passage": ""
            }
          ]
        },
        {
          "id": "W40_T2",
          "topic": "education",
          "topic_vi": "Từ nối Cơ bản Task 2",
          "title": "Writing 4.0 — Đề 2: Basic Paragraph Connectors in Task 2",
          "title_vi": "Bài viết 4.0 (Đề 2): Từ nối Đoạn văn Cơ bản trong Task 2",
          "questions": [
            {
              "id": "W40_2_1",
              "band": "4.0",
              "type": "mcq",
              "text": "Which transition word should be used to introduce a contrasting idea?",
              "options": {
                "A": "Furthermore",
                "B": "However",
                "C": "In addition",
                "D": "Similarly"
              },
              "correct": "B",
              "distractorReasons": {
                "A": "Dùng để bổ sung thông tin cùng chiều.",
                "B": "Chính xác: 'However' được dùng để giới thiệu ý tương phản hoặc phản biện.",
                "C": "Bổ sung thông tin.",
                "D": "So sánh tương đồng."
              },
              "socraticPrompt": "Từ nào sau đây thể hiện sự tương phản (nghĩa là 'tuy nhiên') giữa hai câu văn độc lập?",
              "breakdown": {
                "concept": "Transition words",
                "steps": [
                  "Nhận diện nhu cầu tương phản",
                  "Loại trừ từ bổ sung",
                  "Chọn However"
                ],
                "trap": "Nhầm lẫn giữa từ bổ sung và từ tương phản."
              },
              "context": "Task 2 Basic Cohesion",
              "context_vi": "Sử dụng từ nối học thuật cơ bản",
              "passage": ""
            }
          ]
        }
      ],
      "5.0": [
        {
          "id": "W50_T1",
          "topic": "education",
          "topic_vi": "Đoạn Tổng quan Task 1",
          "title": "Writing 5.0 — Đề 1: Task 1 Overview Formulation & Trend Categorization",
          "title_vi": "Bài viết 5.0 (Đề 1): Viết Đoạn Tổng quan & Phân loại Xu hướng Task 1",
          "questions": [
            {
              "id": "W50_1_1",
              "band": "5.0",
              "type": "mcq",
              "text": "What is the primary function of an 'Overview' paragraph in IELTS Writing Task 1?",
              "options": {
                "A": "To copy the exact wording of the prompt word-for-word",
                "B": "To highlight the most prominent trends, highest points, and major differences without listing every single figure",
                "C": "To explain the student's personal opinion about why the data changed",
                "D": "To calculate complex mathematical standard deviations"
              },
              "correct": "B",
              "distractorReasons": {
                "A": "Chép lại đề bài bị trừ điểm.",
                "B": "Chính xác: Overview tóm tắt các đặc điểm nổi bật nhất mà không cần nêu số liệu chi tiết.",
                "C": "Không đưa ý kiến cá nhân vào Task 1.",
                "D": "Không phải thi toán thống kê."
              },
              "socraticPrompt": "Mục tiêu của Overview là phân tích chi tiết mọi con số hay chỉ ra 1–2 xu hướng tổng thể bao quát nhất?",
              "breakdown": {
                "concept": "Task 1 Overview criteria",
                "steps": [
                  "Hiểu tiêu chí Task Achievement",
                  "Nhận diện vai trò Overview",
                  "Chọn B"
                ],
                "trap": "Nghĩ rằng phải chép thật nhiều số vào Overview."
              },
              "context": "Task 1 Academic Guidelines",
              "context_vi": "Quy chuẩn đoạn Overview Task 1",
              "passage": ""
            }
          ]
        },
        {
          "id": "W50_T2",
          "topic": "education",
          "topic_vi": "Mở bài & Luận điểm Task 2",
          "title": "Writing 5.0 — Đề 2: Task 2 Introduction & Thesis Statement Writing",
          "title_vi": "Bài viết 5.0 (Đề 2): Viết Mở bài & Câu Luận điểm Task 2",
          "questions": [
            {
              "id": "W50_2_1",
              "band": "5.0",
              "type": "mcq",
              "text": "What are the two mandatory components of an effective IELTS Writing Task 2 introduction?",
              "options": {
                "A": "A list of 10 vocabulary words and a personal story",
                "B": "A paraphrase of the prompt and a clear thesis statement stating the writer's position",
                "C": "A complete conclusion and a rhetorical question to the examiner",
                "D": "A bibliography of academic textbooks"
              },
              "correct": "B",
              "distractorReasons": {
                "A": "Không kể chuyện cá nhân.",
                "B": "Chính xác: Mở bài gồm 2 câu chuẩn mực: Paraphrase đề bài + Thesis statement nêu lập trường.",
                "C": "Kết luận viết ở cuối bài.",
                "D": "IELTS không yêu cầu danh mục tài liệu tham khảo."
              },
              "socraticPrompt": "Hai thành phần bắt buộc của một mở bài Task 2 chuẩn mực là gì (viết lại đề bài và nêu rõ quan điểm)?",
              "breakdown": {
                "concept": "Introduction structure",
                "steps": [
                  "Câu 1: Paraphrase",
                  "Câu 2: Thesis statement",
                  "Chọn B"
                ],
                "trap": "Viết mở bài quá dài dòng lê thê."
              },
              "context": "Task 2 Essay Introduction",
              "context_vi": "Cấu trúc 2 câu của mở bài Task 2",
              "passage": ""
            }
          ]
        }
      ],
      "5.5": [
        {
          "id": "W55_T1",
          "topic": "health",
          "topic_vi": "Cấu trúc Đoạn văn PEEL",
          "title": "Writing 5.5 — Đề 1: PEEL Cohesion: Sedentary Lifestyles & Health",
          "title_vi": "Bài viết 5.5 (Đề 1): Tính Mạch lạc PEEL: Lối sống Thụ động & Sức khỏe",
          "questions": [
            {
              "id": "W55_1_1",
              "band": "5.5",
              "type": "mcq",
              "text": "Select the most cohesive topic sentence for a paragraph discussing the health hazards of sedentary lifestyles:",
              "options": {
                "A": "Sitting down is bad and everyone sits on chairs all day long.",
                "B": "First and foremost, prolonged physical inactivity exerts demonstrably adverse effects on cardiovascular well-being.",
                "C": "My friends and I like to watch television for eight hours every weekend.",
                "D": "In conclusion, doctors are very smart people who work in hospitals."
              },
              "correct": "B",
              "distractorReasons": {
                "A": "Văn phong quá thô sơ.",
                "B": "Chính xác: Có liên từ học thuật, từ vựng chính xác và cấu trúc câu trang trọng.",
                "C": "Ví dụ cá nhân không phù hợp làm câu chủ đề.",
                "D": "Lạc đề hoàn toàn."
              },
              "socraticPrompt": "Một câu chủ đề học thuật chuẩn mực cần đảm bảo yếu tố nào: ngôn ngữ trang trọng và nêu bật luận điểm trung tâm?",
              "breakdown": {
                "concept": "Topic sentence formulation",
                "steps": [
                  "Loại trừ văn nói",
                  "Loại trừ ví dụ cá nhân",
                  "Chọn câu trang trọng B"
                ],
                "trap": "Chọn câu đơn giản vì nghĩ nó dễ hiểu."
              },
              "context": "Task 2 Paragraph Structure",
              "context_vi": "Xây dựng câu chủ đề học thuật",
              "passage": ""
            }
          ]
        },
        {
          "id": "W55_T2",
          "topic": "education",
          "topic_vi": "So sánh Đối tượng Task 1",
          "title": "Writing 5.5 — Đề 2: Comparing Categories: University Graduates by Gender",
          "title_vi": "Bài viết 5.5 (Đề 2): So sánh Nhóm Đối tượng: Tỷ lệ Tốt nghiệp theo Giới tính",
          "questions": [
            {
              "id": "W55_2_1",
              "band": "5.5",
              "type": "mcq",
              "text": "Which structure best compares female and male graduation rates (60% vs 40%) in a single sentence?",
              "options": {
                "A": "Female graduation rates were 60% and male graduation rates were 40% and it was big.",
                "B": "While 60% of female students completed tertiary degrees, the corresponding figure for their male counterparts stood at merely 40%.",
                "C": "Men and women graduated at 60% and 40% respectively with no differences.",
                "D": "Women are always smarter than men in every single university."
              },
              "correct": "B",
              "distractorReasons": {
                "A": "Văn phong lặp từ và quá đơn sơ.",
                "B": "Chính xác: Cấu trúc mệnh đề nhượng bộ 'While...', sử dụng 'corresponding figure' và 'counterparts' tránh lặp từ.",
                "C": "Mâu thuẫn: 60% và 40% có chênh lệch rõ ràng chứ không phải 'no differences'.",
                "D": "Suy diễn cảm tính, vi phạm tính khách quan học thuật."
              },
              "socraticPrompt": "Để so sánh hai đối tượng trong một câu ghép mà không bị lặp từ 'graduation rates', cụm từ thay thế nào được sử dụng?",
              "breakdown": {
                "concept": "Comparative complex sentence",
                "steps": [
                  "Dùng liên từ While so sánh tương phản",
                  "Thay lặp từ bằng 'corresponding figure'",
                  "Chọn B"
                ],
                "trap": "Chọn A vì nghĩ câu đơn giản ít sai ngữ pháp."
              },
              "context": "Task 1 Comparative Analysis",
              "context_vi": "So sánh đối tượng không lặp từ",
              "passage": ""
            }
          ]
        }
      ],
      "6.0": [
        {
          "id": "W60_T1",
          "topic": "education",
          "topic_vi": "Mục đích Giáo dục Đại học",
          "title": "Writing 6.0 — Đề 1: Higher Education: Job Skills vs Academic Knowledge",
          "title_vi": "Bài viết 6.0 (Đề 1): Giáo dục Đại học: Kỹ năng Việc làm vs Tri thức Học thuật",
          "questions": [
            {
              "id": "W60_1_1",
              "band": "6.0",
              "type": "essay",
              "text": "Task 2 Prompt: 'Some people think that universities should provide graduates with the knowledge and skills needed in the workplace. Others think that the true function of a university should be to give access to knowledge for its own sake, regardless of whether the course is useful to an employer.' Discuss both views and give your opinion.",
              "options": null,
              "correct": "balanced_essay",
              "distractorReasons": {
                "balanced_essay": "Yêu cầu: Phân tích cả 2 quan điểm (Thực dụng việc làm vs Khai phóng học thuật) và đưa ra lập trường rõ ràng.",
                "wrong": "Cần đảm bảo đủ 4 đoạn: Mở bài, Thân bài 1, Thân bài 2, Kết bài."
              },
              "socraticPrompt": "Bạn sẽ cân bằng giữa việc chuẩn bị cho thị trường lao động và việc bảo tồn tinh thần khai phóng học thuật như thế nào?",
              "breakdown": {
                "concept": "Discuss both views framework",
                "steps": [
                  "Phân tích đề 2 chiều",
                  "Lập dàn ý thân bài 1: Việc làm",
                  "Lập dàn ý thân bài 2: Tri thức tự thân",
                  "Kết luận"
                ],
                "trap": "Chỉ viết về 1 phía và quên mất phía còn lại."
              },
              "context": "Higher Education Debate",
              "context_vi": "Tranh luận về mục đích của đại học",
              "passage": ""
            }
          ]
        },
        {
          "id": "W60_T2",
          "topic": "environment",
          "topic_vi": "Tiêu thụ Thịt & Xu hướng Ăn uống",
          "title": "Writing 6.0 — Đề 2: Dynamic Line Graph: UK Meat Consumption (1980–2010)",
          "title_vi": "Bài viết 6.0 (Đề 2): Biểu đồ Đường Biến động: Tiêu thụ Thịt tại Anh (1980–2010)",
          "questions": [
            {
              "id": "W60_2_1",
              "band": "6.0",
              "type": "mcq",
              "text": "When beef consumption plunged from 220g to 100g while chicken soared from 100g to 250g, what is the best overview summary?",
              "options": {
                "A": "Beef was eaten by everybody and chicken was hated by people.",
                "B": "Overall, while beef consumption experienced a dramatic downward trajectory over the period, chicken exhibited a remarkable surge, overtaking beef to become the dominant meat by 2010.",
                "C": "All animals died in the UK between 1980 and 2010.",
                "D": "The numbers went up and down every single day."
              },
              "correct": "B",
              "distractorReasons": {
                "A": "Văn phong cảm tính phi học thuật.",
                "B": "Chính xác: Tóm tắt được 2 xu hướng đối nghịch và mốc giao thoa (overtaking) then chốt mà không cần liệt kê toàn bộ số liệu.",
                "C": "Hài hước, phi lý.",
                "D": "Không có dữ liệu theo ngày."
              },
              "socraticPrompt": "Điểm mấu chốt của Overview là nhận diện được sự hoán đổi vị trí (overtaking) giữa thịt gà và thịt bò qua thời gian?",
              "breakdown": {
                "concept": "Dynamic overview synthesis",
                "steps": [
                  "Xác định xu hướng thịt bò: giảm mạnh",
                  "Xác định xu hướng thịt gà: tăng vọt",
                  "Ghi nhận mốc hoán đổi: overtaking beef",
                  "Chọn B"
                ],
                "trap": "Liệt kê tất cả các con số vào Overview."
              },
              "context": "Task 1 Dynamic Graph",
              "context_vi": "Tổng quan biểu đồ đường xu hướng đối lập",
              "passage": ""
            }
          ]
        }
      ],
      "6.5": [
        {
          "id": "W65_T1",
          "topic": "technology",
          "topic_vi": "Quy trình Sản xuất Công nghiệp",
          "title": "Writing 6.5 — Đề 1: Task 1 Industrial Process: Brick Manufacturing",
          "title_vi": "Bài viết 6.5 (Đề 1): Quy trình Công nghiệp: Sản xuất Gạch Xây dựng",
          "questions": [
            {
              "id": "W65_1_1",
              "band": "6.5",
              "type": "mcq",
              "text": "When describing an industrial manufacturing process in Task 1, which grammatical voice should predominate?",
              "options": {
                "A": "First person active voice ('I mix the ingredients and then we heat them')",
                "B": "Passive voice ('The raw materials are crushed and subsequently transferred to a rotary kiln')",
                "C": "Imperative command voice ('Crush the stones and pour the water')",
                "D": "Future progressive tense ('They will be manufacturing the cement tomorrow')"
              },
              "correct": "B",
              "distractorReasons": {
                "A": "Không dùng đại từ nhân xưng 'I' hoặc 'we' trong quy trình khách quan.",
                "B": "Chính xác: Thể bị động (Passive voice) là quy chuẩn bắt buộc khi mô tả quy trình nhân tạo.",
                "C": "Câu mệnh lệnh chỉ dùng trong sách nấu ăn.",
                "D": "Dùng thì hiện tại đơn bị động."
              },
              "socraticPrompt": "Trong một quy trình công nghiệp, đối tượng nào quan trọng hơn: người làm hay vật liệu đang được xử lý?",
              "breakdown": {
                "concept": "Passive voice in process tasks",
                "steps": [
                  "Xác định dạng: Process nhân tạo",
                  "Chủ ngữ: vật liệu/sản phẩm",
                  "Dùng bị động: is/are + V3/ed"
                ],
                "trap": "Dùng thể chủ động khiến bài viết thiếu khách quan."
              },
              "context": "Task 1 Process Description",
              "context_vi": "Sử dụng thể bị động trong bài quy trình",
              "passage": ""
            }
          ]
        },
        {
          "id": "W65_T2",
          "topic": "society",
          "topic_vi": "Trách nhiệm Xã hội Doanh nghiệp",
          "title": "Writing 6.5 — Đề 2: Task 2 Corporate Social Responsibility vs Profit Maximization",
          "title_vi": "Bài viết 6.5 (Đề 2): Trách nhiệm Xã hội Doanh nghiệp vs Tối đa hóa Lợi nhuận",
          "questions": [
            {
              "id": "W65_2_1",
              "band": "6.5",
              "type": "essay",
              "text": "Task 2 Prompt: 'As well as making money, businesses also have social responsibilities. Do you agree or disagree?' (Ngọc Bách Writing).",
              "options": null,
              "correct": "csr_essay",
              "distractorReasons": {
                "csr_essay": "Yêu cầu: Khẳng định lợi nhuận là điều kiện cần để sinh tồn, nhưng trách nhiệm môi trường và cộng đồng là điều kiện đủ để phát triển bền vững.",
                "wrong": "Cần sử dụng từ vựng nâng cao: ethical obligation, corporate philanthropy, environmental externalities, sustainable commerce."
              },
              "socraticPrompt": "Nếu doanh nghiệp chỉ tối đa hóa lợi nhuận mà hủy hoại môi trường sống địa phương thì cái giá xã hội phải trả là gì?",
              "breakdown": {
                "concept": "CSR argumentative defense",
                "steps": [
                  "Thừa nhận vai trò lợi nhuận",
                  "Chứng minh trách nhiệm môi trường",
                  "Chứng minh phúc lợi người lao động",
                  "Kết luận"
                ],
                "trap": "Phủ nhận hoàn toàn vai trò của lợi nhuận một cách phi thực tế."
              },
              "context": "Business Ethics Debate",
              "context_vi": "Đạo đức kinh doanh và trách nhiệm xã hội",
              "passage": ""
            }
          ]
        }
      ],
      "7.0": [
        {
          "id": "W70_T1",
          "topic": "education",
          "topic_vi": "Triết học Thành công: May mắn vs Nỗ lực",
          "title": "Writing 7.0+ — Đề 1: Philosophical Thesis: Success as Luck vs Diligence",
          "title_vi": "Bài viết 7.0+ (Đề 1): Luận đề Triết học: Thành công do May mắn hay Kiên trì",
          "questions": [
            {
              "id": "W70_1_1",
              "band": "7.0",
              "type": "essay",
              "text": "Task 2 Prompt: 'Whether or not someone achieves their aims is mostly a question of luck. To what extent do you agree or disagree?' (Ngọc Bách Writing Task 2).",
              "options": null,
              "correct": "advanced_disagree_essay",
              "distractorReasons": {
                "advanced_disagree_essay": "Yêu cầu: Phản biện sâu sắc. Bác bỏ may mắn là yếu tố quyết định; chứng minh kiên trì, kỷ luật và chiến lược mới là nền tảng cốt lõi, may mắn chỉ là chất xúc tác ngẫu nhiên.",
                "wrong": "Cần sử dụng từ vựng nâng cao: serendipity, perseverance, diligence, catalytic factor."
              },
              "socraticPrompt": "May mắn có thể mở ra cơ hội, nhưng nếu thiếu sự rèn luyện bền bỉ thì một người có duy trì được thành tựu lâu dài?",
              "breakdown": {
                "concept": "Nuanced philosophical rebuttal",
                "steps": [
                  "Thừa nhận vai trò nhỏ của may mắn",
                  "Chứng minh vai trò quyết định của ý chí",
                  "Kết luận"
                ],
                "trap": "Phủ nhận 100% may mắn hoặc phó mặc cho số phận."
              },
              "context": "Philosophy of Success",
              "context_vi": "Luận bàn về may mắn và nỗ lực trong thành công",
              "passage": ""
            }
          ]
        },
        {
          "id": "W70_T2",
          "topic": "society",
          "topic_vi": "Đồng hóa Văn hóa vs Bảo tồn Bản sắc",
          "title": "Writing 7.0+ — Đề 2: Cultural Dilemma: Immigrant Assimilation vs Heritage Preservation",
          "title_vi": "Bài viết 7.0+ (Đề 2): Nghịch lý Văn hóa: Đồng hóa Người nhập cư vs Bảo tồn Bản sắc",
          "questions": [
            {
              "id": "W70_2_1",
              "band": "7.0",
              "type": "essay",
              "text": "Task 2 Prompt: 'Some believe that immigrants should abandon their cultural heritage and adopt the customs and traditions of their host nation. Others argue that multicultural diversity strengthens society. Discuss both views and give your opinion.'",
              "options": null,
              "correct": "multiculturalism_essay",
              "distractorReasons": {
                "multiculturalism_essay": "Yêu cầu: Phân tích sâu sắc sự khác biệt giữa tôn trọng luật pháp/ngôn ngữ nước sở tại (civic integration) và việc bảo tồn bản sắc văn hóa cội nguồn (cultural pluralism).",
                "wrong": "Cần sử dụng từ vựng học thuật: civic cohesion, cultural pluralism, social mosaic, xenophobia, intercultural dialogue."
              },
              "socraticPrompt": "Liệu một người có thể vừa là công dân gương mẫu tuân thủ pháp luật nước sở tại, vừa gìn giữ ngôn ngữ và truyền thống dân tộc của quê hương mình?",
              "breakdown": {
                "concept": "Multicultural dialectics",
                "steps": [
                  "Phân tích lập luận đồng hóa (social cohesion)",
                  "Phân tích giá trị đa văn hóa (diversity enrichment)",
                  "Đưa ra giải pháp hội nhập tích hợp"
                ],
                "trap": "Cực đoan hóa một phía dẫn đến bài ngoại hoặc chia rẽ xã hội."
              },
              "context": "Sociology of Migration",
              "context_vi": "Xã hội học về người nhập cư và đa văn hóa",
              "passage": ""
            }
          ]
        }
      ]
    }
  },
  "speaking": {
    "lessons": [
      {
        "id": "L_SP_1",
        "title_en": "Unit 1: Part 1 Fluency & Natural Expansion (A-R-E-A)",
        "title_vi": "Chuyên đề 1: Độ Trôi Chảy & Mở Rộng Câu Trả Lời Tự Nhiên (Part 1)",
        "band_target": "3.5 - 4.5",
        "topic": "education",
        "objectives": {
          "knowledge": "Mô hình A-R-E-A: Answer, Reason, Example, Alternative.",
          "ability": "Trả lời câu hỏi Part 1 trong độ dài lý tưởng 3–4 câu.",
          "behavior": "Duy trì giao tiếp bằng mắt và phát âm rõ âm cuối (/s/, /t/, /d/)."
        },
        "presentation": {
          "concepts": "Part 1 là màn khởi động hỏi về các chủ đề quen thuộc (quê hương, học tập, sở thích).",
          "rules": "Không bao giờ trả lời bằng một từ duy nhất (Yes/No).",
          "commonMistakes": [
            "Học thuộc lòng câu trả lời như học vẹt.",
            "Im lặng quá 3 giây khi suy nghĩ."
          ]
        },
        "practice": {
          "mechanical": "Luyện 5 câu mở đầu tự nhiên: 'Well, to be perfectly honest...', 'That's an interesting question...'",
          "meaningful": "Trả lời câu hỏi về thói quen học tập và thời gian rảnh rỗi của học sinh THPT.",
          "workedExample": {
            "prompt": "Examiner: 'Do you prefer studying alone or with friends?'",
            "steps": [
              "A: Personally speaking, I much prefer studying by myself.",
              "R: This is mainly because I can maintain absolute concentration.",
              "E: For instance, when preparing for intensive exams like IELTS, working in solitude helps me absorb vocabulary faster.",
              "A: However, if doing a group presentation, collaborating with peers is beneficial."
            ],
            "answer": "Câu trả lời mẫu 4 câu mượt mà theo công thức A-R-E-A."
          }
        },
        "production": "Ghi âm câu trả lời cho 3 câu hỏi Part 1 về 'Hometown & Living Space' và tự rà soát âm cuối."
      },
      {
        "id": "L_SP_2",
        "title_en": "Unit 2: Part 2 The PPF Storytelling Strategy (Past - Present - Future)",
        "title_vi": "Chuyên đề 2: Chiến Lược Kể Chuyện Quá Khứ - Hiện Tại - Tương Lai (Part 2)",
        "band_target": "4.5 - 5.5",
        "topic": "society",
        "objectives": {
          "knowledge": "Chiến lược PPF: Past (Quá khứ), Present (Hiện tại), Future (Tương lai).",
          "ability": "Tận dụng 1 phút chuẩn bị để vẽ sơ đồ từ khóa (Mind-mapping) thay vì viết thành cả câu.",
          "behavior": "Nói liên tục từ 1 phút 45 giây đến 2 phút cho đến khi giám khảo ngắt lời."
        },
        "presentation": {
          "concepts": "Part 2 yêu cầu độc thoại trong 2 phút về một thẻ bài (Cue Card).",
          "rules": "Sử dụng đa dạng các thì động từ (Past Simple, Past Continuous, Present Perfect, Future).",
          "commonMistakes": [
            "Nhìn chằm chằm vào giấy ghi chú và đọc đều đều.",
            "Dừng lại giữa chừng ở giây thứ 60 và nói 'That's all'."
          ]
        },
        "practice": {
          "mechanical": "Lập dàn ý 6 từ khóa trong 60 giây cho chủ đề: 'Describe a difficult decision you made'.",
          "meaningful": "Thực hành bài nói hoàn chỉnh về quyết định chọn khối thi hoặc chọn trường THPT.",
          "workedExample": {
            "prompt": "Cue Card: Describe a difficult decision that you made.",
            "steps": [
              "Past: Two years ago, when entering Grade 10, I had to choose between natural and social sciences...",
              "Present: Right now, looking back, I realize it was the right decision because it allows me to pursue English...",
              "Future: In the future, I plan to leverage this background to apply for scholarships."
            ],
            "answer": "Khung bài nói 2 phút liền mạch bao trùm 3 trục thời gian."
          }
        },
        "production": "Ghi âm bài nói 2 phút cho đề bài 'Describe a product you bought that you were very happy with'."
      },
      {
        "id": "L_SP_3",
        "title_en": "Unit 3: Part 3 Abstract Discussion & Socratic Depth",
        "title_vi": "Chuyên đề 3: Thảo luận Trừu tượng & Chiều sâu Socratic (Part 3)",
        "band_target": "5.5 - 6.5",
        "topic": "urban",
        "objectives": {
          "knowledge": "Cách nhìn nhận vấn đề đa chiều: Cá nhân vs Xã hội; Kinh tế vs Môi trường; Trẻ tuổi vs Cao tuổi.",
          "ability": "Sử dụng câu điều kiện phức hợp và mệnh đề nhượng bộ.",
          "behavior": "Không cá nhân hóa câu trả lời ('I think my mom...'); luôn khái quát lên tầm xã hội."
        },
        "presentation": {
          "concepts": "Part 3 là cuộc đàm đạo chuyên sâu 4–5 phút mở rộng từ chủ đề của Part 2.",
          "rules": "Luôn đưa ra ít nhất 2 góc nhìn đối trọng trước khi chốt lại kết luận.",
          "commonMistakes": [
            "Lặp lại các ví dụ về bản thân như trong Part 1.",
            "Đưa ra câu trả lời quá ngắn không phân tích nguyên nhân - hậu quả."
          ]
        },
        "practice": {
          "mechanical": "Chuyển đổi 5 câu từ góc nhìn cá nhân sang góc nhìn học thuật xã hội.",
          "meaningful": "Thảo luận về tác động của thương mại điện tử đối với các cửa hàng bán lẻ truyền thống.",
          "workedExample": {
            "prompt": "Examiner: 'Will online shopping completely replace physical stores?'",
            "steps": [
              "Vế 1: On the one hand, e-commerce platforms offer unparalleled convenience...",
              "Vế 2: On the other hand, brick-and-mortar stores provide tactile engagement and social experiences...",
              "Kết luận: Therefore, we will likely witness a hybrid retail ecosystem."
            ],
            "answer": "Câu trả lời phân tích đa chiều đạt chuẩn Band 7.5+."
          }
        },
        "production": "Thực hành trả lời 3 câu hỏi Part 3 về vai trò của truyền thông và quảng cáo đối với giới trẻ."
      },
      {
        "id": "L_SP_4",
        "title_en": "Unit 4: Pronunciation: Connected Speech & Intonation Dynamics",
        "title_vi": "Chuyên đề 4: Ngữ âm Nâng cao: Nối âm Tự nhiên & Động lực Ngữ điệu",
        "band_target": "5.5 - 6.5",
        "topic": "health",
        "objectives": {
          "knowledge": "Kỹ thuật nối phụ âm sang nguyên âm (Consonant-to-vowel linking), âm lướt /j/ và /w/, và biến đổi ngữ điệu (Rising/Falling intonation).",
          "ability": "Tránh phát âm đều đều như máy đọc (robotic monotone); nhấn mạnh từ mang trọng tâm ý nghĩa (nuclear stress).",
          "behavior": "Hít thở sâu trước khi bắt đầu bài nói 2 phút để giữ cột hơi ổn định."
        },
        "presentation": {
          "concepts": "Tiêu chí Pronunciation chiếm 25% tổng điểm. Giám khảo chấm dựa trên độ dễ hiểu và tính tự nhiên của ngữ điệu.",
          "rules": "Lên giọng ở cuối mệnh đề chưa hoàn tất và xuống giọng dứt khoát ở cuối câu trần thuật.",
          "commonMistakes": [
            "Nuốt mất âm đuôi `/s/`, `/t/`, `/ed/` khiến giám khảo không nhận ra thì ngữ pháp.",
            "Lên giọng ở tất cả các câu khiến người nghe cảm thấy thí sinh thiếu tự tin."
          ]
        },
        "practice": {
          "mechanical": "Luyện 10 cặp từ tối thiểu (minimal pairs: /iː/ vs /ɪ/, /θ/ vs /s/).",
          "meaningful": "Luyện tập ngữ điệu biểu cảm cho bài nói về chuyến đi du lịch ấn tượng.",
          "workedExample": {
            "prompt": "Phrase: 'It was an absolutely breathtaking experience.'",
            "steps": [
              "Nối âm: 'It was_an_absolutely...'",
              "Nhấn trọng âm cao vào: 'BREATHtaking'",
              "Hạ giọng chậm rãi ở: 'experience.'"
            ],
            "answer": "Phát âm tự nhiên chuẩn phong thái bản ngữ."
          }
        },
        "production": "Ghi âm 1 đoạn văn 1 phút áp dụng trọn vẹn kỹ thuật nối âm và ngữ điệu biểu cảm."
      },
      {
        "id": "L_SP_5",
        "title_en": "Unit 5: Lexical Resource: Natural Idiomatic Phrasing",
        "title_vi": "Chuyên đề 5: Vốn Từ vựng Nói: Thành ngữ Tự nhiên & Collocations Đắt giá",
        "band_target": "6.0 - 7.0+",
        "topic": "society",
        "objectives": {
          "knowledge": "Thành ngữ tự nhiên trong giao tiếp nói (e.g. over the moon, double-edged sword, recharge my batteries, in retrospect).",
          "ability": "Chèn thành ngữ một cách tự nhiên vào mạch cảm xúc, không tạo cảm giác gượng ép hoặc dịch thô từ tiếng Việt.",
          "behavior": "Chỉ dùng những thành ngữ mình thực sự hiểu rõ cách dùng và ngữ cảnh đi kèm."
        },
        "presentation": {
          "concepts": "Band 7.0+ Speaking yêu cầu sử dụng 'some less common and idiomatic vocabulary with some awareness of style and collocation'.",
          "rules": "Một bài nói Part 2 lý tưởng chỉ nên có 2–3 thành ngữ tự nhiên, không nên lạm dụng quá đà.",
          "commonMistakes": [
            "Dùng các thành ngữ lỗi thời như 'raining cats and dogs'.",
            "Dùng thành ngữ trang trọng quá mức trong câu hỏi đời thường của Part 1."
          ]
        },
        "practice": {
          "mechanical": "Ghép 10 thành ngữ thông dụng với ngữ cảnh sử dụng tương ứng trong Speaking.",
          "meaningful": "Áp dụng thành ngữ 'a stepping stone' và 'broaden my horizons' vào câu hỏi về du học.",
          "workedExample": {
            "prompt": "Examiner: 'Why do you want to study abroad?'",
            "steps": [
              "Dùng thành ngữ 1: 'First of all, living independently in a new culture will truly broaden my horizons.'",
              "Dùng thành ngữ 2: 'Furthermore, an international degree serves as an invaluable stepping stone for my future career.'"
            ],
            "answer": "Câu trả lời trôi chảy kết hợp thành ngữ đúng ngữ cảnh."
          }
        },
        "production": "Thực hành trả lời 3 câu hỏi Part 1 có lồng ghép ít nhất 2 thành ngữ tự nhiên."
      },
      {
        "id": "L_SP_6",
        "title_en": "Unit 6: Part 3 Dialectics: Socratic Philosophical Enquiry",
        "title_vi": "Chuyên đề 6: Biện chứng Part 3: Truy vấn Triết học & Tư duy Phản biện Socratic",
        "band_target": "6.5 - 7.5+",
        "topic": "education",
        "objectives": {
          "knowledge": "Kỹ thuật phản biện biện chứng (Dialectical evaluation): Thừa nhận phản đề (Thesis - Antithesis - Synthesis).",
          "ability": "Trả lời các câu hỏi trừu tượng về đạo đức, trí tuệ nhân tạo, hạnh phúc và tương lai nhân loại một cách điềm tĩnh, sâu sắc.",
          "behavior": "Sử dụng ngôn ngữ rào đón học thuật (From a philosophical standpoint, It is arguably true that)."
        },
        "presentation": {
          "concepts": "Part 3 ở cấp độ 7.5+ là nơi giám khảo kiểm tra xem thí sinh có tư duy của một nhà nghiên cứu độc lập hay không.",
          "rules": "Không bao giờ đưa ra câu trả lời trắng-đen một chiều (black-and-white thinking). Luôn chỉ ra tính hai mặt của vấn đề.",
          "commonMistakes": [
            "Khẳng định cực đoan một phía khiến giám khảo dễ dàng phản bác.",
            "Lúng túng im lặng khi gặp các câu hỏi triết học trừu tượng."
          ]
        },
        "practice": {
          "mechanical": "Thực hành công thức 3 bước Thesis - Antithesis - Synthesis cho 3 vấn đề đạo đức xã hội.",
          "meaningful": "Phân tích câu hỏi: 'Does relentless ambition prevent genuine contentment?'",
          "workedExample": {
            "prompt": "Ambition vs Contentment",
            "steps": [
              "Thesis: Ambition undeniably propels human civilization and personal achievements forward.",
              "Antithesis: However, perpetual striving can trap individuals in a 'hedonic treadmill' where they never feel satisfied.",
              "Synthesis: Consequently, true well-being requires a harmonious balance: having purposeful ambition while cultivating mindfulness."
            ],
            "answer": "Câu trả lời biện chứng triết học đạt Band 8.5."
          }
        },
        "production": "Ghi âm câu trả lời cho câu hỏi Part 3 về vai trò của Trí tuệ nhân tạo đối với sáng tạo nghệ thuật."
      }
    ],
    "flashcards": [
      {
        "id": "FC_SP_01",
        "topic": "education",
        "term": "To be perfectly honest",
        "ipa": "/tə bi ˈpɜː.fɪkt.li ˈɒn.ɪst/",
        "def": "Thành thật mà nói (Cụm từ tự nhiên mở đầu câu trả lời Speaking Part 1 & 3).",
        "ex": "To be perfectly honest, I'm not particularly keen on crowded tourist destinations."
      },
      {
        "id": "FC_SP_02",
        "topic": "technology",
        "term": "Unparalleled convenience",
        "ipa": "/ʌnˈpær.əl.eld kənˈviː.ni.əns/",
        "def": "Sự tiện lợi vô song, không gì sánh bằng.",
        "ex": "Mobile banking applications offer unparalleled convenience for daily transactions."
      },
      {
        "id": "FC_SP_03",
        "topic": "education",
        "term": "In retrospect",
        "ipa": "/ɪn ˈret.rə.spekt/",
        "def": "Khi nhìn lại quá khứ, hồi tưởng lại (Rất đắt giá trong Part 2).",
        "ex": "In retrospect, choosing to study IELTS early in high school was the best decision I ever made."
      },
      {
        "id": "FC_SP_04",
        "topic": "urban",
        "term": "Brick-and-mortar",
        "ipa": "/ˌbrɪk.ənˈmɔː.tər/",
        "def": "Cửa hàng truyền thống có mặt bằng thực tế (Đối lập với online store).",
        "ex": "Many brick-and-mortar bookshops have had to reinvent themselves as community cultural hubs."
      },
      {
        "id": "FC_SP_05",
        "topic": "urban",
        "term": "Tactile engagement",
        "ipa": "/ˈtæk.taɪl ɪnˈɡeɪdʒ.mənt/",
        "def": "Sự tương tác chạm/cảm nhận bằng xúc giác thực tế.",
        "ex": "Physical stores allow customers to experience tactile engagement with fabrics before buying."
      },
      {
        "id": "FC_SP_06",
        "topic": "education",
        "term": "Broaden my horizons",
        "ipa": "/ˈbrɔː.dən maɪ həˈraɪ.zənz/",
        "def": "Mở rộng tầm mắt, mở rộng vốn hiểu biết về thế giới.",
        "ex": "Traveling independently to foreign countries has truly helped broaden my horizons."
      },
      {
        "id": "FC_SP_07",
        "topic": "society",
        "term": "A double-edged sword",
        "ipa": "/ə ˌdʌb.əl.edʒd ˈsɔːd/",
        "def": "Con dao hai lưỡi (Vừa có lợi vừa có hại, dùng trong Part 3).",
        "ex": "Social media is undoubtedly a double-edged sword: it connects people but fuels anxiety."
      },
      {
        "id": "FC_SP_08",
        "topic": "health",
        "term": "Recharge my batteries",
        "ipa": "/riːˈtʃɑːdʒ maɪ ˈbæt.ər.iz/",
        "def": "Nạp lại năng lượng sau những giờ học căng thẳng.",
        "ex": "Going for a weekend bicycle ride in the countryside helps me recharge my batteries."
      },
      {
        "id": "FC_SP_09",
        "topic": "society",
        "term": "From a sociological standpoint",
        "ipa": "/frəm ə ˌsəʊ.si.əˈlɒdʒ.ɪ.kəl ˈstænd.pɔɪnt/",
        "def": "Dưới góc nhìn xã hội học (Cụm nâng tầm câu trả lời Part 3 lên Band 7.5+).",
        "ex": "From a sociological standpoint, urbanization drastically alters traditional family structures."
      },
      {
        "id": "FC_SP_10",
        "topic": "education",
        "term": "Intonation",
        "ipa": "/ˌɪn.təˈneɪ.ʃən/",
        "def": "Ngữ điệu lên xuống của giọng nói biểu thị cảm xúc và ý nghĩa câu.",
        "ex": "Varying your intonation prevents your speech from sounding robotic and monotonous."
      },
      {
        "id": "FC_SP_11",
        "topic": "education",
        "term": "Connected speech",
        "ipa": "/kəˈnek.tɪd spiːtʃ/",
        "def": "Hiện tượng nối âm tự nhiên giữa các từ trong lời nói.",
        "ex": "Mastering connected speech is essential for both listening comprehension and speaking naturalness."
      },
      {
        "id": "FC_SP_12",
        "topic": "education",
        "term": "Filler word",
        "ipa": "/ˈfɪl.ər wɜːd/",
        "def": "Từ đệm tự nhiên khi suy nghĩ (Well, Actually, You know).",
        "ex": "Use natural fillers sparingly to gather your thoughts without awkward silence."
      },
      {
        "id": "FC_SP_13",
        "topic": "education",
        "term": "Over the moon",
        "ipa": "/ˌəʊ.və ðə ˈmuːn/",
        "def": "Vui sướng ngập tràn (Thành ngữ diễn tả cảm xúc vui vẻ trong Part 2).",
        "ex": "When I received my admission letter, I was absolutely over the moon."
      },
      {
        "id": "FC_SP_14",
        "topic": "education",
        "term": "A stepping stone",
        "ipa": "/ə ˈstep.ɪŋ stəʊn/",
        "def": "Bàn đạp, bước đệm để tiến tới mục tiêu cao hơn.",
        "ex": "High school exams are merely a stepping stone toward university and career aspirations."
      },
      {
        "id": "FC_SP_15",
        "topic": "education",
        "term": "Fiercely competitive",
        "ipa": "/ˈfɪəs.li kəmˈpet.ə.tɪv/",
        "def": "Cạnh tranh khốc liệt (Collocation rất hay dùng cho thi cử, tuyển dụng).",
        "ex": "Gaining admission to top medical universities in Vietnam is fiercely competitive."
      },
      {
        "id": "FC_SP_16",
        "topic": "health",
        "term": "Cope with pressure",
        "ipa": "/kəʊp wɪð ˈpreʃ.ər/",
        "def": "Đương đầu và xử lý áp lực trong học tập hoặc công việc.",
        "ex": "Students need healthy emotional outlets to cope with exam pressure effectively."
      },
      {
        "id": "FC_SP_17",
        "topic": "education",
        "term": "Intrinsic motivation",
        "ipa": "/ɪnˈtrɪn.zɪk ˌməʊ.tɪˈveɪ.ʃən/",
        "def": "Động lực nội tại (Xuất phát từ đam mê bên trong).",
        "ex": "Long-term language mastery depends far more on intrinsic motivation than exam scores."
      },
      {
        "id": "FC_SP_18",
        "topic": "society",
        "term": "Nuanced perspective",
        "ipa": "/ˈnjuː.ɑːnst pəˈspek.tɪv/",
        "def": "Góc nhìn tinh tế, đa chiều, không phiến diện.",
        "ex": "Mature candidates present a nuanced perspective rather than viewing issues as black and white."
      },
      {
        "id": "FC_SP_19",
        "topic": "technology",
        "term": "In the foreseeable future",
        "ipa": "/ɪn ðə fɔːˈsiː.ə.bəl ˈfjuː.tʃər/",
        "def": "Trong tương lai gần có thể dự đoán được.",
        "ex": "Artificial intelligence will not completely replace human teachers in the foreseeable future."
      },
      {
        "id": "FC_SP_20",
        "topic": "society",
        "term": "Striking resemblance",
        "ipa": "/ˈstraɪ.kɪŋ rɪˈzem.bləns/",
        "def": "Sự giống nhau một cách đáng kinh ngạc (Dùng miêu tả người thân trong Part 2).",
        "ex": "My younger brother bears a striking resemblance to our grandfather in both looks and temperament."
      },
      {
        "id": "FC_SP_21",
        "topic": "environment",
        "term": "Biodegradable",
        "ipa": "/ˌbaɪ.əʊ.dɪˈɡreɪ.də.bəl/",
        "def": "Có thể phân hủy sinh học tự nhiên, thân thiện với môi trường.",
        "ex": "Consumers increasingly favor products packaged in biodegradable materials."
      },
      {
        "id": "FC_SP_22",
        "topic": "health",
        "term": "Mindfulness",
        "ipa": "/ˈmaɪnd.fəl.nəs/",
        "def": "Sự chánh niệm, năng lực an trú và nhận biết trọn vẹn trong hiện tại.",
        "ex": "Practicing mindfulness meditation helps reduce academic burnout among high school seniors."
      },
      {
        "id": "FC_SP_23",
        "topic": "technology",
        "term": "Technological leap",
        "ipa": "/ˌtek.nəˈlɒdʒ.ɪ.kəl liːp/",
        "def": "Bước nhảy vọt về mặt công nghệ.",
        "ex": "Generative AI represents a monumental technological leap across creative industries."
      },
      {
        "id": "FC_SP_24",
        "topic": "urban",
        "term": "Urban sprawl",
        "ipa": "/ˌɜː.bən ˈsprɔːl/",
        "def": "Sự mở rộng đô thị tràn lan không có quy hoạch chặt chẽ.",
        "ex": "Urban sprawl eats up fertile agricultural land around provincial capitals."
      },
      {
        "id": "FC_SP_25",
        "topic": "society",
        "term": "Civic engagement",
        "ipa": "/ˈsɪv.ɪk ɪnˈɡeɪdʒ.mənt/",
        "def": "Sự tham gia của công dân vào các hoạt động cộng đồng và xã hội.",
        "ex": "Youth volunteering fosters a strong sense of civic engagement."
      },
      {
        "id": "FC_SP_26",
        "topic": "education",
        "term": "Peer pressure",
        "ipa": "/ˈpɪə ˌpreʃ.ər/",
        "def": "Áp lực đồng trang lứa giữa các bạn bè cùng tuổi.",
        "ex": "Adolescents must learn to make autonomous decisions despite peer pressure."
      },
      {
        "id": "FC_SP_27",
        "topic": "health",
        "term": "Well-rounded",
        "ipa": "/ˌwel ˈraʊn.dɪd/",
        "def": "Phát triển toàn diện cả về trí tuệ, thể chất và tâm hồn.",
        "ex": "Schools should aim to produce well-rounded individuals rather than mere test-takers."
      },
      {
        "id": "FC_SP_28",
        "topic": "technology",
        "term": "Digital native",
        "ipa": "/ˌdɪdʒ.ɪ.təl ˈneɪ.tɪv/",
        "def": "Công dân sinh ra trong thời đại kỹ thuật số (thế hệ trẻ).",
        "ex": "Modern teenagers are digital natives who navigate complex software intuitively."
      },
      {
        "id": "FC_SP_29",
        "topic": "environment",
        "term": "Sustainable lifestyle",
        "ipa": "/səˈsteɪ.nə.bəl ˈlaɪf.staɪl/",
        "def": "Lối sống bền vững giảm thiểu rác thải và tiêu hao năng lượng.",
        "ex": "Adopting a sustainable lifestyle involves cycling and eliminating single-use plastics."
      },
      {
        "id": "FC_SP_30",
        "topic": "society",
        "term": "Cultural heritage",
        "ipa": "/ˈkʌl.tʃər.əl ˈher.ɪ.tɪdʒ/",
        "def": "Di sản văn hóa phi vật thể và vật thể của một dân tộc.",
        "ex": "Traditional folk festivals preserve the nation's precious cultural heritage."
      }
    ],
    "exams": {
      "4.0": [
        {
          "id": "S40_T1",
          "topic": "society",
          "topic_vi": "Quê hương & Nơi sinh sống",
          "title": "Speaking 4.0 — Đề 1: Part 1 Hometown & Living Environment (A-R-E-A)",
          "title_vi": "Bài nói 4.0 (Đề 1): Quê hương & Môi trường Sống (Công thức A-R-E-A)",
          "questions": [
            {
              "id": "S40_1_1",
              "band": "4.0",
              "type": "speech",
              "text": "Part 1 Question: 'Where is your hometown, and what do you like most about living there?'",
              "options": null,
              "correct": "hometown_intro",
              "distractorReasons": {
                "hometown_intro": "Tiêu chí: Nêu rõ vị trí quê hương, nêu 1 đặc điểm yêu thích và mở rộng 1 câu giải thích theo công thức A-R-E-A.",
                "wrong": "Tránh chỉ trả lời: 'I live in Hanoi. It is good.'"
              },
              "socraticPrompt": "Quê hương bạn ở đâu và nét đặc trưng đáng nhớ nhất về con người hoặc cảnh vật ở đó là gì?",
              "breakdown": {
                "concept": "A-R-E-A Expansion",
                "steps": [
                  "Nêu quê hương",
                  "Nêu lý do yêu thích",
                  "Thêm ví dụ"
                ],
                "trap": "Trả lời quá ngắn khiến giám khảo phải hỏi 'Why?'."
              },
              "context": "Speaking Part 1 Interview",
              "context_vi": "Phỏng vấn khởi động về quê hương",
              "passage": ""
            }
          ]
        },
        {
          "id": "S40_T2",
          "topic": "education",
          "topic_vi": "Môn học & Thời khóa biểu",
          "title": "Speaking 4.0 — Đề 2: Part 1 School Subjects & Daily Routines",
          "title_vi": "Bài nói 4.0 (Đề 2): Môn học Yêu thích & Sinh hoạt Hàng ngày",
          "questions": [
            {
              "id": "S40_2_1",
              "band": "4.0",
              "type": "speech",
              "text": "Part 1 Question: 'What was your favorite subject when you were in secondary school, and why?'",
              "options": null,
              "correct": "favorite_subject",
              "distractorReasons": {
                "favorite_subject": "Tiêu chí: Trả lời dùng thì quá khứ đơn chính xác (was/enjoyed), nêu rõ tên môn học và lý do yêu thích.",
                "wrong": "Cần tránh nhầm lẫn thì hiện tại và quá khứ khi nói về thời cấp 2."
              },
              "socraticPrompt": "Hồi học cấp 2, môn học nào đã truyền cảm hứng cho bạn nhiều nhất và thầy cô đã dạy môn đó như thế nào?",
              "breakdown": {
                "concept": "Past tense narrative in Part 1",
                "steps": [
                  "Xác định thì quá khứ: My favorite subject was...",
                  "Nêu lý do: Because the teacher made it fascinating...",
                  "Mở rộng 1 câu"
                ],
                "trap": "Dùng thì hiện tại đơn 'My favorite subject is...' khi đề hỏi về quá khứ."
              },
              "context": "Speaking Part 1 Interview",
              "context_vi": "Môn học yêu thích thời cấp 2",
              "passage": ""
            }
          ]
        }
      ],
      "5.0": [
        {
          "id": "S50_T1",
          "topic": "health",
          "topic_vi": "Sở thích & Giờ tan trường",
          "title": "Speaking 5.0 — Đề 1: Part 1 Hobbies, Leisure & After-School Habits",
          "title_vi": "Bài nói 5.0 (Đề 1): Sở thích, Giải trí & Thói quen Sau giờ học",
          "questions": [
            {
              "id": "S50_1_1",
              "band": "5.0",
              "type": "speech",
              "text": "Part 1 Question: 'How do you usually spend your free time after a long school day?'",
              "options": null,
              "correct": "free_time_routine",
              "distractorReasons": {
                "free_time_routine": "Tiêu chí: Sử dụng từ nối thời gian (Usually, Occasionally) và từ vựng giải trí lành mạnh.",
                "wrong": "Cần duy trì độ trôi chảy và phát âm rõ âm đuôi."
              },
              "socraticPrompt": "Sau giờ tan trường, hoạt động nào giúp bạn thư giãn đầu óc và nạp lại năng lượng hiệu quả nhất?",
              "breakdown": {
                "concept": "Daily routine description",
                "steps": [
                  "Nêu thói quen thường nhật",
                  "Giải thích tác dụng thư giãn",
                  "Kết nối cuối tuần"
                ],
                "trap": "Dùng lặp lại từ 'and then... and then...'."
              },
              "context": "Speaking Part 1 Interview",
              "context_vi": "Thói quen sinh hoạt và giải trí",
              "passage": ""
            }
          ]
        },
        {
          "id": "S50_T2",
          "topic": "education",
          "topic_vi": "Âm nhạc & Thư giãn",
          "title": "Speaking 5.0 — Đề 2: Part 1 Music Preferences & Emotional Well-being",
          "title_vi": "Bài nói 5.0 (Đề 2): Sở thích Âm nhạc & Cảm xúc Tinh thần",
          "questions": [
            {
              "id": "S50_2_1",
              "band": "5.0",
              "type": "speech",
              "text": "Part 1 Question: 'What genre of music do you find most relaxing when you feel stressed?'",
              "options": null,
              "correct": "music_relaxation",
              "distractorReasons": {
                "music_relaxation": "Tiêu chí: Nêu rõ thể loại nhạc (classical, acoustic, lo-fi), liên kết với tác dụng xoa dịu cảm xúc (soothe my mind, relieve tension).",
                "wrong": "Tránh câu trả lời chung chung: 'I like all music.'"
              },
              "socraticPrompt": "Thể loại âm nhạc nào giúp bạn lắng đọng tâm trí và giảm bớt căng thẳng thi cử?",
              "breakdown": {
                "concept": "Specific preference & emotional impact",
                "steps": [
                  "Nêu thể loại cụ thể",
                  "Dùng từ chỉ cảm xúc: calm, soothe",
                  "Thêm thói quen nghe nhạc khi học"
                ],
                "trap": "Nói 'I listen to music' mà không nêu thể loại cụ thể."
              },
              "context": "Speaking Part 1 Interview",
              "context_vi": "Âm nhạc và giảm căng thẳng",
              "passage": ""
            }
          ]
        }
      ],
      "5.5": [
        {
          "id": "S55_T1",
          "topic": "education",
          "topic_vi": "Quyết định Khó khăn",
          "title": "Speaking 5.5 — Đề 1: Part 2 Cue Card: A Difficult Decision You Made (Ngọc Bách)",
          "title_vi": "Bài nói 5.5 (Đề 1): Độc thoại Part 2: Quyết định Khó khăn Bạn đã Đưa ra",
          "questions": [
            {
              "id": "S55_1_1",
              "band": "5.5",
              "type": "speech",
              "text": "Part 2 Cue Card: 'Describe a difficult decision that you made. You should say: what the decision was, when you made it, why it was difficult, and explain how you felt after making the decision.' (Ngọc Bách Speaking).",
              "options": null,
              "correct": "cue_card_decision",
              "distractorReasons": {
                "cue_card_decision": "Tiêu chí: Nói liên tục 1.5 - 2 phút, áp dụng chiến lược PPF (Quá khứ - Hiện tại - Tương lai), sử dụng thì quá khứ đơn chính xác.",
                "wrong": "Không nên chỉ đọc lướt qua các câu hỏi gợi ý mà cần liên kết thành một câu chuyện có cảm xúc."
              },
              "socraticPrompt": "Quyết định đó là gì, bối cảnh lúc đó khó khăn ra sao và nó đã dạy cho bạn bài học gì về sự trưởng thành?",
              "breakdown": {
                "concept": "PPF Narrative Framework",
                "steps": [
                  "Mở đầu: Giới thiệu quyết định 2 năm trước",
                  "Thân bài: Phân tích 2 sự lựa chọn giằng co",
                  "Kết luận: Cảm xúc nhẹ nhõm và bài học"
                ],
                "trap": "Bị ngập ngừng quá lâu ở đoạn chuyển tiếp giữa quá khứ và hiện tại."
              },
              "context": "Speaking Part 2 Monologue",
              "context_vi": "Độc thoại 2 phút về quyết định khó khăn",
              "passage": ""
            }
          ]
        },
        {
          "id": "S55_T2",
          "topic": "environment",
          "topic_vi": "Địa điểm Ô nhiễm",
          "title": "Speaking 5.5 — Đề 2: Part 2 Cue Card: A Place Affected by Pollution",
          "title_vi": "Bài nói 5.5 (Đề 2): Độc thoại Part 2: Một Địa điểm Bị Ảnh hưởng bởi Ô nhiễm",
          "questions": [
            {
              "id": "S55_2_1",
              "band": "5.5",
              "type": "speech",
              "text": "Part 2 Cue Card: 'Describe a place you have visited that has been affected by pollution. You should say: where it is, when you visited it, what kind of pollution was there, and explain how you felt about it.' (Ngọc Bách Speaking).",
              "options": null,
              "correct": "cue_card_pollution",
              "distractorReasons": {
                "cue_card_pollution": "Tiêu chí: Miêu tả chi tiết dạng ô nhiễm (plastic waste, smog, water contamination), chia sẻ cảm xúc tiếc nuối và kêu gọi hành động bảo vệ môi trường.",
                "wrong": "Cần duy trì độ trôi chảy và sử dụng từ vựng môi trường chính xác."
              },
              "socraticPrompt": "Nơi đó là một bãi biển, dòng sông hay khu phố, và tình trạng rác thải/khói bụi ở đó đã khiến bạn cảm thấy xót xa ra sao?",
              "breakdown": {
                "concept": "Environmental sensory description",
                "steps": [
                  "Giới thiệu địa điểm và thời gian",
                  "Mô tả hình ảnh ô nhiễm",
                  "Nêu cảm xúc cá nhân và giải pháp"
                ],
                "trap": "Chỉ kể địa điểm du lịch mà quên mất phần trọng tâm là 'affected by pollution'."
              },
              "context": "Speaking Part 2 Monologue",
              "context_vi": "Độc thoại về địa điểm bị ô nhiễm",
              "passage": ""
            }
          ]
        }
      ],
      "6.0": [
        {
          "id": "S60_T1",
          "topic": "society",
          "topic_vi": "Áp lực Nghề nghiệp Giới trẻ",
          "title": "Speaking 6.0 — Đề 1: Part 3 Societal Decision Making: Generational Career Pressures",
          "title_vi": "Bài nói 6.0 (Đề 1): Thảo luận Part 3: Áp lực Chọn nghề Giữa Các Thế hệ",
          "questions": [
            {
              "id": "S60_1_1",
              "band": "6.0",
              "type": "speech",
              "text": "Part 3 Question: 'Do you think teenagers nowadays face more pressure when making career choices than their parents did in the past?'",
              "options": null,
              "correct": "career_pressure_comparison",
              "distractorReasons": {
                "career_pressure_comparison": "Tiêu chí: So sánh giữa 2 thế hệ (Thế hệ trước: ít lựa chọn nhưng thị trường ổn định; Thế hệ nay: bùng nổ công nghệ, nhiều ngã rẽ nhưng cạnh tranh khốc liệt).",
                "wrong": "Cần sử dụng các cấu trúc so sánh tương phản: In comparison with, Whereas, Previous generations."
              },
              "socraticPrompt": "Giới trẻ ngày nay đứng trước sự đa dạng ngành nghề nhưng lại chịu áp lực cạnh tranh toàn cầu ra sao so với thế hệ cha anh?",
              "breakdown": {
                "concept": "Generational comparison",
                "steps": [
                  "Nêu bối cảnh cha mẹ",
                  "Nêu bối cảnh số hóa",
                  "Kết luận"
                ],
                "trap": "Chỉ kể chuyện cá nhân của bản thân."
              },
              "context": "Speaking Part 3 Discussion",
              "context_vi": "Thảo luận so sánh áp lực chọn nghề giữa các thế hệ",
              "passage": ""
            }
          ]
        },
        {
          "id": "S60_T2",
          "topic": "technology",
          "topic_vi": "Lớp học Ảo vs Lớp học Thực",
          "title": "Speaking 6.0 — Đề 2: Part 3 Educational Tech: Virtual Classrooms vs Physical Schools",
          "title_vi": "Bài nói 6.0 (Đề 2): Thảo luận Part 3: Lớp học Trực tuyến vs Trường học Thực tế",
          "questions": [
            {
              "id": "S60_2_1",
              "band": "6.0",
              "type": "speech",
              "text": "Part 3 Question: 'Can online educational platforms ever completely replace the social and developmental role of traditional brick-and-mortar schools?'",
              "options": null,
              "correct": "online_vs_physical_schools",
              "distractorReasons": {
                "online_vs_physical_schools": "Tiêu chí: Phân tích tính ưu việt của công nghệ về mặt tiếp cận tri thức, nhưng khẳng định trường học thực tế là nơi không thể thay thế để rèn luyện kỹ năng xã hội, sự đồng cảm và kỷ luật tập thể.",
                "wrong": "Cần sử dụng từ vựng giáo dục: socialization, interpersonal skills, empathy, holistic development."
              },
              "socraticPrompt": "Mặc dù học online rất tiện lợi về mặt bài giảng, trường học truyền thống đóng vai trò thiết yếu nào trong việc dạy học sinh cách hòa nhập cộng đồng?",
              "breakdown": {
                "concept": "Educational technology dialectic",
                "steps": [
                  "Thừa nhận ưu thế tri thức của online",
                  "Khẳng định giá trị xã hội hóa của trường thực",
                  "Kết luận mô hình bổ trợ"
                ],
                "trap": "Đồng tình tuyệt đối rằng công nghệ sẽ xóa sổ hoàn toàn trường học."
              },
              "context": "Speaking Part 3 Discussion",
              "context_vi": "Thảo luận vai trò xã hội hóa của trường học",
              "passage": ""
            }
          ]
        }
      ],
      "6.5": [
        {
          "id": "S65_T1",
          "topic": "urban",
          "topic_vi": "Thương mại Điện tử & Gắn kết Cộng đồng",
          "title": "Speaking 6.5 — Đề 1: Part 3 Technology, Retail & Urban Social Fabric",
          "title_vi": "Bài nói 6.5 (Đề 1): Thảo luận Part 3: Thương mại Điện tử & Sự Gắn kết Cộng đồng",
          "questions": [
            {
              "id": "S65_1_1",
              "band": "6.5",
              "type": "speech",
              "text": "Part 3 Question: 'In what ways has the prevalence of online shopping altered the social fabric of traditional local communities?'",
              "options": null,
              "correct": "retail_social_fabric",
              "distractorReasons": {
                "retail_social_fabric": "Tiêu chí: Phân tích cả mặt tiện ích kinh tế và sự suy giảm tương tác mặt-đối-mặt (face-to-face interaction) giữa người dân xóm phố.",
                "wrong": "Cần sử dụng từ vựng nâng cao: social cohesion, interpersonal connections, sense of belonging, isolation."
              },
              "socraticPrompt": "Khi mọi người chỉ ngồi nhà đặt hàng qua điện thoại, không gian chợ truyền thống và sự gắn kết tình làng nghĩa xóm bị ảnh hưởng thế nào?",
              "breakdown": {
                "concept": "Sociological impact analysis",
                "steps": [
                  "Thừa nhận tiện ích",
                  "Chỉ ra sự suy giảm không gian công cộng",
                  "Đề xuất bảo tồn văn hóa"
                ],
                "trap": "Chỉ nói về khía cạnh giá rẻ và giao hàng nhanh."
              },
              "context": "Speaking Part 3 Discussion",
              "context_vi": "Tác động của mua sắm trực tuyến lên cộng đồng",
              "passage": ""
            }
          ]
        },
        {
          "id": "S65_T2",
          "topic": "society",
          "topic_vi": "Người Lớn tuổi Đáng Kính",
          "title": "Speaking 6.5 — Đề 2: Part 2 Cue Card: An Older Person in Your Community You Admire",
          "title_vi": "Bài nói 6.5 (Đề 2): Độc thoại Part 2: Một Người Lớn Tuổi Bạn Ngưỡng Mộ",
          "questions": [
            {
              "id": "S65_2_1",
              "band": "6.5",
              "type": "speech",
              "text": "Part 2 Cue Card: 'Describe a person (you know), much older than you, who you admire. You should say: who this person is, how you know them, what kind of person they are, and explain why you admire them.' (Ngọc Bách Speaking).",
              "options": null,
              "correct": "cue_card_older_person",
              "distractorReasons": {
                "cue_card_older_person": "Tiêu chí: Khắc họa tính cách sâu sắc (resilience, wisdom, benevolence), kể 1 câu chuyện kỷ niệm cụ thể và nêu bật tấm gương đạo đức cho bản thân noi theo.",
                "wrong": "Cần sử dụng từ vựng miêu tả tính cách nâng cao và ngữ điệu ấm áp, tự nhiên."
              },
              "socraticPrompt": "Người lớn tuổi đó là ai (ông bà, thầy cô, người hàng xóm), họ đã vượt qua thăng trầm cuộc đời như thế nào và đã truyền cho bạn bài học gì?",
              "breakdown": {
                "concept": "Character & legacy narrative",
                "steps": [
                  "Giới thiệu nhân vật và mối quan hệ",
                  "Khắc họa phẩm chất và trí tuệ",
                  "Kể 1 kỷ niệm truyền cảm hứng",
                  "Kết luận bài học"
                ],
                "trap": "Chỉ miêu tả ngoại hình mà không nói sâu về tính cách và lý do ngưỡng mộ."
              },
              "context": "Speaking Part 2 Monologue",
              "context_vi": "Độc thoại về người lớn tuổi đáng ngưỡng mộ",
              "passage": ""
            }
          ]
        }
      ],
      "7.0": [
        {
          "id": "S70_T1",
          "topic": "health",
          "topic_vi": "Triết học Khát vọng & An lạc",
          "title": "Speaking 7.0+ — Đề 1: Part 3 Philosophical Discourse: Ambition vs Contentment",
          "title_vi": "Bài nói 7.0+ (Đề 1): Thảo luận Part 3: Biện chứng Triết học về Khát vọng & An lạc",
          "questions": [
            {
              "id": "S70_1_1",
              "band": "7.0",
              "type": "speech",
              "text": "Part 3 Question: 'Some philosophers argue that relentless ambition prevents individuals from experiencing genuine contentment. To what extent do you align with this viewpoint?'",
              "options": null,
              "correct": "ambition_contentment_dialectic",
              "distractorReasons": {
                "ambition_contentment_dialectic": "Tiêu chí: Biện chứng sâu sắc giữa khát vọng vươn lên (ambition as a catalyst for growth) và năng lực an trú trong hiện tại (contentment & mindfulness).",
                "wrong": "Cần thể hiện độ trôi chảy tự nhiên, phong thái tự tin và ngữ điệu biểu cảm đa dạng."
              },
              "socraticPrompt": "Khát vọng thúc đẩy chúng ta tiến bộ, nhưng nếu không biết điểm dừng để trân trọng hiện tại thì con người có bao giờ thực sự hạnh phúc?",
              "breakdown": {
                "concept": "Dialectical philosophical evaluation",
                "steps": [
                  "Định nghĩa hai mặt của khát vọng",
                  "Phân tích trạng thái 'hedonic treadmill'",
                  "Đưa ra giải pháp cân bằng nội tâm"
                ],
                "trap": "Nói sáo rỗng hoặc phê phán tiêu cực người có hoài bão."
              },
              "context": "Speaking Part 3 Philosophical Enquiry",
              "context_vi": "Biện chứng giữa khát vọng và sự an lạc",
              "passage": ""
            }
          ]
        },
        {
          "id": "S70_T2",
          "topic": "technology",
          "topic_vi": "Trí tuệ Nhân tạo & Nghệ thuật",
          "title": "Speaking 7.0+ — Đề 2: Part 3 Epistemology: Artificial Intelligence in Art & Literature",
          "title_vi": "Bài nói 7.0+ (Đề 2): Thảo luận Part 3: Trí tuệ Nhân tạo trong Nghệ thuật & Văn học",
          "questions": [
            {
              "id": "S70_2_1",
              "band": "7.0",
              "type": "speech",
              "text": "Part 3 Question: 'Can computational algorithms that generate poetry and paintings ever possess genuine artistic consciousness, or are they merely sophisticated mimics of human suffering?'",
              "options": null,
              "correct": "ai_art_consciousness",
              "distractorReasons": {
                "ai_art_consciousness": "Tiêu chí: Phân biệt rõ rệt giữa năng lực mô phỏng cú pháp/màu sắc (syntactic pattern generation) và trải nghiệm bản thể học về nỗi đau, tình yêu và cái chết của con người (phenomenological human experience).",
                "wrong": "Cần sử dụng ngôn ngữ triết học: aesthetic depth, emotional resonance, syntactic mimicry, existential vulnerability."
              },
              "socraticPrompt": "Một cỗ máy có thể xâu chuỗi hàng triệu vần thơ hoàn hảo, nhưng nếu nó không có trái tim biết đau đớn trước cái chết thì tác phẩm đó có được coi là nghệ thuật đích thực?",
              "breakdown": {
                "concept": "Aesthetic philosophy & AI limits",
                "steps": [
                  "Thừa nhận sự xuất sắc về mặt kỹ thuật của AI",
                  "Chỉ ra ranh giới hiện sinh: thiếu vắng nỗi đau con người",
                  "Kết luận bản chất nghệ thuật"
                ],
                "trap": "Đồng nhất kỹ thuật vẽ đẹp với linh hồn nghệ thuật."
              },
              "context": "Speaking Part 3 Aesthetics Enquiry",
              "context_vi": "Bản chất nghệ thuật trong kỷ nguyên AI",
              "passage": ""
            }
          ]
        }
      ]
    }
  }
};
