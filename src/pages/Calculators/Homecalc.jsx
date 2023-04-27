// import React from 'react'

// const tenure = [
//   {
//     value: 5
//   },
//   {
//     value: 10
//   },
//   {
//     value: 15
//   },
//   {
//     value: 20
//   },
//   {
//     value: 25
//   }
// ]
// const Homecalc = () => {
//   return (
//     <>
//     <div class=" col-lg-12 mx-lg-auto me-lg-2 container" role=document>
// 		<div class="content row">
// 			<main >
// 				<article class="">
// 					<div class=page-header>
// 						<h1>
// 							Calculate your EMI For Personal Loan , Business Loan & Car Loan </h1>
// 					</div>
				
// 					<div class=calculatorcontainer>
// 						<div class=emicalculatorcontainer>
// 							<div id=loanformcontainer class="row">
// 								<div id=emicalculatordashboard class="col-sm-8 col-lg-12">
// 									<ul class=loanproduct-nav>
										
// 										<li id=personal-loan class="active "><a href=#>Personal Loan</a></li>
// 										<li id=home-loan ><a  href=#>Home Loan</a></li>
// 										<li id=car-loan><a href=#>Car Loan</a></li>
// 									</ul>
// 									<div class=cleardiv ></div>
// 									<div class="mt-4" id=emicalculatorinnerformwrapper>
// 										<form id=emicalculatorform>
// 											<div class=form-horizontal id=emicalculatorinnerform>
// 												<div class=" d-flex sep mt-3 m-4 flex-sm-column flex-lg-row g-4  form-group lamount">
// 													<label class="col-lg-4   control-label" for=loanamount>Home Loan
// 														Amount</label>
// 													<div class=col-lg-6>
// 														<div class=input-group>
// 															<input class=form-control id=loanamount name=loanamount
// 																value=25,00,000 type=text>
// 															<div class=input-group-append>
// 																<span class=input-group-text>₹</span>
// 															</div>
// 														</div>
// 													</div>
// 												</div>
												
// 												<div id=loanamountslider></div>
// 												<div id=loanamountsteps class=steps>
// 													<span class=tick style="left: 0%;">|<br><span
// 															class=marker>0</span></span>
// 													<span class="tick d-none d-sm-block" style="left: 12.5%;">|<br><span
// 															class=marker>25L</span></span>
// 													<span class=tick style="left: 25%;">|<br><span
// 															class=marker>50L</span></span>
// 													<span class="tick d-none d-sm-block" style="left: 37.5%;">|<br><span
// 															class=marker>75L</span></span>
// 													<span class=tick style="left: 50%;">|<br><span
// 															class=marker>100L</span></span>
// 													<span class="tick d-none d-sm-block" style="left: 62.5%;">|<br><span
// 															class=marker>125L</span></span>
// 													<span class=tick style="left: 75%;">|<br><span
// 															class=marker>150L</span></span>
// 													<span class="tick d-none d-sm-block" style="left: 87.5%;">|<br><span
// 															class=marker>175L</span></span>
// 													<span class=tick style="left: 100%;">|<br><span
// 															class=marker>200L</span></span>
// 												</div>
// 												<div class="sep row  mt-3 m-4 form-group lint">
// 													<label class="col-lg-4 control-label" for=loaninterest>Interest
// 														Rate</label>
// 													<div class=col-lg-6>
// 														<div class=input-group>
// 															<input class=form-control id=loaninterest name=loaninterest
// 																value=10.5 type=text>
// 															<div class=input-group-append>
// 																<span class=input-group-text>%</span>
// 															</div>
// 														</div>
// 													</div>
// 												</div>
// 												<div id=loaninterestslider></div>
// 												<div id=loanintereststeps class=steps>
// 													<span class=tick style="left: 0%;">|<br><span
// 															class=marker>5</span></span>
// 													<span class=tick style="left: 16.67%;">|<br><span
// 															class=marker>7.5</span></span>
// 													<span class=tick style="left: 33.34%;">|<br><span
// 															class=marker>10</span></span>
// 													<span class=tick style="left: 50%;">|<br><span
// 															class=marker>12.5</span></span>
// 													<span class=tick style="left: 66.67%;">|<br><span
// 															class=marker>15</span></span>
// 													<span class=tick style="left: 83.34%;">|<br><span
// 															class=marker>17.5</span></span>
// 													<span class=tick style="left: 100%;">|<br><span
// 															class=marker>20</span></span>
// 												</div>
// 												<div class="sep mt-3 m-4 row form-group lterm">
// 													<label class="col-lg-4 control-label" for=loanterm>Loan
// 														Tenure</label>
// 													<div class=col-lg-6>
// 														<div class=loantermwrapper>
// 															<div class=input-group>
// 																<input class=form-control id=loanterm name=loanterm
// 																	value=20 type=text>
// 																<div class="input-group-append tenure-choice"
// 																	data-toggle=buttons>
// 																	<div class="btn-group btn-group-toggle"
// 																		data-toggle=buttons>
// 																		<label class="btn btn-secondary active"> <input
// 																				type=radio name=loantenure id=loanyears
// 																				value=loanyears tabindex=4
// 																				autocomplete=off checked=checked>Yr
// 																		</label>
// 																		<label class="btn btn-secondary"> <input
// 																				type=radio name=loantenure id=loanmonths
// 																				value=loanmonths tabindex=5
// 																				autocomplete=off>Mo </label>
// 																	</div>
// 																</div>
// 															</div>
// 														</div>
// 													</div>
// 												</div>
// 												<div id=loantermslider></div>
// 												<div id=loantermsteps class=steps>
// 													<span class=tick style="left: 0%;">|<br><span
// 															class=marker>0</span></span>
// 													<span class=tick style="left: 16.67%;">|<br><span
// 															class=marker>5</span></span>
// 													<span class=tick style="left: 33.33%;">|<br><span
// 															class=marker>10</span></span>
// 													<span class=tick style="left: 50%;">|<br><span
// 															class=marker>15</span></span>
// 													<span class=tick style="left: 66.67%;">|<br><span
// 															class=marker>20</span></span>
// 													<span class=tick style="left: 83.33%;">|<br><span
// 															class=marker>25</span></span>
// 													<span class=tick style="left: 100%;">|<br><span
// 															class=marker>30</span></span>
// 												</div>
// 												<div id=leschemewrapper class="sep toggle-visible">
// 													<div class="sep row form-group escheme">
// 														<label class="col-lg-4 control-label" for=emischeme>EMI
// 															Scheme</label>
// 														<div class=col-lg-8>
// 															<div class="input-group emischemes">
// 																<div class="btn-group btn-group-toggle add-check"
// 																	data-toggle=buttons>
// 																	<label class="btn btn-secondary"> <input type=radio
// 																			name=emischeme id=emiadvance
// 																			value=emiadvance tabindex=4
// 																			autocomplete=off>EMI in Advance </label>
// 																	<label class="btn btn-secondary active"> <input
// 																			type=radio name=emischeme id=emiarrears
// 																			value=emiarrears tabindex=5 autocomplete=off
// 																			checked=checked>EMI in Arrears </label>
// 																</div>
// 															</div>
// 														</div>
// 													</div>
// 												</div>
// 											</div>
// 											<input id=loanproduct name=loanproduct value type=hidden>
// 											<input id=loanstartdate name=loanstartdate value type=hidden>
// 											<input id=loanyearformat name=loanyearformat value type=hidden>
// 											<input id=loandata name=loandata value type=hidden>
// 											<input id=calcversion name=calcversion value=4.0 type=hidden>
// 										</form>
// 										<div class="row gutter-left gutter-right">
											
// 											<div id=emipiechart
// 												class="no-gutter-left no-gutter-right col-sm-7 col-md-6 highcharts-container">
// 											</div>
// 											<div id=emipaymentsummary
// 												class="col-sm-5 col-md-6 no-gutter-left no-gutter-right">
// 												<div id=emiamount>
// 													<h4>Loan EMI</h4>
// 													<p>₹<span></span></p>
// 												</div>
// 												<div id=emitotalinterest>
// 													<h4>Total Interest Payable</h4>
// 													<p>₹<span></span></p>
// 												</div>
// 												<div id=emitotalamount class=column-last>
// 													<h4>Total <br>(Principal + Interest)</h4>
// 													<p>₹<span></span></p>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>

// 							</div>

// 							<div id=emipaymentdetails>
// 								<div id=emibarchart class="hidden-ts highcharts-container"></div>
// 								<div id=emipaymenttable></div>
// 							</div>
// 						</div>
// 					</div>
// 				</article>
// 			</main>
// 		</div>
// 	</div>
//     </>
//   )
// }

// export default Homecalc
