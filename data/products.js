const PRODUCTS = [
    {   id: '1', 
        name: 'Thanh Gươm Diệt Quỷ',
        nametag: 'Kimetsu no Yaiba - Infinity Train',
        trailer: 'https://www.youtube.com/watch?v=oJf81IYInc8',
        daoDien:'Đang Cập Nhật',
        quocGia: 'Nhật Bản',
        nam: '2020',
        cotTruyen: 'Thanh gươm diệt quỷ hay còn được biết đến với tên Demon Slayer: Kimetsu no Yaiba là một bộ truyện tranh do Gotōge Koyoharu sáng tác và minh hoạ. Truyện kể về hành trình trở thành kiếm sĩ diệt quỷ của thiếu niên Kamado Tanjirō sau khi gia đình cậu bị quỷ sát hại và em gái Nezuko của cậu bị biến thành quỷ.',
        ngonNgu: 'Phụ đề việt',
        theLoai: 'Hài Hước, Hành Động, Hoạt Hình, Phiêu Lưu, Phim Bộ, Thần Thoại',
        categoryId:'1', 
        image: 'https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa6447e2a12fa2_chuyen-tau-vo-tan-1.jpg', 
        image1: 'https://image.thanhnien.vn/1200x630/Uploaded/2022/ygtmjz/2020_11_24/thanh_guom_zfjf.jpg',
        isFav: true, isBrand: true, isSale: false
    },

    {   id: '2', 
        name: 'Học Viện Anh Hùng',
        nametag: 'My Hero Academia',
        trailer: 'https://www.youtube.com/watch?v=PheMbfxCm-E',
        daoDien:'Đang Cập Nhật',
        quocGia: 'Nhật Bản',
        nam: '2021',
        cotTruyen: 'Anime Boku no Hero Academia là bộ phim xoay quanh Midoriya Izuku và con đường cậu trở thành siêu anh hùng mạnh nhất từ trước đến nay. Tuy nhiên, quá trình này không hề dễ dàng với một cậu nhóc sinh không có một chút siêu năng lực sống trong một thế giới ai cũng sở hữu năng lực đặc biệt.',
        ngonNgu: 'Phụ đề việt',
        theLoai: 'Hành Động',
          
        categoryId:'1', 
        image: 'https://static.247phim.com/160223/conversions/6008ffd643fd9_hvah-s1-1-435_627.jpg', 
        image1: 'https://static2.vieon.vn/vieplay-image/carousel_web_v4/2021/05/14/vitjn62d_1920x1080-hocvienanhhung2_1920_1080.jpg',
        isFav: true, isBrand: false, isSale: true
    },
 
    {   id: '3', 
        name: 'Đấu Trường Ảo',
        nametag: 'READY PLAYER ONE',
        trailer: 'https://www.youtube.com/watch?v=FeX5YONWKA0',
        daoDien:'Steven Spielberg',
        quocGia: 'Mỹ',
        nam: '2018',
        cotTruyen: 'Phim Đấu Trường Ảo, Ready Player One (2018) : Phim Đấu Trường Ảo lấy bối cảnh năm 2044, khi người sáng lập ra Oasis - một tựa game online, mất mạng. Khi đó, ông thách thức tất cả những người chơi Oasis đi tìm Easter Eggs - Trứng phục sinh. Phần thưởng dành cho người chiến thắng là những tài sản vô cùng quý báu mà ông để lại. Một chàng trai mang tên Wade Watts đã tìm ra được những gợi ý đầu tiên trong cuộc tìm kiếm và bắt đầu hành trình của mình.',
        ngonNgu: 'Phụ đề việt',
        theLoai: 'Hành Động ,Phiêu Lưu, Viễn Tưởng',
          
        categoryId:'5', 
        image: 'https://upload.wikimedia.org/wikipedia/vi/3/3b/%C4%90%E1%BA%A5u_tr%C6%B0%E1%BB%9Dng_%E1%BA%A3o_2018.jpg', 
        image1: 'https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa6478ffa12f9c_dau-truong-ao-1.jpg',
        isFav: true, isBrand: true, isSale: false
    },

    {   id: '4', 
        name: 'Biệt Đội Cảm Tử',
        nametag: 'Suicide Squad',
        trailer: 'https://www.youtube.com/watch?v=ht7hkZ2mZRo',
        daoDien:'David Ayer',
        quocGia: 'Mỹ',
        nam: '2016',
        cotTruyen: 'Một nhóm những kẻ côn đồ tinh quái được tập hợp bởi cơ quan bí mật của chính phủ (A.R.G.U.S). Họ được giao thực hiện những nhiệm vụ nguy hiểm nhằm nhận được sự khoan hồng và cứu thế giới khỏi mối đe doạ bí ẩn',
        ngonNgu: 'Phụ đề việt',
        theLoai: 'Hành Động',
          
        categoryId:'1', 
        image: 'https://upload.wikimedia.org/wikipedia/vi/1/16/Bi%E1%BB%87t_%C4%91%E1%BB%99i_c%E1%BA%A3m_t%E1%BB%AD.jpg', 
        image1: 'https://chonthuonghieu.com/wp-content/uploads/2021/07/The-Suicide-Squad.jpg',
        isFav: true, isBrand: false, isSale: true
    },
 
    {   id: '5', 
        name: 'Nữ Thần Chiến Binh',
        nametag: 'WONDER WOMAN 1984',
        trailer: 'https://www.youtube.com/watch?v=Vk-gqL3c5qU',
        daoDien:'Patty Jenkins',
        quocGia: 'Mỹ',
        nam: '2017',
        cotTruyen: 'Nữ Thần Chiến Binh 1984 - Wonder Woman 1984 kể về người phụ nữ Diana Prince một chiến binh, đầy tài giỏi và dũng cảm. Cô sẵn sàng đứng lên chiến đấu vì hòa bình của thế giới. Vào năm 80 cuộc chiến tranh lạnh của Mỹ và Liên Xô trở nên đầy căn thẳng, khốc liệt hơn, và sự xuất hiện của Cheetah khiến mọi chuyện trở nên nguy hiểm và đáng sợ hơn rất nhiều. Cheetah đang muốn thực hiện một âm mưu phá hủy thế giới, Diana đành phải làm mọi cách và sử dụng kỹ năng chiến đấu của mình ngăn chặn cuộc âm mưu này.',
        ngonNgu: 'Phụ đề việt',
        theLoai: 'Hành Động, Viễn Tưởng',
          
        categoryId:'1', 
        image: 'https://upload.wikimedia.org/wikipedia/vi/e/ed/Wonder_Woman_%282017_film%29.jpg', 
        image1: 'https://thegioidienanh.vn/stores/news_dataimages/kimanh/062017/27/18/0811_MV5BM2RlOThkZWEtM2RkMi00MzllLThkMzktNWYyYThiOTQ3MjdhXkEyXkFqcGdeQXVyNjUwNzk3NDc._V1_.jpg',
        isFav: true, isBrand: true, isSale: false
    },

    {   id: '6', 
        name: 'Alita: Thiên Thần Chiến Binh',
        nametag: 'ALITA: BATTLE ANGEL',
        trailer: 'https://www.youtube.com/watch?v=sx9dsNzIdGw',
        daoDien:'Robert Rodriguez',
        quocGia: 'Âu Mỹ',
        nam: '2019',
        ngonNgu: 'Phụ đề việt',
        theLoai: 'Hành Động, Viễn Tưởng, Phiêu Lưu, Chiến Tranh',
          
        categoryId:'5', 
        image: 'https://upload.wikimedia.org/wikipedia/vi/d/d2/Alita_Thi%C3%AAn_th%E1%BA%A7n_chi%E1%BA%BFn_binh_%28%C3%A1p_ph%C3%ADch_2019%29.jpg', 
        image1: 'https://cdnimg.vietnamplus.vn/t1200/Uploaded/pcfo/2019_02_22/2202_alitabattleangel.jpg',
        cotTruyen: 'Alita: Thiên Thần Chiến Binh Alita được ví như một thần chết đến từ địa ngục vì những khả năng vượt qua mọi giới hạn mà cô sở hữu. Cô được tìm thấy bởi Tiến sĩ Ido và không thể nhớ mình là ai hay từ đâu tới. Để có thể tìm ra sự thật, Atila phải dấn thân vào những cuộc chiến đấu nảy lửa.',
        isFav: true, isBrand: false, isSale: false
    },

    {   id: '7', 
        name: 'Quái xế Baby',
        nametag: 'Baby Driver ',
        trailer: 'https://www.youtube.com/watch?v=SM9YGJ5If-Y',
        daoDien:'Edgar Wright',
        quocGia: 'Âu Mỹ',
        nam: '2017',
        ngonNgu: 'Phụ đề việt',
        theLoai: 'Hành Động, Hài Hước',
          
        categoryId:'1', 
        image: 'https://upload.wikimedia.org/wikipedia/vi/8/8e/Baby_Driver_poster.jpg', 
        image1: 'https://rapchieuphim.com/photos/2/baby-driver/quai-xe-baby-mot-sieu-pham-hanh-dong-thuc-su-co-nao-4.jpg',
        cotTruyen: 'Phim Quái Xế Baby - Baby Driver (2017) Nội dung xoay quanh chàng tài xế tội phạm yêu âm nhạc thực hiện phi vụ cướp nhà băng cùng đồng bọn. Baby Driver là phép cộng hoàn hảo của một siêu phẩm hài hành động không thể bỏ lỡ trong năm 2017.',
        isFav: true, isBrand: true, isSale: true
    },
    
    {   id: '8', 
        name: 'Kẻ Đâm Lén',
        nametag: 'Knives Out',
        trailer: 'https://www.youtube.com/watch?v=oJf81IYInc8',
        daoDien:'Rian Johnson',
        quocGia: 'Âu Mỹ',
        nam: '2019',
        ngonNgu: 'Phụ đề việt',
        theLoai: 'Trinh Thám',
          
        categoryId:'2', 
        image: 'https://upload.wikimedia.org/wikipedia/vi/d/d2/%C3%81p_ph%C3%ADch_K%E1%BA%BB_%C4%91%C3%A2m_l%C3%A9n.jpg', 
        image1: 'https://i.ytimg.com/vi/PdHlnVZV6Gc/maxresdefault.jpg',
        cotTruyen: 'Kẻ Đâm Lén là bộ phim kể về nhân dịp sinh nhật lần thứ 85 của mình, tiểu thuyết gia trinh thám nổi tiếng Harlan Thombrey đã tổ chức một buổi tiệc với đông đủ các thành viên trong gia đình. Tuy nhiên, ông Harlan bất ngờ qua đời ngay trong ngày hôm đấy. Thám tử Benoit Blanc được cử đến để điều tra vụ án và tất cả mọi người trong gia đình đều trở thành nghi phạm. Vậy trong ngôi nhà nhiều thế hệ này, ai mới chính là Kẻ Đâm Lén?',
        isFav: true, isBrand: false, isSale: true
    },

    {   id: '9', 
        name: 'Cô Gái Trên Tàu',
        nametag: 'The Girl on the Train',
        trailer: 'https://www.youtube.com/watch?v=5xABUJtpQUk',
        daoDien:'Tate Taylor',
        quocGia: 'Mỹ',
        nam: '2016',
        ngonNgu: 'Phụ đề việt',
        theLoai: 'Trinh Thám',
          
        categoryId:'2', 
        image: 'https://znews-photo.zadn.vn/w660/Uploaded/xbhunku/2017_03_02/Main_Poster_1__Co_Gai_Tren_Tau.jpg', 
        image1: 'https://znews-photo.zadn.vn/w660/Uploaded/xbhunku/2017_03_02/002.jpg',
        cotTruyen: 'Nhân vật chính của câu chuyện là Rachel Watson. Cô là một người lái tàu, hàng ngày cô đưa mọi người di chuyển trên con tàu của mình và ngắm nhìn những ánh đèn ấm áp nơi ngoại ô hay cảm nhận sự hạnh phúc của các đôi vợ chồng. Đối với Rachel cuộc sống của họ thật hoàn hảo, chẳng giống như cuộc sống mà cô đã mất',
        isFav: true, isBrand: true, isSale: false
    },
 
    {   id: '10', 
        name: 'Lần Theo Dấu Vết',
        nametag: 'Prisoners',
        trailer: 'hhttps://www.youtube.com/watch?v=wCjy-EtBVk8',
        daoDien:'Denis Villeneuve',
        quocGia: 'Mỹ',
        nam: '2013',
        ngonNgu: 'Phụ đề việt',
        theLoai: 'Trinh Thám',
          
        categoryId:'2', 
        image: 'https://upload.wikimedia.org/wikipedia/vi/thumb/c/c2/L%E1%BA%A7n_theo_d%E1%BA%A5u_v%E1%BA%BFt_poster.jpg/220px-L%E1%BA%A7n_theo_d%E1%BA%A5u_v%E1%BA%BFt_poster.jpg', 
        image1: 'http://phimchieurap.gdy.vn/wp-content/uploads/2020/12/lantheodauvet2013prisoners.jpg',
        cotTruyen: 'Kể về một người thợ mộc ở một thị trấn nhỏ, tên là Keller Dover (do Hugh Jackman thủ vai). Sau khi đứa con gái sáu tuổi cùng với người bạn thân nhất của mình bị bắt cóc vào ngày Lễ Tạ Ơn, Dover đối đầu với thám tử Loki (doJake Gyllenhaal thủ vai), một thám tử trẻ tuổi và ngông nghênh chịu trách nhiệm điều tra vụ này. Kelly Dover phải đối mặt với cơn ác mộng tồi tệ nhất của bậc làm cha mẹ, khi mà mỗi phút trôi qua, sự nguy hiểm đối với con gái của mình càng tăng.',
        isFav: true, isBrand: false, isSale: true
    },

    {   id: '11', 
        name: 'Tội Ác Ngủ Say',
        nametag: 'Go To Sleep',
        trailer: 'https://www.youtube.com/watch?v=F_PWVFOzPLI',
        daoDien:'Rowan Joffe',
        quocGia: 'Anh',
        nam: '2014',
        ngonNgu: 'Phụ đề việt',
        theLoai: 'Trinh Thám',
          
        categoryId:'2', 
        image: 'https://upload.wikimedia.org/wikipedia/vi/3/35/Poster_phim_T%E1%BB%99i_%C3%A1c_ng%E1%BB%A7_say_2014.jpg', 
        image: 'https://image.tmdb.org/t/p/w1280//Qf366kUqyfGkB7Q3vqlB8I0VIR.jpg',
        cotTruyen: 'Tội Ác Ngủ Say kể về Christine Lucas là một phụ nữ đã bị mất đi trí nhớ sau một vụ tấn công đầy bạo lực nhiều năm về trước. Mỗi ngày thức dậy với Christine là một ngày đầy ắp những hoang mang khi cô chỉ nhớ được những việc xảy ra trong vòng 24 giờ hoặc trước khi cô trôi vào một giấc ngủ sâu. Cuộc hành trình đi tìm lại những ngày hôm qua để tố cáo kẻ thủ ác đã hãm hại cô không gớm tay có được sự trợ giúp của người chồng và vị bác sĩ điều trị cho Christine. Nhưng rồi một ngày cô bàng hoàng nhận ra rằng, người duy nhất cô có thể tin tưởng là không ai khác ngoài chính bản thân mình…',
        isFav: true, isBrand: true, isSale: false
    },
 
    {   id: '12', 
        name: 'Số 23 Bí Ẩn',
        nametag: 'The Number 23 ',
        trailer: 'https://www.youtube.com/watch?v=kxfPfrP8gjc',
        daoDien:'Joel Schumacher',
        quocGia: 'Mỹ',
        nam: '2014',
        ngonNgu: 'Phụ đề việt',
        theLoai: 'Trinh Thám',
          
        categoryId:'2', 
        image: 'https://afamilycdn.com/Images/Uploaded/Share/2009/04/09/2005370095024320393rs.jpg', 
        image1: 'http://1.bp.blogspot.com/-mmlNbNsY7A0/VC1XaW_oUeI/AAAAAAAATNM/3Qn37c_LD0c/s1600/The-Number-23-2007-1.jpg',
        cotTruyen: 'Trong phim Số 23 Bí Ẩn, Walter Sparrow là nhân viên bắt chó chạy rông với cô vợ yêu chồng và cậu con trai ngoan ngoãn. Xem phim này bạn sẽ thấy anh có một cuộc sống phẳng lặng và yên bình cho tới khi anh phát hiện ra một cuốn tiểu thuyết kỳ lạ,',
        isFav: true, isBrand: false, isSale: false
    },

    {   id: '13', 
        name: 'Truy Lùng Siêu Trộm',
        nametag: 'COLD EYES',
        trailer: 'https://www.youtube.com/watch?v=3cck8Mzv5FY',
        daoDien:'Byung-seo Kim',
        quocGia: 'Hàn Quốc',
        nam: '2013',
        ngonNgu: 'Phụ đề việt',
        theLoai: 'Trinh Thám',
          
        categoryId:'2', 
        image: 'https://static2.vieon.vn/vieplay-image/poster_v4/2021/01/05/j0ctz1zk_truy-lung-sieu-trom_vertical-thumbnail-png_360_534.jpg', 
        image1: 'https://static.fptplay.net/static/img/share/video/19_11_2020/united19-11-2020_07g46-17.jpg',
        cotTruyen: 'Cold Eyes sở hữu tựa đề Việt là Truy Lùng Siêu Trộm, là một phim thuộc thể dòng hành động hình sự của điện ảnh Hàn Quốc được công chiếu vào năm 2013. Phim được chỉ đạo nội dung bởi cặp đôi đạo diễn Ui-seok Jo và Byung-seo Kim và là một phiên bản khiến lại của bộ phim Hồng Kông Eye in the Sky, cùng sự tham gia của dàn diễn viên đình đám như Hyo-ju Han, Kyung Jin, Woo-sung Jung, Dong-Hwi Lee,…',
        isFav: true, isBrand: true, isSale: true
    },

    {   id: '14', 
        name: 'Dont Listen',
        nametag: 'Dont Listen',
        trailer: 'https://www.youtube.com/watch?v=TYDBwdLFU7I',
        daoDien:'Angel Gómez Hernández',
        quocGia: 'Nga',
        nam: '2020',
        ngonNgu: 'Phụ đề việt',
        theLoai: 'Kinh Dị',
          
        categoryId:'3', 
        image: 'https://m.media-amazon.com/images/M/MV5BMmM5MGUzZTctNTQzZC00NGFjLWI4ZDYtZWRhMWY5Zjk3YTU2XkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_.jpg', 
        image1: 'https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa648445a12f91_voces-1.jpg',
        cotTruyen: 'Không phải bộ phim kinh dị nào cũng cần những cảnh giật gân, máu me rợn người. Bộ phim Đừng nghe - Dont Listen (Voces) là bộ phim mới nhất của Netflix trong loạt các phim được công chiếu trên kênh trực tuyến mà không có quá nhiều sự phô trương. ',
        isFav: true, isBrand: false, isSale: true
    },

    {   id: '15', 
        name: 'Đảo Kinh Hoàng',
        nametag: 'FANTASY ISLAND',
        trailer: 'https://www.youtube.com/watch?v=VQLzBHx2CUk',
        daoDien:'Jeff Wadlow',
        quocGia: 'Mỹ',
        nam: '2020',
        ngonNgu: 'Phụ đề việt',
        theLoai: 'Kinh Dị',
          
        categoryId:'3', 
        image: 'https://upload.wikimedia.org/wikipedia/vi/7/7e/Fantasy_Island_poster.jpg', 
        image1: 'https://ghienreview.com/wp-content/uploads/2020/02/Ghien-review-Dao-kinh-hoang-4-1024x576.jpg',
        cotTruyen: 'Đảo Kinh Hoàng là câu chuyện về quý ngài Roarke và trợ lý Tatto, chào mừng các vị khách đến hòn đảo biệt lập của mình, và hứa hẹn 1 cuộc sống như họ mong ước, nhưng ước mơ nào cũng có cái giá của nó.',
        isFav: true, isBrand: true, isSale: false
    },
 
    {   id: '16', 
        name: 'Ấn Quỷ',
        nametag: 'The Unholy',
        trailer: 'https://www.youtube.com/watch?v=f1Nv2O7VJuo',
        daoDien:'Evan Spiliotopoulos',
        quocGia: 'Mỹ',
        nam: '2021',
        ngonNgu: 'Phụ đề việt',
        theLoai: 'Kinh Dị',
          
        categoryId:'3', 
        image: 'https://upload.wikimedia.org/wikipedia/vi/f/fc/%E1%BA%A4n_qu%E1%BB%B7_poster.jpeg', 
        image1: 'https://image.thanhnien.vn/w660/Uploaded/2022/kbfluau/2021_04_01/the-unholy_alqg.jpg',
        cotTruyen: 'Ấn Quỷ - The Unholy là bộ phim thuộc thể loại kinh dị siêu nhiên của Mỹ do đạo diễn Evan Spiliotopoulos viết kịch bản đồng sản xuất và chỉ đạo, dựa trên cuốn tiểu thuyết được phát hành vào năm 1983 - Shrine của James Herbert. Bộ phim được sản xuất bởi Sam Raimi với nhà sản xuất Ghost House Pictures, tác phẩm có sự tham gia của các diễn viên Jeffrey Dean Morgan, Katie Aselton, William Sadler, Diogo Morgado, Cricket Brown, Cary Elwes.',
        isFav: true, isBrand: false, isSale: true
    },

    {   id: '17', 
        name: 'Già',
        nametag: 'Old',
        trailer: 'https://www.youtube.com/watch?v=bMT3RVAf_aE',
        daoDien:'M. Night Shyamalan',
        quocGia: 'Mỹ',
        nam: '2021',
        ngonNgu: 'Phụ đề việt',
        theLoai: 'Kinh Dị',
          
        categoryId:'3', 
        image: 'https://cdnmedia.thethaovanhoa.vn/Upload/O5NP4aFt6GVwE7JTFAOaA/files/2021/05/OLD-gia-phim%20(1).jpg', 
        image1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpOK-Q1r8YPH0NyBN4lLzuKPfuiIUO3Vlz4hl0uV39T6TLDVeobCpEgOymPhwvt17FNk0&usqp=CAU',
        cotTruyen: 'Bộ phim theo chân bốn nhóm người lạ đi nghỉ cùng nhau, họ tới nghỉ dưỡng tại một bãi biển riêng đặc biệt của khu nghỉ mát, và họ chợt nhận ra có điều gì đó rất kỳ lạ. Một gia đình bốn người gồm bố hi họ nhận ra rằng có điều gì đó không thể sửa chữa được. Một gia đình bốn người - bố Guy (Gael García Bernal), mẹ Prisca (Vicky Krieps), Maddox 11 tuổi (Alexa Swinton) và Trent 6 tuổi (Nolan) tới khu nghỉ mát nhiệt đới ở một vị trí không xác định.',
        isFav: true, isBrand: true, isSale: false
    },
 
    {   id: '18', 
        name: 'Annabella: Ác Quỷ Trở Về',
        nametag: 'ANNABELLE COMES HOME',
        trailer: 'https://www.youtube.com/watch?v=Rm-jr2XHr1M',
        daoDien:'Gary Dauberman',
        quocGia: 'Mỹ',
        nam: '2019',
        ngonNgu: 'Phụ đề việt',
        theLoai: 'Kinh Dị',
          
        categoryId:'3', 
        image: 'https://static.247phim.com/149828/conversions/5f2a6d32d318b_annabelle-02-435_627.jpg', 
        image1: 'https://vnn-imgs-f.vgcloud.vn/2019/06/17/17/bup-be-annabelle-da-san-sang-hu-doa-khan-gia.jpg',
        cotTruyen: 'Annabelle: Ác Quỷ Trở Về là bộ phim kểv ề sau những sự kiện xưa, vợ chồng pháp sư trừ tà Warren đưa Annabelle về nhà và niêm phong nó trong một căn phòng đặc biệt. Một ngày nọ trong lúc vợ chồng Warren rời khỏi nhà để thực hiện một nhiệm vụ bí ẩn, cơn ác mộng thực sự bắt đầu khi người bạn Daniela của Mary Ellen - bảo mẫu nhà Warren tò mò khám phá căn phòng đầy những món đồ quỷ ám và vô tình giải thoát cho Annabelle. Từ đó, Annabelle dẫn dắt các linh hồn khác có trong căn phòng cùng trỗi dậy, với mục tiêu mới nhằm vào chính Judy  cô con gái nhà Warren và bạn bè của cô bé',
        isFav: true, isBrand: false, isSale: false
    },

    {   id: '19', 
        name: 'Xác Chết Quỷ Ám',
        nametag: 'THE POSSESSION OF HANNAH GRACE',
        trailer: 'https://www.youtube.com/watch?v=0w7z__r_jfw',
        daoDien:'Diederik Van Rooijen,',
        quocGia: 'Mỹ',
        nam: '2018',
        ngonNgu: 'Phụ đề việt',
        theLoai: 'Kinh Dị',
          
        categoryId:'3', 
        image: 'https://khenphim.com/wp-content/uploads/2018/12/xac-chet-quy-am-3-poster.jpg', 
        image1: 'https://channel.mediacdn.vn/thumb_w/640/2018/12/22/photo-1-1545456432852457995219.jpg',
        cotTruyen: 'Xác Chết Quỷ Ám kể về Megan Reed (Shay Mitchell) là một nữ bác sĩ có vấn đề về tâm lý nên luôn cần sự hỗ trợ của thuốc an thần trong những ca trực đêm tại nhà xác trong bệnh viện. Một ngày nọ, cô nhận được xác chết nhăn nhúm của Hannah Grace (Kirby Johnson) - người được cho là đã chết sau một buổi trừ tà thất bại.',
        isFav: true, isBrand: true, isSale: true
    },

    {   id: '20', 
        name: 'The Tomorrow War',
        nametag: 'The Tomorrow War',
        trailer: 'https://www.youtube.com/watch?v=QPistcpGB8o',
        daoDien: 'Chris McKay',
        quocGia: 'Mỹ',
        nam: '2021',
        ngonNgu: 'Phụ đề việt',
        theLoai: 'Viễn Tưởng',
          
        categoryId:'4', 
        image: 'https://phimnhua.com/wp-content/uploads/2021/07/cuoc-chien-tuong-lai-tomorrow-war-2021.jpg', 
        image1: 'https://n-cdn.serienjunkies.de/hq/107379.jpg',
        cotTruyen: 'Một người đàn ông của gia đình chiến đấu trong cuộc chiến tương lai, nơi số phận của nhân loại dựa vào khả năng đối đầu với quá khứ của anh',
        isFav: true, isBrand: false, isSale: true
    },

    {   id: '21', 
        name: 'Tiệt Chủng',
        nametag: 'Extinct',
        trailer: 'https://static.vphimzz.net/img/vpreview-IbvT1xe.jpg',
        daoDien:'Ben Young',
        quocGia: 'Mỹ',
        nam: '2018',
        ngonNgu: 'Phụ đề việt',
        theLoai: 'Viễn Tưởng',
          
        categoryId:'4', 
        image: 'https://phimnhua.com/wp-content/uploads/2021/11/extinction_2018-270x400.jpg', 
        image1: 'https://static.vphimzz.net/img/vpreview-IbvT1xe.jpg',
        cotTruyen: 'Phim tuyệt chủng Extinction Peter, một kỹ sư, có những cơn ác mộng lặp đi lặp lại, trong đó anh và mọi người anh biết phải chịu đựng những cuộc đối đầu bạo lực, giống như cuộc xâm lược của người ngoài hành tinh với kẻ thù không xác định. Điều này khiến anh ta có một mối quan hệ căng thẳng với vợ mình, Alice, và các con gái của anh ta là Hanna và Lucy. Anh ta miễn cưỡng đến một phòng khám để nhận trợ giúp tâm thần, chỉ để tìm một bệnh nhân ở đó tiết lộ rằng anh ta đang có những tầm nhìn tương tự, và psychs sẽ chỉ ngăn chặn những tầm nhìn này.',
        isFav: true, isBrand: true, isSale: false
    },
 
    {   id: '22', 
        name: 'Đấu Trường Ảo',
        nametag: 'READY PLAYER ONE',
        trailer: 'https://www.youtube.com/watch?v=FeX5YONWKA0',
        daoDien:'Steven Spielberg',
        quocGia: 'Mỹ',
        nam: '2018',
        ngonNgu: 'Phụ đề việt',
        theLoai: 'Hành Động ,Phiêu Lưu, Viễn Tưởng',
          
        categoryId:'4', 
        image: 'https://upload.wikimedia.org/wikipedia/vi/3/3b/%C4%90%E1%BA%A5u_tr%C6%B0%E1%BB%9Dng_%E1%BA%A3o_2018.jpg', 
        image1: 'https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa6478ffa12f9c_dau-truong-ao-1.jpg',
        cotTruyen: 'Phim Đấu Trường Ảo, Ready Player One (2018) : Phim Đấu Trường Ảo lấy bối cảnh năm 2044, khi người sáng lập ra Oasis - một tựa game online, mất mạng. Khi đó, ông thách thức tất cả những người chơi Oasis đi tìm Easter Eggs - Trứng phục sinh. Phần thưởng dành cho người chiến thắng là những tài sản vô cùng quý báu mà ông để lại. Một chàng trai mang tên Wade Watts đã tìm ra được những gợi ý đầu tiên trong cuộc tìm kiếm và bắt đầu hành trình của mình.',
        isFav: true, isBrand: false, isSale: true
    },

    {   id: '23', 
        name: 'Siêu Đại Chiến',
        nametag: 'Pacific Rim',
        trailer: 'https://www.youtube.com/watch?v=6Fcy8Ua74SA',
        daoDien:'Guillermo del Toro',
        quocGia: 'Mỹ',
        nam: '2013',
        ngonNgu: 'Phụ đề việt',
        theLoai: 'Viễn Tưởng',
          
        categoryId:'4', 
        image: 'https://static.247phim.com/130199/conversions/6665_pacific-rim-2013_photo_portrait-435_627.jpg', 
        image1: 'https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/602e2b75781ca16f4ec6b7d4_pacific-rim-1.jpg',
        cotTruyen: 'Siêu đại chiến thái bình dương - Pacific Rim là bộ phim điện ảnh lấy đề tài khoa học viễn tưởng và quái vật của Mỹ được phát hành năm 2013 do Guillermo del Toro chịu trách nhiệm chỉ đạo, với sự tham gia của dàn diễn viên gồm Charlie Hunnam, Idris Elba, Kikuchi Rinko, Charlie Day...',
        isFav: true, isBrand: true, isSale: false
    },
 
    {   id: '24', 
        name: 'Hố Sâu Đói Khát',
        nametag: 'The Platform',
        trailer: 'https://www.youtube.com/watch?v=98ayZLHkW_M',
        daoDien:'Galder Gaztelu-Urrutia',
        quocGia: 'Tây Ban Nha',
        nam: '2019',
        ngonNgu: 'Phụ đề việt',
        theLoai: 'Viễn Tưởng',
          
        categoryId:'4', 
        image: 'https://ragus.vn/wp-content/uploads/2020/03/The-Platform-H%E1%BB%91-s%C3%A2u-%C4%91%C3%B3i-kh%C3%A1t-2019-full-hd-vietsub-5-scaled.jpg', 
        image1: 'https://ghienreview.com/wp-content/uploads/2020/03/Ghien-review-Ho-sau-doi-khat-03.jpg',
        cotTruyen: 'Khi tù nhân tầng trên tham lam ăn hết đồ ngon, những kẻ tầng dưới chỉ còn một chút cơm thừa canh cạn. Vậy phải làm sao để ai cũng đủ đồ ăn? Hắn sẽ ra tay hành động.',
        isFav: true, isBrand: false, isSale: false
    },

    {   id: '25', 
        name: 'Alita: Thiên Thần Chiến Binh',
        nametag: 'ALITA: BATTLE ANGEL',
        trailer: 'https://www.youtube.com/watch?v=sx9dsNzIdGw',
        daoDien:'Robert Rodriguez',
        quocGia: 'Âu Mỹ',
        nam: '2019',
        ngonNgu: 'Phụ đề việt',
        theLoai: 'Hành Động, Viễn Tưởng, Phiêu Lưu, Chiến Tranh',
          
        categoryId:'4', 
        image: 'https://upload.wikimedia.org/wikipedia/vi/d/d2/Alita_Thi%C3%AAn_th%E1%BA%A7n_chi%E1%BA%BFn_binh_%28%C3%A1p_ph%C3%ADch_2019%29.jpg', 
        image1: 'https://cdnimg.vietnamplus.vn/t1200/Uploaded/pcfo/2019_02_22/2202_alitabattleangel.jpg',
        cotTruyen: 'Alita: Thiên Thần Chiến Binh Alita được ví như một thần chết đến từ địa ngục vì những khả năng vượt qua mọi giới hạn mà cô sở hữu. Cô được tìm thấy bởi Tiến sĩ Ido và không thể nhớ mình là ai hay từ đâu tới. Để có thể tìm ra sự thật, Atila phải dấn thân vào những cuộc chiến đấu nảy lửa.',
        isFav: true, isBrand: true, isSale: true
    },
    {   id: '26', 
    name: 'Thanh Gươm Diệt Quỷ',
    nametag: 'Kimetsu no Yaiba',
    trailer: 'https://www.youtube.com/watch?v=oJf81IYInc8',
    daoDien:'Đang Cập Nhật',
    quocGia: 'Nhật Bản',
    nam: '2020',
    cotTruyen: 'Thanh gươm diệt quỷ hay còn được biết đến với tên Demon Slayer: Kimetsu no Yaiba là một bộ truyện tranh do Gotōge Koyoharu sáng tác và minh hoạ. Truyện kể về hành trình trở thành kiếm sĩ diệt quỷ của thiếu niên Kamado Tanjirō sau khi gia đình cậu bị quỷ sát hại và em gái Nezuko của cậu bị biến thành quỷ.',
    ngonNgu: 'Phụ đề việt',
    theLoai: 'Hài Hước, Hành Động, Hoạt Hình, Phiêu Lưu, Phim Bộ, Thần Thoại',
    categoryId:'5', 
    image: 'https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa6447e2a12fa2_chuyen-tau-vo-tan-1.jpg', 
    image1: 'https://image.thanhnien.vn/1200x630/Uploaded/2022/ygtmjz/2020_11_24/thanh_guom_zfjf.jpg',
    isFav: true, isBrand: true, isSale: false
},
];
export default PRODUCTS;