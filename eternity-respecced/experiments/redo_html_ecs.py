import re

ecs = '''
                    <tr>
                        <td>
                            <div class="eterchallengediv" id="eterc3div" style="height: 140px;">
                                <button class="challengeunlockbtn" onclick="attemptEterChallUnlock(3)">Unlock this challenge. Requires 20000 + 2000x eighth dimensions, costs 50 time theorems.</button>
                                <br/>
                                <span>Dimensions 5-8 don't produce anything. Dimensional sacrifice is disabled.</span>
                                <br>
                                <br>
                                <div class="outer">
                                    <button id="eterc3" class="challengesbtn" onclick="startEternityChallenge(3, new Decimal('1e500'), new Decimal('1e100'))">Start</button>
                                    <br>
                                    <span id="eterc3goal">Goal: 1e500 + 1e100^x</span><br>
                                    <span>Reward: Increase the multiplier for buying 10 dimensions, currently 2.2 + x</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="eterchallengediv" id="eterc4div" style="height: 140px;">
                                <button class="challengeunlockbtn" onclick="attemptEterChallUnlock(4)">Unlock this challenge. Requires 100000 + 100000x infinities, costs 60 time theorems.</button>
                                <br/>
                                <span>All generators and multipliers of infinitied stat are disabled.</span>
                                <br>
                                <br>
                                <div class="outer">
                                    <button id="eterc4" class="challengesbtn" onclick="startEternityChallenge(4, new Decimal('1e2800'), new Decimal('1e400'))">Start</button>
                                    <br>
                                    <span id="eterc4goal">Goal: 1e2800 + 1e400^x</span><br>
                                    <span>Reward: All infinity dimensions get multiplier based on infinities. Currently infinities^x.</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="eterchallengediv" id="eterc5div" style="height: 140px;">
                                <button class="challengeunlockbtn" onclick="attemptEterChallUnlock(5)">Unlock this challenge. Requires 250 + 20x galaxies, costs 80 time theorems.</button>
                                <br/>
                                <span>Galaxy costs are quadratic in eighth dimensions, rather than linear.</span>
                                <br>
                                <br>
                                <div class="outer">
                                    <button id="eterc5" class="challengesbtn" onclick="startEternityChallenge(5, new Decimal('1e600'), new Decimal('1e100'))">Start</button>
                                    <br>
                                    <span id="eterc5goal">Goal: 1e600 + 1e100^x</span><br>
                                    <span>Reward: Galaxy cost increase is less. Currently 60 - x.</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="eterchallengediv" id="eterc6div" style="height: 140px;">
                                <button class="challengeunlockbtn" onclick="attemptEterChallUnlock(6)">Unlock this challenge. Requires 50 + 5x replicanti galaxies, costs 100 time theorems.</button>
                                <br/>
                                <span>You can't get normal galaxies, but the cost of upgrading your max replicanti galaxies is massively decreased.</span>
                                <br>
                                <br>
                                <div class="outer">
                                    <button id="eterc6" class="challengesbtn" onclick="startEternityChallenge(6, new Decimal('1e700'), new Decimal('1e150'))">Start</button>
                                    <br>
                                    <span id="eterc4goal">Goal: 1e700 + 1e150^x</span><br>
                                    <span>Reward: You keep a fraction of replicanti galaxies on infinity (rounded down). Currently x / 5.</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="eterchallengediv" id="eterc7div" style="height: 140px;">
                                <button class="challengeunlockbtn" onclick="attemptEterChallUnlock(7)">Unlock this challenge. Requires 1e800000 * 1e400000**x eighth antimatter, costs 120 time theorems.</button>
                                <br/>
                                <span>There's an exponentially increasing matter that divides the multipliers on all your dimensions (not just normal ones).</span>
                                <br>
                                <br>
                                <div class="outer">
                                    <button id="eterc7" class="challengesbtn" onclick="startEternityChallenge(7, new Decimal('1e4000'), new Decimal('1e500'))">Start</button>
                                    <br>
                                    <span id="eterc7goal">Goal: 1e4000 + 1e500^x</span><br>
                                    <span>Reward: Slowly increasing multiplier on all dimensions. Currently time in eternity^(x / 5)</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="eterchallengediv" id="eterc8div" style="height: 140px;">
                                <button class="challengeunlockbtn" onclick="attemptEterChallUnlock(8)">Unlock this challenge. Requires 1e5000 * 1e1000**x infinity points, costs 160 time theorems.</button>
                                <br/>
                                <span>You can only upgrade infinity dimensions and replicanti 50 times each.</span>
                                <br>
                                <br>
                                <div class="outer">
                                    <button id="eterc8" class="challengesbtn" onclick="startEternityChallenge(4, new Decimal('1e1000'), new Decimal('1e200'))">Start</button>
                                    <br>
                                    <span id="eterc8goal">Goal: 1e1000 + 1e200^x</span><br>
                                    <span>Reward: Infinity dimensions and replicanti upgrades are cheaper. Currently upgrade price^(1 - .01 * x)</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="eterchallengediv" id="eterc9div" style="height: 140px;">
                                <button class="challengeunlockbtn" onclick="attemptEterChallUnlock(9)">Unlock this challenge. Requires 1e18000 * 1e2000 ** x infinity power, costs 200 time theorems.</button>
                                <br/>
                                <span>Infinity power doesn't affect normal dimensions. Instead it affects time dimensions with reduced effect (ln(infinity power)^7)</span>
                                <br>
                                <br>
                                <div class="outer">
                                    <button id="eterc3" class="challengesbtn" onclick="startEternityChallenge(3, new Decimal('1e1500'), new Decimal('1e250'))">Start</button>
                                    <br>
                                    <span id="eterc3goal">Goal: 1e500 + 1e100^x</span><br>
                                    <span>Reward: Infinity power affects time dimensions. Currently ln(infinity power)^(.2 * x)</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="eterchallengediv" id="eterc4div" style="height: 140px;">
                                <button class="challengeunlockbtn" onclick="attemptEterChallUnlock(10)">Unlock this challenge. Requires 1e100 * 1e20**x eternity points, costs 240 time theorems.</button>
                                <br/>
                                <span>Time and infinity dimensions are disabled, but normal dimensions are multiplied by infinities^1000.</span>
                                <br>
                                <br>
                                <div class="outer">
                                    <button id="eterc4" class="challengesbtn" onclick="startEternityChallenge(4, new Decimal('1e1000'), new Decimal('1e200'))">Start</button>
                                    <br>
                                    <span id="eterc4goal">Goal: 1e1000 + 1e200^x</span><br>
                                    <span>Reward: Normal dimensions are multiplied by infinities^(100x).</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="eterchallengediv" id="eterc3div" style="height: 140px;">
                                <button class="challengeunlockbtn" onclick="attemptEterChallUnlock(11)">Unlock this challenge. Requires 1e5e5 * 1e1e5 ** x lowest normal dimension multiplier, costs 300 time theorems.</button>
                                <span>The only normal dimension multipliers are from dimension boosts and infinity power. Other dimensions have no multipliers.</span>
                                <br>
                                <br>
                                <div class="outer">
                                    <button id="eterc3" class="challengesbtn" onclick="startEternityChallenge(3, new Decimal('1e500'), new Decimal('1e200'))">Start</button>
                                    <br>
                                    <span id="eterc3goal">Goal: 1e500 + 1e200^x</span><br>
                                    <span>Reward: Dimension boosts and infinity power affect normal dimensions more. Currently effect^(1 + .01x)</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="eterchallengediv" id="eterc4div" style="height: 140px;">
                                <button class="challengeunlockbtn" onclick="attemptEterChallUnlock(12)">Unlock this challenge. Requires 1e1000 * 1e200**x timeshards, costs 400 time theorems.</button>
                                <span>The game runs 1000x slower.</span>
                                <br>
                                <br>
                                <div class="outer">
                                    <button id="eterc12" class="challengesbtn" onclick="startEternityChallenge(12, new Decimal('1e100000'), new Decimal('1e10000'))">Start</button>
                                    <br>
                                    <span id="eterc12goal">Goal: 1e100000 + 1e10000^x</span><br>
                                    <span>Reward: Replicanti grow faster. Currently 1 + x times previous.</span>
                                </div>
                            </div>
                        </td>
                    </tr>
'''

print(re.sub(ecs, r'\<div class\=\"eterchallengediv\" id\=\"eterc4div\" style\=\"height\: 140px;">()'))
