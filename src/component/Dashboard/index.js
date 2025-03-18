import './index.scss';
import { useEffect, useRef } from 'react';
import * as echarts from "echarts";
import { Collapse } from 'antd'
function Dashboard() {
    const chartRef = useRef(null);
    const graphRef = useRef(null);
    const graph2Ref = useRef(null);

    const text = `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
  `;

    const items = [
        {
            key: '1',
            label: 'How much can i contribute to an ISA each year?',
            children: <p>{text}</p>,
        },
        {
            key: '2',
            label: 'Can i have multiple ISA accounts?',
            children: <p>{text}</p>,
        },
        {
            key: '3',
            label: 'Can i transfer an ISA from another provider?',
            children: <p>{text}</p>,
        },
        {
            key: '4',
            label: 'How can i transfer out my ISA to another provider?',
            children: <p>{text}</p>,
        },
        {
            key: '5',
            label: 'Can i withdraw from my ISA?',
            children: <p>{text}</p>,
        },
    ];



    useEffect(() => {
        const chartInstance = echarts.init(chartRef.current);
        const graphInstance = echarts.init(graphRef.current);
        const graph2Instance = echarts.init(graph2Ref.current);

        const chartOptions = {
            tooltip: {
                trigger: "item",
            },
            legend: {
                bottom: '0%',
                left: 'center'
            },
            series: [
                {
                    name: "Portfolio",
                    type: "pie",
                    radius: ['40%', '70%'], // Adjust the thickness of the ring
                    avoidLabelOverlap: false,
                    label: {
                        show: true,
                        position: "inside",
                        formatter: "{d}%", // Show percentage values
                        fontSize: 12,
                        color: "#fff",
                        fontWeight: "bold",
                    },
                    labelLine: {
                        show: false, // Hide label lines
                    },
                    data: [
                        { value: 20, name: "Equities", itemStyle: { color: "#4A90E2" } }, // Medium blue
                        { value: 30, name: "Private Bonds", itemStyle: { color: "#1976D2" } }, // Dark blue
                        { value: 10, name: "Government Bonds", itemStyle: { color: "#63A4FF" } }, // Light blue
                        { value: 40, name: "Others", itemStyle: { color: "#E0E0E0" } }, // Light gray
                    ],
                },
            ],
        };

        const graphOptions = {
            title: {
                text: 'Stacked Line'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'Email',
                    type: 'line',
                    stack: 'Total',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'Union Ads',
                    type: 'line',
                    stack: 'Total',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: 'Video Ads',
                    type: 'line',
                    stack: 'Total',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: 'Direct',
                    type: 'line',
                    stack: 'Total',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: 'Search Engine',
                    type: 'line',
                    stack: 'Total',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };


        chartInstance.setOption(chartOptions);
        graphInstance.setOption(graphOptions);
        graph2Instance.setOption(graphOptions);

        return () => {
            chartInstance.dispose();
            graphInstance.dispose();
            graph2Instance.dispose();
        };
    }, []);
    return <>
        <div className='dashboard'>
            <div className='dashboard_about'>
                <header>

                    <section className='dashboard_about_header_left'>
                        LOGO
                    </section>
                    <section className='dashboard_about_header_right'>
                        <ul>
                            <li>Products <i className="bi bi-chevron-down" /></li>
                            <li>Tools <i className="bi bi-chevron-down" /></li>
                            <li>About</li>
                            <li>Pricing</li>
                            <li>Help</li>
                        </ul>
                        <button className='login_btn'>
                            Login
                        </button>
                        <button className='signup_btn'>
                            Sign Up
                        </button>
                    </section>
                </header>
                <div className='dashboard_about_content'>
                    <section className='dashboard_about_content_left'>
                        <div>
                            <label>
                                What is Stock & Share ISA ?
                            </label>
                            <p>
                                A stocks and Shares ISA is  a tax-efficient account for investing in stocks, bonds, ETF's and more. Profits, dividends and interest are tax-free, making it deal for long-term wealth growth.
                                <br /><br />This tax year the ISA allowance is E20,000.
                            </p>
                        </div>
                        <div>
                            <button>
                                Start Investing Now
                                &nbsp;<i className="bi bi-arrow-right" />
                            </button>
                            <p>
                                Investing comes with inherent risks, meaning the value of your investments can go up or down, and you may get back less than you originally invested.
                            </p>
                        </div>


                    </section>
                    <section className='dashboard_about_content_right'>
                        <img src="test.jpg" alt="" />
                    </section>
                </div>
            </div>
            <div className='dashboard_2nd'>
                <section className='dashboard_2nd_top'>
                    <label>
                        Why invest in a stocks and shares ISA?
                    </label>
                    <p>
                        Grow your wealth tax-free with personalized investment strategies, transparent fees,<br />
                        and expert portfolio management—designed to help you achieve your financial goals with confidence.
                    </p>
                </section>
                <section className='dashboard_2nd_bottom'>
                    <div className='dashboard_2nd_bottom_cards'>
                        <section className='dashboard_2nd_bottom_cards_icon'>
                            <i className="bi bi-bag-heart" />
                        </section>
                        <section className='dashboard_2nd_bottom_cards_content'>
                            <label>
                                Expertly Managed Portfolios
                            </label>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s                            </p>
                        </section>
                    </div>
                    <div className='dashboard_2nd_bottom_cards'>
                        <section className='dashboard_2nd_bottom_cards_icon'>
                            <i className="bi bi-bag-heart" />
                        </section>
                        <section className='dashboard_2nd_bottom_cards_content'>
                            <label>
                                Tax-Free Growth

                            </label>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s                            </p>
                        </section>
                    </div>
                    <div className='dashboard_2nd_bottom_cards'>
                        <section className='dashboard_2nd_bottom_cards_icon'>
                            <i className="bi bi-bag-heart" />
                        </section>
                        <section className='dashboard_2nd_bottom_cards_content'>
                            <label>
                                Peace Of Mind

                            </label>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s                            </p>
                        </section>
                    </div>
                </section>
            </div>
            <div className='dashboard_3rd'>
                <div className='dashboard_3rd_header'>
                    <section className='dashboard_3rd_header_left'>
                        <div>
                            <span>
                                Our Pricing Plan
                            </span>
                        </div>
                        <label>
                            We grow when you grow
                        </label>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </section>
                    <section className='dashboard_3rd_header_right'>
                        <button>Learn About Pricing
                            &nbsp;<i className="bi bi-arrow-right" />
                        </button>
                    </section>
                </div>
                <div className='dashboard_3rd_main'>
                    <div className='dashboard_3rd_main_top'>
                        <section className='dashboard_3rd_main_top_left'>
                            <label>
                                Calculate your costs
                            </label>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            </p>
                        </section>
                        <section className='dashboard_3rd_main_top_right'>
                            <select>
                                <option value="" key="">Defensive</option>
                                <option value="" key="">Option 1</option>
                                <option value="" key="">Option 2</option>
                            </select>
                        </section>
                    </div>
                    <div className='dashboard_3rd_main_middle'>
                        <section className='dashboard_3rd_main_middle_left'>
                            <div className='dashboard_3rd_main_middle_left_card'>
                                <p>
                                    Portfolio Value
                                </p>
                                <label style={{ color: '#015ca3' }}>
                                    €2,500,000
                                </label>
                            </div>
                            <div className='dashboard_3rd_main_middle_left_card'>
                                <p>
                                    Total costs per year
                                </p>
                                <label>
                                    €16,400.00
                                </label>
                            </div>
                        </section>
                        <section className='dashboard_3rd_main_middle_right'>
                            <div className='dashboard_3rd_main_middle_right_card'>
                                <p>
                                    Administration & Trading
                                </p>
                                <label>
                                    12.5%
                                </label>
                            </div>
                            <div className='dashboard_3rd_main_middle_right_card'>
                                <p>
                                    ETF costs (TER)
                                </p>
                                <label>
                                    0.15%
                                </label>
                            </div>
                            <div className='dashboard_3rd_main_middle_right_card'>
                                <p>
                                    Level 2
                                </p>
                                <label>
                                    0.85%
                                </label>
                            </div>
                        </section>
                    </div>
                    <div className='dashboard_3rd_main_bottom'>
                        <section className='dashboard_3rd_main_bottom_1st'>
                            <p>
                                less than €10,000
                            </p>
                            <label>
                                Level 1
                            </label>
                        </section>
                        <section className='dashboard_3rd_main_bottom_2nd'>
                            <p>
                                more than €10,000
                            </p>
                            <label>
                                Level 2
                            </label>
                        </section>
                        <section className='dashboard_3rd_main_bottom_3rd'>
                            <p>
                                less than €100,000
                            </p>
                            <label>
                                Level 3
                            </label>
                        </section>
                        <section className='dashboard_3rd_main_bottom_4th'>
                            <p>
                                more than €100,000
                            </p>
                            <label>
                                Level 4
                            </label>
                        </section>
                    </div>
                </div>
                <div className='dashboard_3rd_footer'>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                    </p>
                </div>
            </div>
            <div className='dashboard_4th'>
                <section className='dashboard_4th_top'>
                    <label>
                        Historical performance
                    </label>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                    </p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </section>
                <div className='dashboard_4th_middle'>
                    <div className='dashboard_4th_middle_left'>
                        <section className='dashboard_4th_middle_left_card'>
                            <p>Choose your investment style</p>
                            <select>
                                <option value="" key="">Defensive</option>
                                <option value="" key="">Option 1</option>
                                <option value="" key="">Option 2</option>
                            </select>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                            </p>
                        </section>
                        <section className='dashboard_4th_middle_left_chart'>
                            <br />
                            <label>
                                Asset Allocation
                            </label>
                            <div ref={chartRef} style={{ width: "400px", height: "300px" }} />
                        </section>
                    </div>
                    <div className='dashboard_4th_middle_right'>
                        <section className='dashboard_4th_middle_right_info'>
                            <label>
                                Overview of Historical Performance
                            </label>
                            <div className='dashboard_4th_middle_right_info_cards'>
                                <div className='dashboard_4th_middle_right_info_cards_card'>
                                    <p>
                                        <span></span>
                                        Beehive Portfolio
                                    </p>
                                    <label>
                                        40.20%
                                    </label>
                                </div>
                                <div className='dashboard_4th_middle_right_info_cards_card'>
                                    <p>
                                        <span></span>
                                        Benchmark
                                    </p>
                                    <label>
                                        48.20%
                                    </label>
                                </div>
                                <div className='dashboard_4th_middle_right_info_cards_card'>
                                    <p>
                                        <span></span>
                                        Competitor's
                                    </p>
                                    <label>
                                        33.50%
                                    </label>
                                </div>
                            </div>
                        </section>
                        <section className='dashboard_4th_middle_right_graph'>
                            <div ref={graphRef} style={{ width: "100%", height: "100%" }} />
                        </section>
                    </div>
                </div>
                <section className='dashboard_4th_bottom'>
                    <div>
                        This is a future projection and it depends on the style of investment.
                    </div>
                </section>
            </div>
            <br />
            <div className='dashboard_5th'>
                <section className='dashboard_5th_top'>
                    <label>
                        What our client say
                    </label>
                    <p>
                        Hear first-hand from our incredible community of customers.
                    </p>
                </section>
                <section className='dashboard_5th_bottom'>
                    <div className='dashboard_5th_bottom_cards'>
                        <section className='dashboard_5th_bottom_cards_icon'>
                            <span className="fa fa-star checked" style={{
                                color: 'gold'
                            }} />
                            <span className="fa fa-star checked" style={{
                                color: 'gold'
                            }} />
                            <span className="fa fa-star checked" style={{
                                color: 'gold'
                            }} />
                            <span className="fa fa-star checked" style={{
                                color: 'gold'
                            }} />
                            <span className="fa fa-star" />
                        </section>
                        <section className='dashboard_5th_bottom_cards_content'>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s                            </p>
                        </section>
                        <section className='dashboard_5th_bottom_cards_profile'>
                            <img src="Anonymous.png" alt="" />
                            <span>
                                <p>Olivia Albrtoss</p>
                                <p>@olly</p>
                            </span>
                        </section>
                    </div>
                    <div className='dashboard_5th_bottom_cards'>
                        <section className='dashboard_5th_bottom_cards_icon'>
                            <span className="fa fa-star checked" style={{
                                color: 'gold'
                            }} />
                            <span className="fa fa-star checked" style={{
                                color: 'gold'
                            }} />
                            <span className="fa fa-star checked" style={{
                                color: 'gold'
                            }} />
                            <span className="fa fa-star checked" style={{
                                color: 'gold'
                            }} />
                            <span className="fa fa-star" />
                        </section>
                        <section className='dashboard_5th_bottom_cards_content'>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s                            </p>
                        </section>
                        <section className='dashboard_5th_bottom_cards_profile'>
                            <img src="Anonymous.png" alt="" />
                            <span>
                                <p>Olivia Albrtoss</p>
                                <p>@olly</p>
                            </span>
                        </section>
                    </div>
                    <div className='dashboard_5th_bottom_cards'>
                        <section className='dashboard_5th_bottom_cards_icon'>
                            <span className="fa fa-star checked" style={{
                                color: 'gold'
                            }} />
                            <span className="fa fa-star checked" style={{
                                color: 'gold'
                            }} />
                            <span className="fa fa-star checked" style={{
                                color: 'gold'
                            }} />
                            <span className="fa fa-star checked" style={{
                                color: 'gold'
                            }} />
                            <span className="fa fa-star" />
                        </section>
                        <section className='dashboard_5th_bottom_cards_content'>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s                            </p>
                        </section>
                        <section className='dashboard_5th_bottom_cards_profile'>
                            <img src="Anonymous.png" alt="" />
                            <span>
                                <p>Olivia Albrtoss</p>
                                <p>@olly</p>
                            </span>
                        </section>
                    </div>
                </section>
            </div>
            <div className='dashboard_6th'>
                <section className='dashboard_6th_top'>
                    <label>
                        Historical performance
                    </label>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                    </p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </section>
                <div className='dashboard_6th_middle'>
                    <div className='dashboard_6th_middle_left'>
                        <section >
                            <p>
                                Enter details to preview how your ISA can grow
                            </p>
                            <div>
                                <label>
                                    One-time contribution
                                </label>
                                <input
                                    type="text"
                                    placeholder='€500'
                                />
                            </div>
                            <br />
                            <div>
                                <label>
                                    Monthly contribution
                                </label>
                                <input
                                    type="text"
                                    placeholder='€500'
                                />
                            </div>
                        </section>
                        <section className='dashboard_6th_middle_left_btn'>
                            <button>
                                Calculate
                            </button>
                        </section>

                    </div>
                    <div className='dashboard_6th_middle_right'>
                        <section className='dashboard_6th_middle_right_info'>
                            <div className='dashboard_6th_middle_right_info_cards'>
                                <div className='dashboard_6th_middle_right_info_cards_card'>
                                    <p>
                                        <span></span>
                                        Beehive Portfolio
                                    </p>
                                    <label>
                                        40.20%
                                    </label>
                                </div>
                                <div className='dashboard_6th_middle_right_info_cards_card'>
                                    <p>
                                        <span></span>
                                        Benchmark
                                    </p>
                                    <label>
                                        48.20%
                                    </label>
                                </div>
                                <div className='dashboard_6th_middle_right_info_cards_card'>
                                    <p>
                                        <span></span>
                                        Competitor's
                                    </p>
                                    <label>
                                        33.50%
                                    </label>
                                </div>
                            </div>
                        </section>
                        <section className='dashboard_6th_middle_right_graph'>
                            <div ref={graph2Ref} style={{ width: "100%", height: "80%" }} />
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                <br />
                                <br />
                                printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </section>
                    </div>
                </div>
                <section className='dashboard_6th_bottom'>
                    <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                </section>
            </div>
            <br /><br />
            <div className='dashboard_7th'>
                <section className='dashboard_7th_main'>
                    <label>
                        Frequently asked questions
                    </label>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                    </p>
                    <Collapse items={items} defaultActiveKey={['1']} />
                </section>
            </div>
            <div className='dashboard_8th'>
                <section className='dashboard_8th_top'>
                    <label>
                        Other userful investments services we provideś
                    </label>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                    </p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </section>
                <div className='dashboard_8th_middle'>
                    <section className='dashboard_8th_middle_top'>
                        <div className='dashboard_8th_middle_cards'>
                            <section className='dashboard_8th_middle_cards_icon'>
                                <i className="bi bi-bag-heart" />
                            </section>
                            <section className='dashboard_8th_middle_cards_content'>
                                <label>
                                    Expertly Managed Portfolios
                                </label>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </p>
                                <a href="#">Learn more &nbsp;<i className="bi bi-arrow-right" /></a>
                            </section>
                        </div>
                        <div className='dashboard_8th_middle_cards'>
                            <section className='dashboard_8th_middle_cards_icon'>
                                <i className="bi bi-bag-heart" />
                            </section>
                            <section className='dashboard_8th_middle_cards_content'>
                                <label>
                                    Expertly Managed Portfolios
                                </label>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </p>
                                <a href="#">Learn more &nbsp;<i className="bi bi-arrow-right" /></a>
                            </section>
                        </div>
                    </section>
                    <section className='dashboard_8th_middle_bottom'>
                        <div className='dashboard_8th_middle_cards'>
                            <section className='dashboard_8th_middle_cards_icon'>
                                <i className="bi bi-bag-heart" />
                            </section>
                            <section className='dashboard_8th_middle_cards_content'>
                                <label>
                                    Expertly Managed Portfolios
                                </label>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </p>
                                <a href="#">Learn more &nbsp;<i className="bi bi-arrow-right" /></a>
                            </section>
                        </div>
                        <div className='dashboard_8th_middle_cards'>
                            <section className='dashboard_8th_middle_cards_icon'>
                                <i className="bi bi-bag-heart" />
                            </section>
                            <section className='dashboard_8th_middle_cards_content'>
                                <label>
                                    Expertly Managed Portfolios
                                </label>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </p>
                                <a href="#">Learn more &nbsp;<i className="bi bi-arrow-right" /></a>
                            </section>
                        </div>
                    </section>
                </div>
                <section className='dashboard_8th_bottom'>
                    <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    </div>
                </section>
            </div>
            <br /><br />
            <div className='dashboard_footer'>
                <header>
                    <section className='dashboard_footer_col1'>
                        <label>
                            LOGO
                        </label>
                        <p>
                            16 Caefai Bay Road
                            <br />
                            Tempal Ewell
                            <br />
                            CT16 6NT
                            <br />
                            Country: United Kingdom
                        </p>
                        <p>
                            Authorized and regulated by the Financial Conduct Authority
                        </p>
                    </section>
                    <section className='dashboard_footer_col2'>
                        <label>
                            Product
                        </label>
                        <p>
                            Stocks & Shares ISA
                        </p>
                        <p>
                            Stocks & Shares Lifetime ISA
                        </p>
                        <p>
                            Stocks & Shares Junior ISA
                        </p>
                        <p>
                            General Investments
                        </p>
                        <p>
                            Self-Invested Personal Pension
                        </p>
                    </section>
                    <section className='dashboard_footer_col3'>
                        <label>
                            Tools
                        </label>
                        <p>
                            Compound Returns Calculator
                        </p>
                        <p>
                            ISA Calculator
                        </p>
                        <p>
                            Pension Calculator
                        </p>
                        <p>
                            Portofolio Comparator
                        </p>
                    </section>
                    <section className='dashboard_footer_col4'>
                        <label>
                            Company
                        </label>
                        <p>
                            About US
                        </p>
                        <p>
                            Pricing
                        </p>
                        <p>
                            Help
                        </p>
                    </section>
                    <section className='dashboard_footer_col5'>
                        <label>
                            Legal
                        </label>
                        <p>
                            Terms
                        </p>
                        <p>
                            Privacy
                        </p>
                        <p>
                            Cookies
                        </p>
                        <p>
                            Licenses
                        </p>
                    </section>
                </header>
                <footer>
                    © 2077 Beehive Investments. All right reserved.
                </footer>
            </div>
        </div>
    </>
}

export default Dashboard;

