import {showcase as showcase_default} from './en.js'
import {socialMediaLinks as socialMediaLinks_default} from './en.js'

const introduction = {
    title: "こんにちは。プロムスティポン ケンキトと申します。「ケン」と呼んでください。",
    paragraph: "ロボティクス専攻で何年間も時間かけて、自分はハードウェアより、ソフトウェアのほうに向いているではないかと思います。私はプログラミングが好きで、新しい技術を身につけて経験重なっていきたいと思います",
    image: require('../assets/images/ken_pic.png').default
};

const contact = {
    title: "連絡先:",
    number: "+81-80-5560-9218",
    email_address: "k.promsutipong@gmail.com"
}

const socialMediaLinks = socialMediaLinks_default;

const experience = {
    title: "バンコク、タイで 1997年12月に 生まれ",
    records:[
        {
            date: "2009年5月",
            background: "1",
            icon: "school",
            title: "Suankularb Witthayalai School",
            subtitle: "Gifted and Talented Program",
            content:["中学校・高校",
            "GPA: 3.97/4.00"]
        },
        {
            date: "2015年10月",
            background: "1",
            icon: "school",
            title: "東北大学",
            subtitle: "機械知能工学科・バイオロボティクスコース",
            content:["学士",
            "工学部総長賞を受賞した",
            "SII2020学会で論文発表",
            "GPA: 3.96/4.00"]
        },
        {
            date: "2018年8月",
            background: "2",
            icon: "work",
            title: "ROSエンジニア @Obodroid",
            subtitle: "インターンシップ (1か月)",
            content:["移動型ロボットの制御と自動運転システムの開発"]
        },
        {
            date: "2019年10月",
            background: "1",
            icon: "school",
            title: "東北大学大学院",
            subtitle: "工学研究科・ロボティクス専攻",
            content:["修士",
            "IREX2019ロボット展示会・ベンチャー企業の共同研究"]
        },
        {
            date: "2020年8月",
            background: "2",
            icon: "work",
            title: "アンドロイドアプリエンジニア @Teamlab",
            subtitle: "インターンシップ (2週間)",
            content:["Kotlinとアーキテクチャでのアプリ開発"]
        },
        {
            date: "2021年2月",
            background: "2",
            icon: "work",
            title: "ソフトウェアエンジニア @アマゾンジャパン",
            subtitle: "インターンシップ (2ヶ月)",
            content:["未確定"]
        }
    ]
};
  
const showcase = {
    background: "機械系のロボット開発からプログラミングを始めました, プログラミングの経験を重なるたびに、これからのキャリアパスとして、ソフトウェアエンジニアを目指したくなりました。 独学でプログラミング言語やフレームワークを学んで、趣味で小さいプロジェクトをいくつか立てました. 広い範囲でウェブもモバイルも、フロントエンドもバックエンドもやっています",
    frameworks: showcase_default.frameworks,
    languages: showcase_default.languages,
    
    categories:[
        {
            name: "ロボットエンジニア",
            background: "今までの経験は多種類のロボットやシステムインテグレーションを開発していました。例えば、移動型ロボット、人間サポートデバイスなどです。計画から、設計、実装、完成させるまでのプロジェクトがいくつかあります。 大半のプロジェクトは研究の目的で作られましたが、企業との共同研究のプロジェクトもありました。ROS中心にソフトウェアのほうが得意です。",
            projects:[
                {
                    name: "Wi-Fi信号強度を用いて屋内環境における電動車いすのナビゲーションシステム。。",
                    image: require("../assets/images/showcases/wheelchair.jpg").default,
                    summary: "Wi-Fi信号の位置測定に組み合わせた電動車いすのSLAMナビゲーションシステム. 使用者の呼び出しによって電動車いすが自動的に使用者の位置まで移動させます。",
                    paragraphs:["本研究の目的は高齢化問題の解決に貢献する. コンセプトは世界に広く実装されているバイクシェアサービスに近い。しかし、電動車いすは値段が高いシステムであるため、バイクシェアよりは台数が少ないと考えられ、使用が終わったら、次の使用者に自動的に移動する機能が望ましい",
                    "技術に関しては、マップの中の位置のごとに、Wi-Fi信号強度情報(環境にある客アクセスポイントからの信号)をデータベースに登録し、使用者が車いすを呼び出す時に、使用者の位置の情報をデータベースにマッチングし、使用者の位置を計測する。 そして、電動車いすが自動的に使用者に移動する",
                    "本研究は私の卒業論文であり、SII2020学会でも発表した"
                    ],
                    frameworks:[
                        {
                            name: "ROS",
                            url: require("../assets/images/icons/ros.png").default
                        },
                        {
                            name: "Matlab",
                            url: require("../assets/images/icons/matlab.png").default
                        },
                        {
                            name: "Solidworks",
                            url: require("../assets/images/icons/solidworks.png").default
                        }
                    ],
                    languages:[
                        {
                            name: "Python",
                            url: require("../assets/images/icons/python.svg").default
                        },
                        {
                            name: "C++",
                            url: require("../assets/images/icons/c++.png").default
                        },
                        {
                            name: "C",
                            url: require("../assets/images/icons/c.png").default
                        }
                    ]
                },
                {
                    name: "移動型ロボットのドッキング課題とSLAMの改良",
                    image: require("../assets/images/showcases/olpaso.jpg").default,
                    summary: "ドッキング課題とSLAMの改良が目的としての共同研究。",
                    paragraphs:["本プロジェクトはベンチャーとの共同研究になる。私の課題はドッキング機能をロボットに追加し、ロボットのSLAM(Simultaneous Localization and Mapping)機能を改良すること。 ロボットのセンサー等はカメラとLIDAR",
                    "ドッキングシステムは画像処理技術でドッキング場を認識する。ROSパッケージのトラッカーアルゴリズムを導入し、経路計画のプログラムを書いた",
                    "ドッキング機能が追加され、IREX2019ロボット展示会で展示された"
                    ],
                    frameworks:[
                        {
                            name: "ROS",
                            url: require("../assets/images/icons/ros.png").default
                        },
                        {
                            name: "Solidworks",
                            url: require("../assets/images/icons/solidworks.png").default
                        }
                    ],
                    languages:[
                        {
                            name: "Python",
                            url: require("../assets/images/icons/python.svg").default
                        },
                        {
                            name: "C++",
                            url: require("../assets/images/icons/c++.png").default
                        }
                    ]
                },
                {
                    name: "自動走行ロボット",
                    image: require("../assets/images/showcases/tmex.png").default,
                    summary: "3人のチームで自動走行ロボットをゼロから開発してみた。ロボットがJetson TX2のマイコンボードとVelodyne VLP-16が設置される。",
                    paragraphs:["本プロジェクトは３人で自動走行ロボットをゼロから開発するため、機械系、電気系、情報系に分担された。自分は情報系・ソフトウエアを担当している",
                    "ロボットはまだ開発中だが、今の段階は環境の中に荷物を持ちながら、移動やマッピングすることなどができる",
                    "ロボットベースは2輪型でJetson TX2のマイコンボードとVelodyne VLP-16が設置される",
                    "LOAM(Lidar Odometry and Mapping in Real-time)というマッピングのアルゴリズムを使用している"
                    ],
                    frameworks:[
                        {
                            name: "ROS",
                            url: require("../assets/images/icons/ros.png").default
                        },
                        {
                            name: "Solidworks",
                            url: require("../assets/images/icons/solidworks.png").default
                        },
                        {
                            name: "Docker",
                            url: require("../assets/images/icons/docker.png").default
                        },
                        {
                            name: "Pytorch",
                            url: require("../assets/images/icons/pytorch.svg").default
                        }
                    ],
                    languages:[
                        {
                            name: "Python",
                            url: require("../assets/images/icons/python.svg").default
                        },
                        {
                            name: "C++",
                            url: require("../assets/images/icons/c++.png").default
                        },
                        {
                            name: "C",
                            url: require("../assets/images/icons/c.png").default
                        }
                    ]
                },
                {
                    name: "歩行速度に合わせるトレッドミルを用いてVR環境のインターフェースでロボットの遠隔操作",
                    image: require("../assets/images/showcases/treadmill.png").default,
                    summary: "トレッドミルによる歩行訓練にVR(人工現実感)技術を組み合わせ、使用者が室外運動に楽しめることが目的の研究。使用者は歩行速度に合わせるトレッドミルで自分の「アバター」を操作する。アバターに関してはVR環境にあるか現実の遠隔地にあるロボットである。",
                    paragraphs:["本研究は修士課程の研究で、最終の目的は、使用者が自分の体で遠隔地にあるロボットの「アバター」を操作すること。このシステムは未来によく使われる技術を使うことが多いと予想されるため、未来向けの研究と考えれる",
                    "本研究は多くのシステムが組み合わせている。まず、制御するため、トレッドミルの回路を変更し、パーツを追加する。センサーで使用者の位置を取り、トレッドミルの速度を制御し、歩行速度を入力する。また、センサー等で回転の動作で角速度を入力する。",
                    "ロボット操作するためには、使用者側にフィードバックが必要ため、HMD(ヘッドマウントディスプレイ)でロボット周りの環境を把握することができる. 現段階は画像フィードバックのみになる",
                    "リハビリテーションや歩行訓練するため、自分の体の動作を通し、ロボットを操作する"
                    ],
                    frameworks:[
                        {
                            name: "ROS",
                            url: require("../assets/images/icons/ros.png").default
                        },
                        {
                            name: "Solidworks",
                            url: require("../assets/images/icons/solidworks.png").default
                        },
                        {
                            name: "Unity",
                            url: require("../assets/images/icons/unity.svg").default
                        },
                        {
                            name: "Android",
                            url: require("../assets/images/icons/android.svg").default
                        }
                    ],
                    languages:[
                        {
                            name: "Python",
                            url: require("../assets/images/icons/python.svg").default
                        },
                        {
                            name: "C++",
                            url: require("../assets/images/icons/c++.png").default
                        },
                        {
                            name: "C#",
                            url: require("../assets/images/icons/csharp.png").default
                        }
                    ]
                },
                {
                    name: "ロボットアーム研修",
                    image: require("../assets/images/showcases/manipulator.png").default,
                    summary: "本研修は研究室の新入生は皆受ける必要がある。ロボットアーム・マニプレーターの知識(座標系、運動学、逆運動学など)を学び、シムレーターと実機でプログラムを実装する。",
                    paragraphs:["自分の研究室は新入生のためのロボットアーム研修がある。本研修ではマニプレーターの知識を学んでもらい、シムレーターと実機でプログラムを実装する。自分はもちろん本研修受かって、メンターとして2回活動した。",
                    "内容に関しては、マニプレーターの基礎から、座標系、運動学、逆運動学、トルク制御などを学び、それを理解する次第、シムレーターと実機でプログラムを実装する。",
                    "メンターの活動としては、学生の進捗を監視しながら、快適なアドバイスを与え、ソースコードやサンプルプログラムを作ること。"
                    ],
                    frameworks:[
                        {
                            name: "ROS",
                            url: require("../assets/images/icons/ros.png").default
                        }
                    ],
                    languages:[
                        {
                            name: "Python",
                            url: require("../assets/images/icons/python.svg").default
                        },
                        {
                            name: "C++",
                            url: require("../assets/images/icons/c++.png").default
                        }
                    ]
                }
            ]
        },
        {
            name: "モバイルアプリ開発エンジニア",
            background: "日常に時間を無駄遣いすること(繰り返し課題など)を減らすため、自分が実際に使えそうなアプリを作り始めた。今までのアプリ開発経験はAndroidのみです。",
            projects:[
                {
                    name: "「ジムバディ」アプリ",
                    image: require("../assets/images/showcases/gymbuddy.png").default,
                    summary: "私の初めてのAndroidアプリで、簡単な構造と基本レベルのJAVAで、ジム用のアプリを作成した。",
                    paragraphs:["JAVAやAndroidを勉強するため、チュートリアルをみながら、このアプリを作成した。自分が使いたい機能を入れるのが目的である",
                    "運動プランのスケジュールやメモのアプリで、ルーティンや技を自由追加できるので、スケジュールを書いたり、運動中のセットごとの回数やウエートの重量をメモすることもできる",
                    "基本的なJAVAと簡単なAndroidアプリ構造で作成し、SQLiteでローカルでデータ保存する。",
                    "いろいろな機能はまだ足りなく、UIもちゃんときれいに作られていないが、本来、改良すると思います。"
                    ],
                    reference: "https://github.com/ken-excel/GymBuddy",
                    reftext: "Github",
                    frameworks:[
                        {
                            name: "Android",
                            url: require("../assets/images/icons/android.svg").default
                        }
                    ],
                    languages:[
                        {
                            name: "Java",
                            url: require("../assets/images/icons/java.png").default
                        }
                    ]
                },
                {
                    name: "「家計帽」アプリ",
                    image: require("../assets/images/showcases/expensetracker.jpg").default,
                    summary: "このアプリは自分のJAVAとAndroidの知識を試すため、1日でアプリを作成してみた結果である。",
                    paragraphs:["このアプリは自分のJAVAとAndroidの知識を試す(特に実装)ため、1日でアプリを作成してみた結果である。",
                    "このアプリの作成動機はスマホの操作回数を最小にした家計帽アプリ",
                    "シンプルなデザインで、メイン画面から、数字をいれ、ボタン押すだけで、記録することができる. もちろん、カテゴリーや詳細書くこともできる。 毎月の支払(家賃や電気代など)も自動的に繰り返して作られる"
                    ],
                    reference: "https://github.com/ken-excel/ExpenseTracker",
                    reftext: "Github",
                    frameworks:[
                        {
                            name: "Android",
                            url: require("../assets/images/icons/android.svg").default
                        }
                    ],
                    languages:[
                        {
                            name: "Java",
                            url: require("../assets/images/icons/java.png").default
                        }
                    ]
                },
                {
                    name: "アンドロイドアプリ開発エンジニア @Teamlab",
                    image: require("../assets/images/showcases/teamlab.png").default,
                    summary: "アプリ開発エンジニアとしての初めてのインターン経験。チームでコミュニケーションをとったり、ちゃんとコードの管理もしたのが大切な経験だった",
                    paragraphs:["このインターンではアプリリニューアルの案件で少人数チームの一員として、働いた。",
                    "コードの管理やQCはちゃんとしていて、IOSチームやUI、UXデザイナーと打ち合わせが多く、Sprintの計画通りに進んでいるか確認する",
                    "今回はアンドロイドアーキテクチャを用い、構造もモジュールごとにちゃんと分けられ、新しいライブラリを導入することもあるので、すごく勉強になった。 アプリ開発にはまだ、初心者だったので、最初はすごく難しいが、乗り越えて、本インターンシップすごく勉強になった。"
                    ],
                    frameworks:[
                        {
                            name: "Android",
                            url: require("../assets/images/icons/android.svg").default
                        },
                        {
                            name: "AWS",
                            url: require("../assets/images/icons/aws.png").default
                        }
                    ],
                    languages:[
                        {
                            name: "Java",
                            url: require("../assets/images/icons/java.png").default
                        },
                        {
                            name: "Kotlin",
                            url: require("../assets/images/icons/kotlin.svg").default
                        }
                    ]
                }
            ]
        },
        {
            name: "WEBアプリ開発エンジニア",
            background: "ソフトウエアエンジニアとしての知識範囲を広げるため、いろいろなTech Stack(テックスタック)を学んで、使って試しました。",
            projects:[
                {
                    name: "Github Pageプロフィール",
                    image: require("../assets/images/showcases/profile.png").default,
                    summary: "最初のウェッブページ、Reactjsで書き、Nodejsで作成し、Github Pageへデプロイした. 基本的に自分についてのランダムなことを記載される",
                    paragraphs:["チュートリアルを見ながら、テンプレートを使って、ReactjsとCSSでウェッブページを作ってみた。本プロジェクトに開発したのがフロントエンド側のみ。"
                    ],
                    reference: "https://ken-excel.github.io/",
                    reftext: "Github Page",
                    frameworks:[
                        {
                            name: "Reactjs",
                            url: require("../assets/images/icons/react.png").default
                        },
                        {
                            name: "Nodejs",
                            url: require("../assets/images/icons/nodejs.png").default
                        }
                    ],
                    languages:[
                        {
                            name: "Javascript",
                            url: require("../assets/images/icons/javascript.svg").default
                        },
                        {
                            name: "CSS",
                            url: require("../assets/images/icons/css.png").default
                        },
                        {
                            name: "HTML",
                            url: require("../assets/images/icons/html.svg").default
                        }
                    ]
                },
                {
                    name: "Github Pageポートフォリオ",
                    image: require("../assets/images/showcases/portfolio.png").default,
                    summary: "二番目のウェッブページで、ポートフォリオみたいに、必要な情報だけ記載される。今回はテンプレートを使わず、ゼロから開発してみた。Github Workflowでデプロイを自動化している。",
                    paragraphs:["二番目のウェッブページで何もない状態から作られ、コードの構造もちゃんとしているため、今後、変更しやすく、機能追加も簡単にできるようにしたもの。主な要素は Reactjs、Nodejs、CSSで前回と変わらないが、bootstrapやstyled-componentsなどのデコレーション用のライブラリを導入した",
                    "本ウェッブページは動的で面白いポートフォリオとして取り扱う。"
                    ],
                    frameworks:[
                        {
                            name: "Reactjs",
                            url: require("../assets/images/icons/react.png").default
                        },
                        {
                            name: "Nodejs",
                            url: require("../assets/images/icons/nodejs.png").default
                        }
                    ],
                    languages:[
                        {
                            name: "Javascript",
                            url: require("../assets/images/icons/javascript.svg").default
                        },
                        {
                            name: "CSS",
                            url: require("../assets/images/icons/css.png").default
                        },
                        {
                            name: "HTML",
                            url: require("../assets/images/icons/html.svg").default
                        }
                    ]
                },
                {
                    name: "大学ポータルサイト",
                    image: require("../assets/images/showcases/portal.png").default,
                    summary: "新しいテックスタックを学ぶために、一人の友達と立ち上がったプロジェクト。プログラムだけでなく、チームのコミュニケーションもちゃんとしていて、望ましい機能がついている使いやすいポータルサイトを作るのが目的",
                    paragraphs:["私達の大学のポータルサイトは使いづらいと思い、使いやすくしたり、望ましい機能を追加したりするため、バックエンドもフロントエンドもゼロから作ってみた。",
                    "現段階では、授業検索システムを作った。いろいろな条件で絞り込み、キーワードで検索可能。",
                    "バックエンドは、Springフレームワークを使い、Spring JPA・HibernateをORM(Object Relational Mapping)として導入し、MySQLデータベースとやり取りする。",
                    "フロントエンドは、Reactjsで作られ、ReduxやAxiosなどのライブラリを使う。"
                    ],
                    frameworks:[
                        {
                            name: "Spring",
                            url: require("../assets/images/icons/spring.svg").default
                        },
                        {
                            name: "Hibernate",
                            url: require("../assets/images/icons/hibernate.png").default
                        },
                        {
                            name: "Reactjs",
                            url: require("../assets/images/icons/react.png").default
                        },
                        {
                            name: "Nodejs",
                            url: require("../assets/images/icons/nodejs.png").default
                        },
                        {
                            name: "SQL",
                            url: require("../assets/images/icons/database.png").default
                        }
                    ],
                    languages:[
                        {
                            name: "Java",
                            url: require("../assets/images/icons/java.png").default
                        },
                        {
                            name: "Javascript",
                            url: require("../assets/images/icons/javascript.svg").default
                        },
                        {
                            name: "CSS",
                            url: require("../assets/images/icons/css.png").default
                        },
                        {
                            name: "HTML",
                            url: require("../assets/images/icons/html.svg").default
                        }
                    ]
                }
            ]
        }
    ]
};

const headertext = {
    upper: "STRIVE TO BE BETTER",
    lower: "BEAT YESTERDAY"
}

export {introduction, contact, socialMediaLinks, experience, showcase, headertext};