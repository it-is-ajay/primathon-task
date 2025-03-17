import './index.scss';

function Dashboard() {
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
                        <label>
                            What is Stock & Share ISA ?
                        </label>
                        <p>
                            A stocks and Shares ISA is  a tax-efficient account for investing in stocks, bonds, ETF's and more. Profits, dividends and interest are tax-free, making it deal for long-term wealth growth.
                        </p>
                        <p>
                            This tax year the ISA allowance is E20,000.
                        </p>
                        <button>
                            Start Investing Now
                            &nbsp;<i className="bi bi-arrow-right" />
                        </button>
                        <p>
                            Investing comes with inherent risks, meaning the value of your investments can go up or down, and you may get back less than you originally invested.
                        </p>

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

                </div>
                <section className='dashboard_4th_bottom'>

                </section >
            </div>
        </div>
    </>
}

export default Dashboard;

