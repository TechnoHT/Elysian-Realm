import * as data from './data';

type Gear = [data.NameAcr, data.NameAcr, data.NameAcr, data.NameAcr];
type Emblem = [data.NameAcr, data.NameAcr];
type Anchor = [data.Signet, '1' | '2'];
type SignetType = 'transitional' | 'main' | 'secondary' | 'optional';
type Priority = 'Start' | '1st' | '2nd' | 'Reinforcement' | 'Optional' | 'No';
type Guide = {
	name: string;
	acr: string;
	version: string;
	builds: {
		name?: string;
		buff?: any;
		signet: {
			[key in SignetType]?: Array<Anchor>;
		}
		emblem: Array<Emblem>;
		support: Array<Array<Array<data.NameAcr>>>;
		gear?: Array<Gear>;
		signetTable: {
			exclusive: {
				[key in Priority]?: string[];
			}
			transitional?: {
				[key: string]: string[];
			}
			main: {
				[key: string]: string[];
			}
			secondary: {
				[key: string]: string[];
			}
			optional?: {
				[key: string]: string[];
			}
		}
		notes?: string;
	}[]
};
// Argent Knight: Artemis
const aka: Guide = {
	name: 'Argent Knight: Artemis',
	acr: 'aka',
	version: '6.1',
	builds: [
		{
			signet: {
				main: [
					[data.hua, '2'],
					[data.mobius, '1'],
					[data.vv, '2']
				],
				secondary: [
					[data.griseo, '1'],
					[data.aponia, '2']
				]
			},
			emblem: [
				[data.memory, data.becauseOfYou], // early
				[data.forbiddenSeed, data.boundlessLogos], // mid
				[data.ruinedLegacy, data.boundlessLogos] // late
			],
			support: [
				[ [data.ae], [data.le, data.bke] ], // utility
				[ [data.ae], [data.hb] ] // damage
			],
			gear: [ // weapon, T, M, B
				[data.skth, data.wilt, data.wilm, data.wilb],
				[data.hawp, data.anat, data.anam, data.anab]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Frost Scythe'
					],
					[data.first]: [
						'Stellar Trials',
						'Winter Harvest'
					],
					[data.second]: [
						'Cold Moon'
					],
					[data.reinforcement]: [
						'Uranian Mirror'
					]
				},
				main: {
					[data.hua.name]: [
						data.hua.regular.dmgEle,
						data.hua.regular.dmgTotal,
						data.hua.regular.breachEle,
						data.hua.nexus2.name
					],
					[data.mobius.name]: [
						data.mobius.regular.vuln,
						data.mobius.regular.dmgEntity,
						data.mobius.regular.dmgTotal,
						data.mobius.nexus1.name,
						data.mobius.nexus1.dmgTotal,
						data.mobius.nexus1.reduce
					],
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.regular.spRestore,
						data.vv.nexus2.name,
						data.vv.nexus2.breachPhysEle
					]
				},
				secondary: {
					[data.griseo.name]: [
						data.griseo.regular.black,
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.nexus1.name,
						data.griseo.nexus1.orange
					],
					[data.aponia.name]: [
						data.aponia.regular.spRestore,
						data.aponia.regular.dmgPhysEle,
						data.aponia.regular.vuln,
						data.aponia.nexus2.name
					]
				}
			}
		}
	]
};
// Disciplinary Perdition
const aponia: Guide = {
	name: 'Disciplinary Perdition',
	acr: 'aponia',
	version: '6.5',
	builds: [
		{
			buff: [
				data.buffs[0][1],
				data.buffs[1][6],
				data.buffs[2][7],
				data.buffs[3][4]
			],
			signet: {
				main: [
					[data.aponia, '2'],
					[data.griseo, '2'],
					[data.kalpas, '2']
				],
				secondary: [
					[data.pardofelis, '1']
				],
				optional: [
					[data.sakura, '1']
				]
			},
			emblem: [
				[data.veilOfTears, data.theLonelyMoon],
				[data.rainbowOfAbsence, data.theLonelyMoon],
				[data.ruinedLegacy, data.dreamfulGold]
			],
			support: [
				[ [data.le], [data.ae, data.bke] ],
				[ [data.br], [data.hb, data.sn] ]
			],
			gear: [
				[data.loco, data.zent, data.zenm, data.zenb],
				[data.hawp, data.hant, data.hanm, data.hanb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Admonition',
						'Shelter'
					],
					[data.first]: [
						'Inclusiveness'
					],
					[data.no]: [
						'Atonement',
						'Rescue'
					]
				},
				main: {
					[data.aponia.name]: [
						data.aponia.regular.basicAtk,
						data.aponia.regular.spRestore,
						data.aponia.regular.dmgPhysEle,
						data.aponia.regular.dmgTotal,
						data.aponia.nexus2.name,
						data.aponia.nexus2.breachPhysEle,
						data.aponia.nexus2.vuln
					],
					[data.griseo.name]: [
						data.griseo.regular.blue,
						data.griseo.regular.grey,
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.nexus2.name,
						data.griseo.nexus2.orange,
						data.griseo.nexus2.green,
						data.griseo.nexus2.purple
					],
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.vuln,
						data.kalpas.regular.hp,
						data.kalpas.nexus2.name
					]
				},
				secondary: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.sakura.name]: [
						data.sakura.regular.dmgTotal,
						data.sakura.regular.vuln
					]
				}
			},
			notes: `Can pick Eden's signet <span>${data.eden.regular.spCapInitial}</span> to speed up rotations.`
		}
	]
};
// Bright Knight: Excelsis
const bke: Guide = {
	name: 'Bright Knight: Excelsis',
	acr: 'bke',
	version: '5.9',
	builds: [
		{
			signet: {
				main: [
					[data.sakura, '1'],
					[data.griseo, '2']
				],
				secondary: [
					[data.kalpas, '2'],
					[data.kosma, '2'],
					[data.aponia, '2']
				]
			},
			emblem: [
				[data.forgetMeNot, data.theLonelyMoon],
				[data.rainbowOfAbsence, data.theLonelyMoon],
				[data.stainedSakura, data.tsukimiHimiko]
			],
			support: [
				[ [data.sn], [data.le] ],
				[ [data.sa], [data.br] ]
			],
			gear: [
				[data.abfl, data.dant, data.danm, data.danb],
				[data.hawp, data.dirt, data.dirm, data.dirb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Gambit'
					],
					[data.first]: [
						'Glory'
					],
					[data.second]: [
						'Paragon'
					],
					[data.no]: [
						'Formation',
						'Holy Lance'
					]
				},
				main: {
					[data.sakura.name]: [
						data.sakura.regular.evasionAdd,
						data.sakura.regular.vuln,
						data.sakura.nexus1.name,
						data.sakura.nexus1.cd
					],
					[data.griseo.name]: [
						data.griseo.regular.black,
						data.griseo.regular.blue,
						data.griseo.regular.grey,
						data.griseo.regular.red,
						data.griseo.regular.white,
						data.griseo.regular.yellow,
						data.griseo.nexus2.name,
						data.griseo.nexus2.orange,
						data.griseo.nexus2.green,
						data.griseo.nexus2.purple
					]
				},
				secondary: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.vuln,
						data.kalpas.nexus2.name,
						data.kalpas.nexus2.breachPhysEle
					],
					[data.kosma.name]: [
						data.kosma.regular.extend,
						data.kosma.regular.ult,
						data.kosma.regular.evasion,
						data.kosma.nexus2.name,
						data.kosma.nexus2.breachPhysEle
					],
					[data.aponia.name]: [
						data.aponia.regular.spRestore,
						data.aponia.regular.dmgPhysEle,
						data.aponia.nexus2.name,
						data.aponia.nexus2.breachPhysEle,
						data.aponia.nexus2.vuln
					]
				}
			},
			notes: `<p>${data.sakura.nexus1.cd}</p>If don't have <span>Blessing of Paragon</span>.
					<p>${data.griseo.regular.grey}</p>Minimum of +2 upgrade.
					<p>${data.kalpas.nexus2.breachPhysEle}, ${data.kosma.nexus2.breachPhysEle}, ${data.aponia.nexus2.breachPhysEle}</p>If lacking impair.`
		}
	]
};
// Sweet 'n' Spicy
const carole: Guide = {
	name: 'Sweet \'n\' Spicy',
	acr: 'carole',
	version: '6.6',
	builds: [
		{
			buff: [
				data.buffs[0][3],
				data.buffs[3][6],
				data.buffs[3][7]
			],
			signet: {
				main: [
					[data.kalpas, '1']
				],
				secondary: [
					[data.kevin, '1'],
					[data.sakura, '2'],
					[data.kosma, '2'],
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.madKingsMask, data.itWillBeWritten],
				[data.burden, data.homeTown],
				[data.tinFlask, data.homeTown]
			],
			support: [
				[ [data.br], [data.sa] ],
				[ [data.ss], [data.br] ]
			],
			gear: [
				[data.obdo, data.biat, data.biam, data.biab],
				[data.miki, data.pagt, data.pagm, data.pagb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Revolution'
					],
					[data.no]: [
						'Brake',
						'Impulse',
						'Rupture',
						'Skyfall'
					]
				},
				main: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.hp,
						data.kalpas.nexus1.name,
						data.kalpas.nexus1.dmgBonus
					]
				},
				secondary: {
					[data.kevin.name]: [
						data.kevin.regular.dmgTotal,
						data.kevin.regular.dmgPhys,
						data.kevin.regular.breachPhys,
						data.kevin.regular.spRestore,
						data.kevin.nexus1.name,
						data.kevin.nexus1.effect
					],
					[data.sakura.name]: [
						data.sakura.regular.dmgTotal,
						data.sakura.regular.vuln,
						data.sakura.regular.evasionAdd,
						data.sakura.nexus2.name
					],
					[data.kosma.name]: [
						data.kosma.regular.atk,
						data.kosma.regular.evasion,
						data.kosma.regular.ult,
						data.kosma.regular.dmgShield,
						data.kosma.regular.extend,
						data.kosma.nexus2.name
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Can pick Griseo's signets <span>${data.griseo.regular.red}</span>, <span>${data.griseo.regular.yellow}</span>, and <span>${data.griseo.regular.grey}</span> as reinforcement.`
		}
	]
};
// Chrono Navi
const cn: Guide = {
	name: 'Chrono Navi',
	acr: 'cn',
	version: '7.8',
	builds: [
		{
			buff: [
				data.buffs[0][13],
				data.buffs[1][7],
				data.buffs[1][13],
				data.buffs[2][18],
				data.buffs[2][21]
			],
			signet: {
				main: [
					[data.hua, '2']
				],
				secondary: [
					[data.vv, '1'],
					[data.su, '1'],
					[data.griseo, '1']
				],
				optional: [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.memory, data.homeTown],
				[data.lightAsABodhiLeaf, data.emptyLikeShala],
				[data.heavyAsAMillionLives, data.dreamfulGold]
			],
			support: [
				[ [data.vke], [data.bke] ],
				[ [data.br], [data.ae, data.rc] ]
			],
			gear: [
				[data.rudr, data.chrt, data.chrm, data.chrb],
				[data.hawp, data.ragt, data.tham, data.ragb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Succession'
					],
					[data.first]: [
						'Time Crystal'
					],
					[data.second]: [
						'Bladepiece',
						'Constant'
					],
					[data.optional]: [
						'Final Dream'
					]
				},
				main: {
					[data.hua.name]: [
						data.hua.regular.dmgTotal,
						data.hua.regular.dmgEle,
						data.hua.regular.breachEle,
						data.hua.nexus2.name,
						data.hua.nexus2.stackCap
					]
				},
				secondary: {
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.regular.dmgRanged,
						data.vv.nexus1.name
					],
					[data.su.name]: [
						data.su.regular.combo25,
						data.su.regular.vuln,
						data.su.regular.combo60,
						data.su.regular.dmgTotal,
						data.su.nexus1.name,
						data.su.nexus1.vuln,
						data.su.nexus1.breachPhysEle
					],
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.grey,
						data.griseo.nexus1.name
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Recommended to reset for Time Crystal on 2F, other Ego signets can pick when the option is available.
					<p>${data.griseo.regular.red}</p>Buy in shop.`
		}
	]
};
const ce: Guide = {
	name: 'Cosmic Expression',
	acr: 'ce',
	version: '7.1',
	builds: [
		{
			name: 'Parry',
			buff: [
				data.buffs[0][8],
				data.buffs[3][2],
				data.buffs[3][14]
			],
			signet: {
				main: [
					[data.kosma, '1']
				],
				secondary: [
					[data.mobius, '1'],
					[data.eden, '1'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.kalpas, '2']
				]
			},
			emblem: [
				[data.fragileFriend, data.outOfReach],
				[data.forbiddenSeed, data.outOfReach],
				[data.keyToTheDeep, data.outOfReach]
			],
			support: [
				[ [data.sa], [data.bke] ],
				[ [data.ss], [data.br] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Meteorite',
						'Starlight'
					],
					[data.no]: [
						'Anchor',
						'Dazzle',
						'Shining Blade'
					]
				},
				main: {
					[data.kosma.name]: [
						data.kosma.regular.ult,
						data.kosma.regular.atk,
						data.kosma.regular.evasion,
						data.kosma.regular.dmgShield,
						data.kosma.regular.extend,
						data.kosma.nexus1.name,
						data.kosma.nexus1.breachPhysEle,
						data.kosma.nexus1.dmgPhysEle,
						data.kosma.nexus1.vuln
					]
				},
				secondary: {
					[data.mobius.name]: [
						data.mobius.regular.dmgTotal,
						data.mobius.regular.dmgEntity,
						data.mobius.regular.cdReduc,
						data.mobius.regular.vuln,
						data.mobius.nexus1.name
					],
					[data.eden.name]: [
						data.eden.regular.dmgTotal,
						data.eden.regular.dmgPhysEle,
						data.eden.regular.spCapInitial,
						data.eden.nexus1.name,
						data.eden.nexus1.vuln
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.regular.curr,
						data.pardofelis.regular.currKill,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.vuln,
						data.kalpas.regular.hp,
						data.kalpas.nexus2.name
					]
				}
			},
			notes: `Rotation : tap weapon active, hold evasion to use up KE, basic ATK to replenish KE, tap weapon active again and repeat; recommended to swap sigil on 6F, roll Kosma on 7F.
					Can pick Griseo's signets <span>${data.griseo.regular.red}</span>, and <span>${data.griseo.regular.yellow}</span>, or Sakura's signets <span>${data.sakura.regular.dmgTotal}</span>, and <span>${data.sakura.regular.vuln}</span>, or Vill-V's signet <span>${data.vv.regular.dmgWeap}</span> as reinforcement.
					<p>${data.pardofelis.regular.curr}, ${data.pardofelis.regular.currKill}</p>Buy in early shop.`
		},
		{
			name: 'Basic',
			buff: [
				data.buffs[0][8],
				data.buffs[3][2],
				data.buffs[3][14]
			],
			signet: {
				main: [
					[data.kosma, '1']
				],
				secondary: [
					[data.mobius, '1'],
					[data.su, '1'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.griseo, '2']
				]
			},
			emblem: [
				[data.fragileFriend, data.outOfReach],
				[data.forbiddenSeed, data.outOfReach],
				[data.heavyAsAMillionLives, data.outOfReach]
			],
			support: [
				[ [data.sa], [data.bke] ],
				[ [data.ss], [data.br] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Anchor',
						'Dazzle'
					],
					[data.no]: [
						'Meteorite',
						'Shining Blade',
						'Starlight'
					]
				},
				main: {

					[data.kosma.name]: [
						data.kosma.regular.ult,
						data.kosma.regular.atk,
						data.kosma.regular.evasion,
						data.kosma.regular.dmgShield,
						data.kosma.regular.extend,
						data.kosma.nexus1.name,
						data.kosma.nexus1.breachPhysEle,
						data.kosma.nexus1.dmgPhysEle
					]
				},
				secondary: {
					[data.mobius.name]: [
						data.mobius.regular.dmgTotal,
						data.mobius.regular.dmgEntity,
						data.mobius.regular.cdReduc,
						data.mobius.regular.vuln,
						data.mobius.nexus1.name
					],
					[data.su.name]: [
						data.su.regular.dmgTotal,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.regular.vuln,
						data.su.nexus1.name
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.regular.curr,
						data.pardofelis.regular.currKill,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.black
					]
				}
			},
			notes: `Rotation : evade > basic > combo > ultimate > evade > basic > combo > 2 sets of basic+combo > ultimate > repeat; recommended to swap sigil on 6F, roll Kosma on 7F.
					Can pick Eden's signets <span>${data.eden.regular.dmgTotal}</span>, and <span>${data.eden.regular.dmgPhysEle}</span>, or Vill-V's signets <span>${data.vv.regular.vuln}</span>, and <span>${data.vv.regular.dmgTotal}</span> as reinforcement.
					<p>${data.pardofelis.regular.curr}, ${data.pardofelis.regular.currKill}</p>Buy in early shop.`
		}
	]
};
// Dea Anchora
const da: Guide = {
	name: 'Dea Anchora',
	acr: 'da',
	version: '6.4',
	builds: [
		{
			buff: [
				data.buffs[0][1],
				data.buffs[1][3],
				data.buffs[2][3],
				data.buffs[3][2]
			],
			signet: {
				main: [
					[data.kevin, '1'],
					[data.aponia, '2']
				],
				secondary: [
					[data.eden, '2'],
					[data.griseo, '2'],
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.burden, data.theLonelyMoon],
				[data.veilOfTears, data.becauseOfYou],
				[data.keyToTheDeep, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.le, data.bke] ],
				[ [data.ae], [data.br, data.ma] ]
			],
			gear: [
				[data.saas, data.shat, data.sham, data.shab],
				[data.hawp, data.aslt, data.aslm, data.aslb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Stars'
					],
					[data.first]: [
						'Sheen'
					],
					[data.second]: [
						'Halo'
					],
					[data.no]: [
						'Brilliance',
						'Gale'
					]
				},
				main: {
					[data.kevin.name]: [
						data.kevin.regular.breachEle,
						data.kevin.regular.dmgEle,
						data.kevin.regular.dmgTotal,
						data.kevin.regular.spRestore,
						data.kevin.nexus1.name
					],
					[data.aponia.name]: [
						data.aponia.regular.spRestore,
						data.aponia.regular.dmgPhysEle,
						data.aponia.nexus2.name,
						data.aponia.nexus2.dmgPhysEle,
						data.aponia.nexus2.vuln
					]
				},
				secondary: {
					[data.eden.name]: [
						data.eden.regular.dmgPhysEle,
						data.eden.regular.dmgTotal,
						data.eden.regular.spCapInitial,
						data.eden.nexus2.name,
						data.eden.nexus2.spCapRestore
					],
					[data.griseo.name]: [
						data.griseo.regular.black,
						data.griseo.regular.yellow
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Can pick Kalpas's signet <span>${data.kalpas.regular.vuln}</span> as reinforcement.`
		}
	]
};
// Dreamweaver
const dw: Guide = {
	name: 'Dreamweaver',
	acr: 'dw',
	version: '7.7',
	builds: [
		{
			buff: [
				data.buffs[0][12],
				data.buffs[1][13],
				data.buffs[2][9],
				data.buffs[3][21]
			],
			signet: {
				main: [
					[data.mobius, '2']
				],
				secondary: [
					[data.hua, '2'],
					[data.vv, '1'],
					[data.eden, '1']
				],
				optional: [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.psuedoMiracle, data.fallingInPastLight],
				[data.forbiddenSeed, data.fallingInPastLight],
				[data.farawayShip, data.dreamfulGold]
			],
			support: [
				[ [data.vc], [data.sn] ],
				[ [data.vc], [data.br, data.sa] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Thousand Thoughts'
					],
					[data.optional]: [
						'Forms',
						'Oneiromancy'
					],
					[data.no]: [
						'Absoluteness',
						'Legacy'
					]
				},
				main: {
					[data.mobius.name]: [
						data.mobius.regular.dmgTotal,
						data.mobius.regular.dmgEntity,
						data.mobius.regular.vuln,
						data.mobius.nexus2.name
					]
				},
				secondary: {
					[data.hua.name]: [
						data.hua.regular.dmgTotal,
						data.hua.regular.dmgPhys,
						data.hua.regular.breachPhys,
						data.hua.nexus2.name
					],
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.regular.dmgRanged,
						data.vv.nexus1.name,
						data.vv.nexus1.breachPhys
					],
					[data.eden.name]: [
						data.eden.regular.dmgTotal,
						data.eden.regular.dmgPhysEle,
						data.eden.regular.spCapInitial,
						data.eden.nexus1.name
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Recommended to swap sigil on 5F.
					Cam pick Griseo's signets <span>${data.griseo.regular.red}</span>, <span>${data.griseo.regular.yellow}</span> and <span>${data.griseo.regular.black}</span> as reinforcement.`
		}
	]
};
// Golden Diva
const eden: Guide = {
	name: 'Golden Diva',
	acr: 'eden',
	version: '6.6',
	builds: [
		{
			buff: [
				data.buffs[0][3],
				data.buffs[3][6],
				data.buffs[3][8]
			],
			signet: {
				main: [
					[data.eden, '1'],
					[data.kosma, '1']
				],
				secondary: [
					[data.kalpas, '2'],
					[data.pardofelis, '1'],
					[data.griseo, '2']
				]
			},
			emblem: [
				[data.goldGoblet, data.dreamfulGold],
				[data.fragileFriend, data.outOfReach],
				[data.keyToTheDeep, data.outOfReach]
			],
			support: [
				[ [data.le], [data.ae, data.bke] ],
				[ [data.le], [data.br, data.rc] ]
			],
			gear: [
				[data.doin, data.hant, data.hanm, data.hanb],
				[data.ecpa, data.zent, data.linm, data.zenb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Arioso',
						'Symphony'
					],
					[data.no]: [
						'Cadenza',
						'Conerto',
						'Fugue'
					]
				},
				main: {
					[data.eden.name]: [
						data.eden.regular.dmgPhysEle,
						data.eden.regular.dmgTotal,
						data.eden.regular.spRestore,
						data.eden.nexus1.name,
						data.eden.nexus1.spRestore,
						data.eden.nexus1.vuln
					],
					[data.kosma.name]: [
						data.kosma.regular.extend,
						data.kosma.regular.ult,
						data.kosma.regular.atk,
						data.kosma.regular.dmgShield,
						data.kosma.regular.spRestore,
						data.kosma.nexus1.name,
						data.kosma.nexus1.breachPhysEle,
						data.kosma.nexus1.dmgPhysEle
					]
				},
				secondary: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.vuln,
						data.kalpas.regular.hp,
						data.kalpas.nexus2.name
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.nexus1.name
					],
					[data.griseo.name]: [
						data.griseo.regular.grey,
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.nexus2.name
					]
				}
			},
			notes: `Can pick Aponias's nexus <span>${data.aponia.nexus2.name}</span> as reinforcement.`
		}
	]
};
// Miss Pink Elf
const elysia: Guide = {
	name: 'Miss Pink Elf♪',
	acr: 'elysia',
	version: '6.9',
	builds: [
		{
			buff: [
				data.buffs[1][1],
				data.buffs[2][13],
				data.buffs[3][12]
			],
			signet: {
				main: [
					[data.vv, '1']
				],
				secondary: [
					[data.su, '1'],
					[data.griseo, '1'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.kalpas, '2']
				]
			},
			emblem: [
				[data.psuedoMiracle, data.fallingInPastLight],
				[data.lightAsABodhiLeaf, data.fallingInPastLight],
				[data.farawayShip, data.dreamfulGold]
			],
			support: [
				[ [data.le], [data.bke] ],
				[ [data.vc], [data.le, data.br] ]
			],
			gear: [
				[data.whpa, data.elyt, data.elym, data.elyb],
				[data.hawp, data.biat, data.biam, data.biab]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Purity',
						'Zenith'
					],
					[data.optional]: [
						'Beauty'
					],
					[data.no]: [
						'Benevolence',
						'Love'
					]
				},
				main: {
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.regular.dmgRanged,
						data.vv.regular.spRestore,
						data.vv.nexus1.name,
						data.vv.nexus1.blades,
						data.vv.nexus1.breachPhys
					]
				},
				secondary: {
					[data.su.name]: [
						data.su.regular.vuln,
						data.su.regular.combo60,
						data.su.regular.dmgTotal,
						data.su.nexus1.name,
						data.su.nexus1.vuln,
						data.su.nexus1.breachPhysEle
					],
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.black,
						data.griseo.regular.grey,
						data.griseo.nexus1.name
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.hp,
						data.kalpas.nexus2.name
					]
				}
			},
			notes: 'Recommended to bring LE at the start; recommended to swap sigil on 6F, roll Vill-V on 7F; if less than SS, recommended to hit 1.75.'
		}
	]
};
// Prinzessin der Verurteilung
const fischl: Guide = {
	name: 'Prinzessin der Verurteilung',
	acr: 'fischl',
	version: '6.5',
	builds: [
		{
			buff: [
				data.buffs[1][5],
				data.buffs[1][6],
				data.buffs[2][6],
				data.buffs[2][7]
			],
			signet: {
				main: [
					[data.aponia, '2']
				],
				secondary: [
					[data.hua, '2'],
					[data.griseo, '1'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.mobius, '1']

				]
			},
			emblem: [
				[data.veilOfTears, data.outOfReach],
				[data.memory, data.outOfReach],
				[data.ruinedLegacy, data.fallingInPastLight]
			],
			support: [
				[ [data.ae], [data.bke] ],
				[ [data.ae], [data.br] ]
			],
			gear: [
				[data.whpa, data.want, data.wanm, data.wanb],
				[data.miwa, data.hant, data.hanm, data.hanb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Midnight'
					],
					[data.first]: [
						'Retrtibution'
					],
					[data.optional]: [
						'Fate'
					],
					[data.no]: [
						'Dark Wings',
						'Nightfall'
					]
				},
				main: {
					[data.aponia.name]: [
						data.aponia.regular.basicAtk,
						data.aponia.regular.spRestore,
						data.aponia.regular.dmgPhysEle,
						data.aponia.regular.dmgTotal,
						data.aponia.nexus2.name,
						data.aponia.nexus2.dmgPhysEle,
						data.aponia.nexus2.breachPhysEle,
						data.aponia.nexus2.vuln
					]
				},
				secondary: {
					[data.hua.name]: [
						data.hua.regular.breachEle,
						data.hua.regular.dmgTotal,
						data.hua.regular.dmgEle,
						data.hua.nexus2.name
					],
					[data.griseo.name]: [
						data.griseo.regular.black,
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.grey
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.mobius.name]: [
						data.mobius.regular.vuln,
						data.mobius.regular.dmgEntity,
						data.mobius.regular.dmgTotal,
						data.mobius.nexus1.name
					]
				}
			},
			notes: `Can pick Kalpas's signets <span>${data.kalpas.regular.dmgTotal}</span>, and <span>${data.kalpas.regular.dmgPhysEle}</span>, and Su signets as reinforcement.
					<p>${data.aponia.nexus2.breachPhysEle}</p>Priority.`
		}
	]
};
// Fallen Rosemary
const fr: Guide = {
	name: 'Fallen Rosemary',
	acr: 'fr',
	version: '7.8',
	builds: [
		{
			buff: [
				data.buffs[0][13],
				data.buffs[1][13],
				data.buffs[2][21],
				data.buffs[3][20]
			],
			signet: {
				main: [
					[data.hua, '2']
				],
				secondary: [
					[data.su, '1'],
					[data.kalpas, '1'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.griseo, '1']
				]
			},
			emblem: [
				[data.memory, data.homeTown],
				[data.lightAsABodhiLeaf, data.emptyLikeShala],
				[data.heavyAsAMillionLives, data.dreamfulGold]
			],
			support: [
				[ [data.le], [data.ae] ],
				[ [data.br], [data.ae] ]
			],
			gear: [
				[data.irhe, data.hant, data.hanm, data.hanb],
				[data.hawp, data.iret, data.irem, data.ireb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Valfreyja'
					],
					[data.first]: [
						'God Eater'
					],
					[data.optional]: [
						'Nocturne',
						'Spirit Servants'
					],
					[data.no]: [
						'Soul Siphon'
					]
				},
				main: {
					[data.hua.name]: [
						data.hua.regular.breachEle,
						data.hua.regular.dmgTotal,
						data.hua.regular.dmgEle,
						data.hua.nexus2.name,
						data.hua.nexus2.stackCap
					]
				},
				secondary: {
					[data.su.name]: [
						data.su.regular.dmgTotal,
						data.su.regular.vuln,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.regular.spRestore,
						data.su.nexus1.name,
						data.su.nexus1.vuln
					],
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.hp,
						data.kalpas.regular.vuln,
						data.kalpas.nexus1.name,
						data.kalpas.nexus1.fire,
						data.kalpas.nexus1.dmgBonus
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.grey,
						data.griseo.nexus1.name
					]
				}
			},
			notes: `Recommended to reset for God Eater on 2F; recommended to swap sigil on 5F; Rotation: When not enough SP to ult, use basic and charge ATK to regen SP, ultimate whenever available; keep using God Eater to refresh bar for more damage.
					Can pick Eden's signet <span>${data.eden.regular.spCapInitial}</span>, or Kosma's signets <span>${data.kosma.regular.ult}</span>, <span>${data.kosma.regular.dmgShield}</span>, and <span>${data.kosma.regular.basic}</span> as reinforcement.`
		}
	]
};
// Fenghuang of Vicissitude
const fv: Guide = {
	name: 'Fenghuang of Vicissitude',
	acr: 'fv',
	version: '7.8',
	builds: [
		{
			buff: [
				data.buffs[0][13],
				data.buffs[1][13],
				data.buffs[2][21],
				data.buffs[3][20]
			],
			signet: {
				main: [
					[data.kalpas, '1']
				],
				secondary: [
					[data.su, '1'],
					[data.hua, '2'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.griseo, '1']
				]
			},
			emblem: [
				[data.madKingsMask, data.anOldPalsLegacy],
				[data.memory, data.anOldPalsLegacy],
				[data.heavyAsAMillionLives, data.anOldPalsLegacy]
			],
			support: [
				[ [data.vc], [data.vke] ],
				[ [data.br], [data.ae] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Arcane Traces',
						'Attainment'
					],
					[data.second]: [
						'Observation'
					],
					[data.no]: [
						'Unbroken Rampart',
						'Vermillion Fire'
					]
				},
				main: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.vuln,
						data.kalpas.regular.hp,
						data.kalpas.nexus1.name,
						data.kalpas.nexus1.dmgBonus
					]
				},
				secondary: {
					[data.su.name]: [
						data.su.regular.dmgTotal,
						data.su.regular.vuln,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.regular.spRestore,
						data.su.nexus1.name,
						data.su.nexus1.vuln,
						data.su.nexus1.breachPhysEle
					],
					[data.hua.name]: [
						data.hua.regular.dmgTotal,
						data.hua.regular.dmgEle,
						data.hua.regular.breachEle,
						data.hua.nexus2.name,
						data.hua.nexus2.stackCap
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.currKill,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.black,
						data.griseo.nexus1.name
					]
				}
			},
			notes: `Recommended to swap sigil on 5F. Rotation: tap weapon around every 12s, use ultimate when available, use basic atk rest of the time.
					Can pick Vill-V's signets <span>${data.vv.regular.vuln}</span>, and <span>${data.vv.regular.dmgTotal}</span> as reinforcement.`
		}
	]
};
// Fervent Tempo
const mc: Guide = {
	name: 'Fervent Tempo',
	acr: 'mc',
	version: '6.2',
	builds: [
		{
			signet: {
				main: [
					[data.griseo, '2']
				],
				secondary: [
					[data.aponia, '2']
				],
				optional: [
					[data.kevin, '1'],
					[data.vv, '1'],
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.rainbowOfAbsence, data.theLonelyMoon],
				[data.veilOfTears, data.theLonelyMoon],
				[data.farawayShip, data.dreamfulGold]
			],
			support: [
				[ [data.ss], [data.dp, data.bke] ],
				[ [data.ss], [data.br] ]
			],
			gear: [
				[data.sldr, data.mict, data.danm, data.micb],
				[data.hawp, data.elyt, data.danm, data.elyb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Silence'
					],
					[data.first]: [
						'Mixing'
					],
					[data.second]: [
						'Fervor'
					],
					[data.reinforcement]: [
						'Solitude'
					],
					[data.no]: [
						'Thorns'
					]
				},
				main: {
					[data.griseo.name]: [
						data.griseo.regular.black,
						data.griseo.regular.red,
						data.griseo.regular.white,
						data.griseo.regular.yellow,
						data.griseo.nexus2.name,
						data.griseo.nexus2.orange,
						data.griseo.nexus2.green,
						data.griseo.nexus2.purple
					]
				},
				secondary: {
					[data.aponia.name]: [
						data.aponia.regular.basicAtk,
						data.aponia.regular.spRestore,
						data.aponia.regular.dmgPhysEle,
						data.aponia.nexus2.name,
						data.aponia.nexus2.breachPhysEle,
						data.aponia.nexus2.vuln
					]
				},
				optional: {
					[data.kevin.name]: [
						data.kevin.regular.dmgTotal,
						data.kevin.regular.breachPhys,
						data.kevin.regular.dmgPhys,
						data.kevin.regular.spRestore,
						data.kevin.nexus1.name
					],
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.nexus1.name
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Can pick Su/Sakura signets as reinforcement.
					<p>${data.kevin.regular.breachPhys}</p>Upgrade twice.`
		}
	]
};
// Goushinnso Memento
const gm: Guide = {
	name: 'Goushinnso Memento',
	acr: 'gm',
	version: '6.0',
	builds: [
		{
			signet: {
				main: [
					[data.kosma, '2'],
					[data.hua, '2']
				],
				secondary: [
					[data.kalpas, '2'],
					[data.griseo, '2'],
					[data.aponia, '2']
				]
			},
			emblem: [
				[data.fragileFriend, data.outOfReach],
				[data.memory, data.homeTown],
				[data.tinFlask, data.homeTown]
			],
			support: [
				[ [data.ae], [data.sn] ],
				[ [data.ae], [data.hb] ]
			],
			gear: [
				[data.frna, data.anat, data.anam, data.anab],
				[data.hawp, data.bast, data.basm, data.basb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Flourish',
						'Whiteout'
					],
					[data.no]: [
						'Frozen Cloud',
						'Haste',
						'Icy Sakura'
					]
				},
				main: {
					[data.kosma.name]: [
						data.kosma.regular.extend,
						data.kosma.regular.ult,
						data.kosma.regular.atk,
						data.kosma.regular.evasion,
						data.kosma.nexus2.name,
						data.kosma.nexus2.hpRestore,
						data.kosma.nexus2.breachPhysEle
					],
					[data.hua.name]: [
						data.hua.regular.dmgEle,
						data.hua.regular.dmgTotal,
						data.hua.regular.breachEle,
						data.hua.nexus2.name
					]
				},
				secondary: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.nexus2.name
					],
					[data.griseo.name]: [
						data.griseo.regular.grey,
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.nexus2.name
					],
					[data.aponia.name]: [
						data.aponia.regular.basicAtk,
						data.aponia.regular.vuln,
						data.aponia.nexus2.name
					]
				}
			}
		}
	]
};
// Starry Impression
const griseo: Guide = {
	name: 'Starry Impression',
	acr: 'griseo',
	version: '7.8',
	builds: [
		{
			buff: [
				data.buffs[0][13],
				data.buffs[3][6],
				data.buffs[3][20]
			],
			signet: {
				main: [
					[data.kosma, '1']
				],
				secondary: [
					[data.hua, '2'],
					[data.mobius, '1'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.kalpas, '1']
				]
			},
			emblem: [
				[data.fragileFriend, data.outOfReach],
				[data.memory, data.outOfReach],
				[data.tinFlask, data.outOfReach]
			],
			support: [
				[ [data.sa], [data.vc] ],
				[ [data.br], [data.sa, data.ss] ]
			],
			gear: [
				[data.elas, data.brot, data.cezm, data.cezb],
				[data.hawp, data.elyt, data.danm, data.elyb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'River Forest',
						'Starry Night'
					],
					[data.optional]: [
						'Cloud Valley'
					],
					[data.no]: [
						'Azure Wind',
						'Feathers'
					]
				},
				main: {
					[data.kosma.name]: [
						data.kosma.regular.atk,
						data.kosma.regular.ult,
						data.kosma.regular.evasion,
						data.kosma.regular.dmgShield,
						data.kosma.regular.extend,
						data.kosma.nexus1.name
					]
				},
				secondary: {
					[data.hua.name]: [
						data.hua.regular.dmgTotal,
						data.hua.regular.dmgEle,
						data.hua.regular.breachEle,
						data.hua.nexus2.name,
						data.hua.nexus2.stackCap
					],
					[data.mobius.name]: [
						data.mobius.regular.dmgTotal,
						data.mobius.regular.dmgEntity,
						data.mobius.regular.vuln,
						data.mobius.nexus1.name
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.hp,
						data.kalpas.nexus1.name
					]
				}
			},
			notes: `Recommended to swap sigil on 5F
					Can pick Griseo's signest <span>${data.griseo.regular.red}</span>, and <span>${data.griseo.regular.yellow}</span>.`
		}
	]
};
// Valkyrie Blastmetal
const coralie: Guide = {
	name: 'Valkyrie Blastmetal',
	acr: 'coralie',
	version: '7.8',
	builds: [
		{
			buff: [
				data.buffs[0][13],
				data.buffs[1][7],
				data.buffs[2][18],
				data.buffs[3][20]
			],
			signet: {
				main: [
					[data.vv, '1']
				],
				secondary: [
					[data.kalpas, '2'],
					[data.hua, '2'],
					[data.sakura, '2']
				],
				optional: [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.psuedoMiracle, data.fallingInPastLight],
				[data.memory, data.fallingInPastLight],
				[data.tinFlask, data.fallingInPastLight]
			],
			support: [
				[ [data.vke], [data.vc] ],
				[ [data.ae], [data.br] ]
			],
			gear: [
				[data.blha, data.fltt, data.fltm, data.fltb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Primer'
					],
					[data.second]: [
						'Bolt',
						'Proficiency'
					],
					[data.optional]: [
						'Sky Blitz'
					],
					[data.no]: [
						'Readiness'
					]
				},
				main: {
					[data.vv.name]: [
						data.vv.regular.dmgWeap,
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.regular.dmgPhysEle,
						data.vv.nexus1.name
					]
				},
				secondary: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.hp,
						data.kalpas.nexus2.name
					],
					[data.hua.name]: [
						data.hua.regular.breachEle,
						data.hua.regular.dmgTotal,
						data.hua.regular.dmgEle,
						data.hua.nexus2.name,
						data.hua.nexus2.stackCap
					],
					[data.sakura.name]: [
						data.sakura.regular.dmgTotal,
						data.sakura.regular.vuln,
						data.sakura.regular.evasionAdd,
						data.sakura.nexus2.name
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Recommended to swap sigil on 5F. Rotation : Double jump then press weapon twice and repeat.
					Can pick Griseo's signets <span>${data.griseo.regular.red}</span>, and <span>${data.griseo.regular.black}</span> as reinforcement.`
		}
	]
};
// Herrscher of Finality
const hofi: Guide = {
	name: 'Herrscher of Finality',
	acr: 'hofi',
	version: '7.8',
	builds: [
		{
			buff: [
				data.buffs[0][13],
				data.buffs[3][6],
				data.buffs[3][20]
			],
			signet: {
				main: [
					[data.vv, '1']
				],
				secondary: [
					[data.su, '1'],
					[data.griseo, '1'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.kalpas, '2']
				]
			},
			emblem: [
				[data.psuedoMiracle, data.fallingInPastLight],
				[data.lightAsABodhiLeaf, data.dreamfulGold],
				[data.heavyAsAMillionLives, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.vke] ],
				[ [data.br], [data.ma, data.vke] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Finale Moon'
					],
					[data.first]: [
						'Rift'
					],
					[data.second]: [
						'Clarity'
					],
					[data.no]: [
						'Condescension',
						'High Flames'
					]
				},
				main: {
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.regular.spRestore,
						data.vv.nexus1.name
					]
				},
				secondary: {
					[data.su.name]: [
						data.su.regular.dmgTotal,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.regular.vuln,
						data.su.nexus1.name
					],
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.black,
						data.griseo.nexus1.name
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.curr,
						data.pardofelis.regular.currKill,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.hp,
						data.kalpas.nexus2.name
					]
				}
			},
			notes: `Recommended to reset for Rift on 2F; if picking Vill-V, requires Domain of Genesis or Waxing Moon: Incipience, use weapon active before ultimate; recommended to swap sigil on 5F.
					Can pick Aponia's signets <span>${data.aponia.regular.spRestore}</span>, <span>${data.aponia.regular.dmgPhysEle}</span>, and <span>${data.aponia.regular.dmgTotal}</span>, or Eden's signet <span>${data.eden.regular.spCapInitial}</span> as reinforcement.
					<p>${data.pardofelis.regular.curr}, ${data.pardofelis.regular.currKill}</p>Buy from early shop.`
		}
	]
};
// Herrscher of Flamescion
const hofs: Guide = {
	name: 'Herrscher of Flamescion',
	acr: 'hofs',
	version: '7.8',
	builds: [
		{
			buff: [
				data.buffs[0][13],
				data.buffs[3][6],
				data.buffs[3][20]
			],
			signet: {
				main: [
					[data.kalpas, '1']
				],
				secondary: [
					[data.su, '1'],
					[data.pardofelis, '1'],
					[data.hua, '2'],
					[data.kosma, '1']
				]
			},
			emblem: [
				[data.madKingsMask, data.anOldPalsLegacy],
				[data.lightAsABodhiLeaf, data.becauseOfYou],
				[data.heavyAsAMillionLives, data.anOldPalsLegacy]
			],
			support: [
				[ [data.vke], [data.ae] ],
				[ [data.br], [data.ma] ]
			],
			gear: [
				[data.doin, data.murt, data.murm, data.murb],
				[data.hawp, data.leet, data.tham, data.leeb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Heatflow'
					],
					[data.first]: [
						'Starfire'
					],
					[data.second]: [
						'Reburn',
						'Tempered Warrior'
					],
					[data.optional]: [
						'Flamescion'
					]
				},
				main: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.vuln,
						data.kalpas.regular.hp,
						data.kalpas.nexus1.name,
						data.kalpas.nexus1.fire,
						data.kalpas.nexus1.dmgBonus
					]
				},
				secondary: {
					[data.su.name]: [
						data.su.regular.dmgTotal,
						data.su.regular.vuln,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.nexus1.name,
						data.su.nexus1.breachPhysEle,
						data.su.nexus1.vuln
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					],
					[data.hua.name]: [
						data.hua.regular.dmgTotal,
						data.hua.regular.dmgEle,
						data.hua.regular.breachEle,
						data.hua.nexus2.name,
						data.hua.nexus2.stackCap
					],
					[data.kosma.name]: [
						data.kosma.regular.atk,
						data.kosma.regular.evasion,
						data.kosma.regular.extend,
						data.kosma.nexus1.name
					]
				}
			},
			notes: `Recommended to swap sigil on 5F, if below S2 recommended to lower the difficulty from 2.5 as well.
					Can pick Griseo's signet <span>${data.griseo.regular.red}</span> as reinforcement.`
		}
	]
};
// Herrscher of Human: Ego
const hoh: Guide = {
	name: 'Herrscher of Human: Ego',
	acr: 'hoh',
	version: '7.8',
	builds: [
		{
			buff: [
				data.buffs[1][7],
				data.buffs[1][13],
				data.buffs[2][18],
				data.buffs[2][21]
			],
			signet: {
				main: [
					[data.kalpas, '1']
				],
				secondary: [
					[data.hua, '2'],
					[data.vv, '1'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.griseo, '1']
				]
			},
			emblem: [
				[data.madKingsMask, data.anOldPalsLegacy],
				[data.memory, data.anOldPalsLegacy],
				[data.tinFlask, data.anOldPalsLegacy]
			],
			support: [
				[ [data.ae], [data.sn] ],
				[ [data.br], [data.rc] ]
			],
			gear: [
				[data.doeg, data.elpt, data.elpm, data.elpb],
				[data.hawp, data.wilt, data.wilm, data.wilb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'First Bloom',
						'First Journey'
					],
					[data.second]: [
						'First Awakening'
					],
					[data.no]: [
						'First Encounter',
						'First Yearning'
					]
				},
				main: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.hp,
						data.kalpas.regular.vuln,
						data.kalpas.nexus1.name,
						data.kalpas.nexus1.fire,
						data.kalpas.nexus1.dmgBonus
					]
				},
				secondary: {
					[data.hua.name]: [
						data.hua.regular.dmgTotal,
						data.hua.regular.dmgEle,
						data.hua.regular.breachEle,
						data.hua.nexus2.name
					],
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.regular.dmgRanged,
						data.vv.nexus1.name
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.black,
						data.griseo.nexus1.name
					]
				}
			},
			notes: `If dying easily, can pick Kalpas2 to preserve damage boost; recommended to swap sigil on 5F.
					Can pick or Sakura's signets <span>${data.sakura.regular.vuln}</span>, and <span>${data.sakura.regular.dmgTotal}</span> as reinforcement.
					<p>First Awakening</p>1st if weak setup.
					<p>${data.griseo.regular.red}</p> Buy from shop.`
		}
	]
};
// Herrscher of Origin
const hoo: Guide = {
	name: 'Herrscher of Origin',
	acr: 'hoo',
	version: '7.8',
	builds: [
		{
			buff: [
				data.buffs[0][13],
				data.buffs[1][13],
				data.buffs[2][21],
				data.buffs[3][20]
			],
			signet: {
				main: [
					[data.vv, '1']
				],
				secondary: [
					[data.su, '1'],
					[data.pardofelis, '1'],
					[data.griseo, '1']
				],
				optional: [
					[data.kosma, '1']
				]
			},
			emblem: [
				[data.psuedoMiracle, data.anOldPalsLegacy],
				[data.lightAsABodhiLeaf, data.anOldPalsLegacy],
				[data.heavyAsAMillionLives, data.outOfReach]
			],
			support: [
				[ [data.ae], [data.vc] ],
				[ [data.br], [data.rc] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Expungement'
					],
					[data.first]: [
						'Lethal Smite'
					],
					[data.second]: [
						'Ultra'
					],
					[data.no]: [
						'Inscription',
						'Nature'
					]
				},
				main: {
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.regular.dmgPhysEle,
						data.vv.nexus1.name
					]
				},
				secondary: {
					[data.su.name]: [
						data.su.regular.vuln,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.regular.dmgTotal,
						data.su.nexus1.name,
						data.su.nexus1.vuln,
						data.su.nexus1.breachPhysEle
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.nexus1.name
					],
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.black,
						data.griseo.nexus1.name
					]
				},
				optional: {
					[data.kosma.name]: [
						data.kosma.regular.ult,
						data.kosma.regular.evasion,
						data.kosma.regular.dmgShield,
						data.kosma.nexus1.name
					]
				}
			},
			notes: `Recommended to swap sigil on 5F, recommended to reset for Expungement on 2F.
					Can pick Eden's signets <span>${data.eden.regular.dmgTotal}</span>, and <span>${data.eden.regular.dmgPhysEle}</span>, or Sakura's signets <span>${data.sakura.regular.vuln}</span>, and <span>${data.sakura.regular.dmgTotal}</span> as reinforcement.`
		}
	]
};
// Herrscher of Reason
const hor: Guide = {
	name: 'Herrscher of Reason',
	acr: 'hor',
	version: '7.4',
	builds: [
		{
			buff: [
				data.buffs[0][4],
				data.buffs[1][13],
				data.buffs[2][17],
				data.buffs[3][18]
			],
			signet: {
				main: [
					[data.kevin, '2']
				],
				secondary: [
					[data.sakura, '2'],
					[data.su, '1'],
					[data.kalpas, '2']
				],
				optional: [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.burden, data.becauseOfYou],
				[data.forgetMeNot, data.dreamfulGold],
				[data.heavyAsAMillionLives, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.le, data.bke] ],
				[ [data.br], [data.ae, data.rc] ]
			],
			gear: [
				[data.sted, data.wilt, data.wilm, data.wilb],
				[data.dore, data.welt, data.welm, data.welb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Wisdon'
					],
					[data.second]: [
						'Inspiration',
						'Truth'
					],
					[data.no]: [
						'Creation',
						'Reason'
					]
				},
				main: {
					[data.kevin.name]: [
						data.kevin.regular.dmgEle,
						data.kevin.regular.dmgTotal,
						data.kevin.regular.breachEle,
						data.kevin.regular.spRestore,
						data.kevin.nexus2.name,
						data.kevin.nexus2.effect
					]
				},
				secondary: {
					[data.sakura.name]: [
						data.sakura.regular.dmgTotal,
						data.sakura.regular.evasionAdd,
						data.sakura.regular.vuln,
						data.sakura.nexus2.name
					],
					[data.su.name]: [
						data.su.regular.dmgTotal,
						data.su.regular.vuln,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.nexus1.name,
						data.su.nexus1.vuln,
						data.su.nexus1.breachPhysEle
					],

					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.hp,
						data.kalpas.nexus2.name
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Recommended to swap sigil on 5F; use Kevin support on 4F wave 3.
					Can pick Vill-V's signets, <span>${data.vv.regular.vuln}</span>, and <span>${data.vv.regular.dmgTotal}</span>, or Griseo's signet <span>${data.griseo.regular.red}</span> as reinforcement.
					<p>${data.griseo.regular.red}</p>Buy in shop.`
		}
	]
};
// Herrscher of Rebirth
const horb: Guide = {
	name: 'Herrscher of Rebirth',
	acr: 'horb',
	version: '7.8',
	builds: [
		{
			buff: [
				data.buffs[1][13],
				data.buffs[2][21],
				data.buffs[3][20]
			],
			signet: {
				main: [
					[data.kalpas, '1']
				],
				secondary: [
					[data.hua, '2'],
					[data.su, '1'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.mobius, '1']
				]
			},
			emblem: [
				[data.madKingsMask, data.anOldPalsLegacy],
				[data.memory, data.anOldPalsLegacy],
				[data.heavyAsAMillionLives, data.fallingInPastLight]
			],
			support: [
				[ [data.sn], [data.sa] ],
				[ [data.br], [data.ss, data.sa] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Soothingness'
					],
					[data.no]: [
						'Decay',
						'Rising Sun',
						'Shared Destiny',
						'Spirits'
					]
				},
				main: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.hp,
						data.kalpas.regular.vuln,
						data.kalpas.nexus1.name,
						data.kalpas.nexus1.fire,
						data.kalpas.nexus1.dmgBonus
					]
				},
				secondary: {
					[data.hua.name]: [
						data.hua.regular.dmgTotal,
						data.hua.regular.dmgPhys,
						data.hua.regular.breachPhys,
						data.hua.nexus2.name,
						data.hua.nexus2.stackCap
					],
					[data.su.name]: [
						data.su.regular.vuln,
						data.su.regular.dmgTotal,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.nexus1.name,
						data.su.nexus1.vuln
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.mobius.name]: [
						data.mobius.regular.dmgTotal,
						data.mobius.regular.dmgEntity,
						data.mobius.regular.vuln,
						data.mobius.nexus1.name,
						data.mobius.nexus1.dmgTotal
					]
				}
			},
			notes: `Recommended to swap sigil on 5F.
					Can pick Vill-V's signets <span>${data.vv.regular.vuln}</span>, <span>${data.vv.regular.dmgTotal}</span>, and <span>${data.vv.regular.dmgRanged}</span> or Griseo's signets <span>${data.griseo.regular.red}</span>, and <span>${data.griseo.regular.yellow}</span> as reinforcement.`
		}
	]
};
// Herrscher of Sentience
const hos: Guide = {
	name: 'Herrscher of Sentience',
	acr: 'hos',
	version: '7.7',
	builds: [
		{
			buff: [
				data.buffs[0][12],
				data.buffs[1][12],
				data.buffs[2][9],
				data.buffs[3][21]
			],
			signet: {
				main: [
					[data.mobius, '1']
				],
				secondary: [
					[data.su, '1'],
					[data.griseo, '1'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.kosma, '1']
				]
			},
			emblem: [
				[data.forbiddenSeed, data.theLonelyMoon],
				[data.lightAsABodhiLeaf, data.outOfReach],
				[data.heavyAsAMillionLives, data.dreamfulGold]
			],
			support: [
				[ [data.le], [data.sn] ],
				[ [data.br], [data.sa, data.ss] ]
			],
			gear: [
				[data.dose, data.dirt, data.dirm, data.rebb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Ego'
					],
					[data.second]: [
						'Victory'
					],
					[data.optional]: [
						'Legion'
					],
					[data.no]: [
						'Dark Plumes',
						'Supremacy'
					]
				},
				main: {
					[data.mobius.name]: [
						data.mobius.regular.dmgTotal,
						data.mobius.regular.dmgEntity,
						data.mobius.regular.vuln,
						data.mobius.nexus1.name
					]
				},
				secondary: {
					[data.su.name]: [
						data.su.regular.vuln,
						data.su.regular.dmgTotal,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.regular.spRestore,
						data.su.nexus1.name,
						data.su.nexus1.breachPhysEle,
						data.su.nexus1.vuln
					],
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.black,
						data.griseo.regular.grey,
						data.griseo.nexus1.name
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.kosma.name]: [
						data.kosma.regular.evasion,
						data.kosma.regular.ult,
						data.kosma.regular.extend,
						data.kosma.nexus1.name
					]
				}
			},
			notes: `Must have brick, otherwise don't use; recommended to swap sigil on 5F
					Can pick Kalpas's signets <span>${data.kalpas.regular.dmgTotal}</span>, and <span>${data.kalpas.regular.dmgPhysEle}</span> as reinforcement`
		},
		{
			name: 'brick',
			buff: [
				data.buffs[0][9],
				data.buffs[3][1],
				data.buffs[3][15]
			],
			signet: {
				main: [
					[data.mobius, '1']
				],
				secondary: [
					[data.griseo, '1'],
					[data.su, '1'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.aponia, '2']
				]
			},
			emblem: [
				[data.forbiddenSeed, data.theLonelyMoon],
				[data.rainbowOfAbsence, data.boundlessLogos],
				[data.heavyAsAMillionLives, data.boundlessLogos]
			],
			support: [
				[ [data.le], [data.bke] ],
				[ [data.ss], [data.sa, data.br] ]
			],
			gear: [
				[data.inin, data.pert, data.perm, data.perb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Ego'
					],
					[data.second]: [
						'Victory'
					],
					[data.no]: [
						'Dark Plumes',
						'Legion',
						'Supremacy'
					]
				},
				main: {
					[data.mobius.name]: [
						data.mobius.regular.dmgTotal,
						data.mobius.regular.dmgEntity,
						data.mobius.regular.vuln,
						data.mobius.regular.cdReduc,
						data.mobius.nexus1.name,
						data.mobius.nexus1.dmgTotal,
						data.mobius.nexus1.reduce
					]
				},
				secondary: {
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.blue,
						data.griseo.regular.black,
						data.griseo.regular.grey,
						data.griseo.nexus1.name,
						data.griseo.nexus1.purple,
						data.griseo.nexus1.orange,
						data.griseo.nexus1.green
					],
					[data.su.name]: [
						data.su.regular.vuln,
						data.su.regular.dmgTotal,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.nexus1.name
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.curr,
						data.pardofelis.regular.currKill,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.aponia.name]: [
						data.aponia.regular.basicAtk,
						data.aponia.regular.dmgReduc,
						data.aponia.regular.spRestore,
						data.aponia.nexus2.name
					]
				}
			},
			notes: `Must have brick, otherwise don't use; recommended to swap sigil on 6F, roll Mobius on 7F.
					Can pick Kosma's signets <span>${data.kosma.regular.atk}</span>, <span>${data.kosma.regular.evasion}</span>, <span>${data.kosma.regular.ult}</span>, <span>${data.kosma.regular.extend}</span>, and <span>${data.kosma.regular.vuln}</span> as reinforcement.`
		}
	]
};
// Herrscher of the Void
const hov: Guide = {
	name: 'Herrscher of the Void',
	acr: 'hov',
	version: '6.8',
	builds: [
		{
			buff: [
				data.buffs[0][5],
				data.buffs[1][4],
				data.buffs[2][9],
				data.buffs[3][6]
			],
			signet: {
				main: [
					[data.mobius, '1'],
					[data.sakura, '1']
				],
				secondary: [
					[data.vv, '1'],
					[data.eden, '1']
				],
				optional:  [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.forbiddenSeed, data.fallingInPastLight],
				[data.forgetMeNot, data.boundlessLogos],
				[data.farawayShip, data.dreamfulGold]
			],
			support: [
				[ [data.ss], [data.bke] ],
				[ [data.ss], [data.vc] ]
			],
			gear: [
				[data.dovo, data.sirt, data.sirm, data.sirb],
				[data.kevo, data.elyt, data.elym, data.elyb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Innateness'
					],
					[data.first]: [
						'Coleus'
					],
					[data.no]: [
						'Annihilation',
						'Law',
						'Virtuality'
					]
				},
				main: {
					[data.mobius.name]: [
						data.mobius.regular.vuln,
						data.mobius.regular.dmgEntity,
						data.mobius.regular.dmgTotal,
						data.mobius.nexus1.name,
						data.mobius.nexus1.dmgTotal,
						data.mobius.nexus1.breachPhysEle,
						data.mobius.nexus1.reduce
					],
					[data.sakura.name]: [
						data.sakura.regular.evasionAdd,
						data.sakura.regular.vuln,
						data.sakura.regular.spRestore,
						data.sakura.nexus1.name
					]
				},
				secondary: {
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.regular.dmgRanged,
						data.vv.nexus1.name
					],
					[data.eden.name]: [
						data.eden.regular.dmgPhysEle,
						data.eden.regular.dmgTotal,
						data.eden.regular.spCapInitial,
						data.eden.nexus1.name,
						data.eden.nexus1.vuln
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Can pick Griseo's signets <span>${data.griseo.regular.red}</span> (buy from shop), and <span>${data.griseo.regular.black}</span> as reinforcement.
					<p>${data.mobius.nexus1.breachPhysEle}</p>Priority.`
		}
	]
};
// Herrscher of Thunder
const hot: Guide = {
	name: 'Herrscher of Thunder',
	acr: 'hot',
	version: '6.8',
	builds: [
		{
			buff: [
				data.buffs[1][4],
				data.buffs[2][11],
				data.buffs[3][10]
			],
			signet: {
				main: [
					[data.griseo, '1']
				],
				secondary: [
					[data.kevin, '2'],
					[data.su, '1'],
					[data.mobius, '1']
				],
				optional: [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.rainbowOfAbsence, data.theLonelyMoon],
				[data.burden, data.theLonelyMoon],
				[data.heavyAsAMillionLives, data.dreamfulGold]
			],
			support: [
				[ [data.le], [data.ae, data.bke] ],
				[ [data.br], [data.ae, data.rc] ]
			],
			gear: [
				[data.sena, data.hant, data.hanm, data.hanb],
				[data.seru, data.bent, data.benm, data.benb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Narukami'
					],
					[data.optional]: [
						'Tsukuyomi'
					],
					[data.no]: [
						'Divine Penalty',
						'Hazy Moon',
						'Mitama'
					]
				},
				main: {
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.blue,
						data.griseo.regular.black,
						data.griseo.nexus1.name,
						data.griseo.nexus1.purple,
						data.griseo.nexus1.orange,
						data.griseo.nexus1.green
					]
				},
				secondary: {
					[data.kevin.name]: [
						data.kevin.regular.dmgTotal,
						data.kevin.regular.dmgEle,
						data.kevin.regular.breachEle,
						data.kevin.nexus2.name
					],
					[data.su.name]: [
						data.su.regular.vuln,
						data.su.regular.dmgTotal,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.nexus1.name,
						data.su.nexus1.vuln
					],
					[data.mobius.name]: [
						data.mobius.regular.dmgTotal,
						data.mobius.regular.dmgEntity,
						data.mobius.regular.vuln,
						data.mobius.nexus1.name,
						data.mobius.nexus1.dmgTotal
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Can pick Kalpas's signets <span>${data.kalpas.regular.dmgTotal}</span>, <span>${data.kalpas.regular.dmgPhysEle}</span>, and <span>${data.kalpas.regular.hp}</span>, Sakura's signet <span>${data.sakura.regular.vuln}</span>, Vill-V 2 as reinforcement.`
		}
	]
};
// Herrscher of Truth
const hotr: Guide = {
	name: 'Herrscher of Truth',
	acr: 'hotr',
	version: '7.6',
	builds: [
		{
			buff: [
				data.buffs[0][11],
				data.buffs[1][13],
				data.buffs[2][20],
				data.buffs[3][6]
			],
			signet: {
				main: [
					[data.mobius, '1']
				],
				secondary: [
					[data.su, '2'],
					[data.griseo, '1'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.eden, '1']
				]
			},
			emblem: [
				[data.forbiddenSeed, data.boundlessLogos],
				[data.lightAsABodhiLeaf, data.boundlessLogos],
				[data.keyToTheDeep, data.boundlessLogos]
			],
			support: [
				[ [data.bke], [data.vke] ],
				[ [data.br], [data.ae, data.rc] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Konstruktion'
					],
					[data.first]: [
						'Continuation'
					],
					[data.optional]: [
						'Vector'
					],
					[data.no]: [
						'Genuine Solution',
						'Intellect Core'
					]
				},
				main: {
					[data.mobius.name]: [
						data.mobius.regular.vuln,
						data.mobius.regular.dmgEntity,
						data.mobius.regular.dmgTotal,
						data.mobius.nexus1.name,
						data.mobius.nexus1.dmgTotal,
						data.mobius.nexus1.breachPhysEle,
						data.mobius.nexus1.reduce
					]
				},
				secondary: {
					[data.su.name]: [
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.regular.vuln,
						data.su.regular.dmgTotal,
						data.su.nexus2.name
					],
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.grey,
						data.griseo.regular.black,
						data.griseo.nexus1.name
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.curr,
						data.pardofelis.regular.currKill,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.eden.name]: [
						data.eden.regular.dmgTotal,
						data.eden.regular.dmgPhysEle,
						data.eden.nexus1.name
					]
				}
			},
			notes: `Recommended to reset for Continuation on 2F; recommended to swap sigil on 6F, roll Mobius on 7F; only use ultimate after the 1st combo attack.
					Can pick Sakura's signet <span>${data.sakura.regular.vuln}</span> or Vill-V's signets <span>${data.vv.regular.vuln}</span>, and  <span>${data.vv.regular.dmgTotal}</span> as reinforcement.
					<p>${data.mobius.nexus1.breachPhysEle}</p>Priority.
					<p>${data.pardofelis.regular.curr}, ${data.pardofelis.regular.currKill}</p>Buy from early shop.`
		}
	]
};
// Sugary Starburst
const kira: Guide = {
	name: 'Sugary Starburst',
	acr: 'kira',
	version: '7.4',
	builds: [
		{
			buff: [
				data.buffs[0][4],
				data.buffs[1][12],
				data.buffs[2][17],
				data.buffs[3][18]
			],
			signet: {
				main: [
					[data.kalpas, '1']
				],
				secondary: [
					[data.hua, '2'],
					[data.pardofelis, '1'],
					[data.sakura, '2']
				],
				optional: [
					[data.eden, '1']
				]
			},
			emblem: [
				[data.madKingsMask, data.anOldPalsLegacy],
				[data.memory, data.anOldPalsLegacy],
				[data.keyToTheDeep, data.anOldPalsLegacy]
			],
			support: [
				[ [data.ae], [data.bke] ],
				[ [data.br], [data.ae, data.rc] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Roller Dance'
					],
					[data.optional]: [
						'Acoustic Spectrum'
					],
					[data.no]: [
						'Astral Path',
						'Rhythm',
						'Salute'
					]
				},
				main: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.vuln,
						data.kalpas.regular.hp,
						data.kalpas.nexus1.name,
						data.kalpas.nexus1.fire,
						data.kalpas.nexus1.dmgBonus
					]
				},
				secondary: {
					[data.hua.name]: [
						data.hua.regular.breachEle,
						data.hua.regular.dmgTotal,
						data.hua.regular.dmgEle,
						data.hua.nexus2.name,
						data.hua.nexus2.stackCap
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					],
					[data.sakura.name]: [
						data.sakura.regular.dmgTotal,
						data.sakura.regular.vuln,
						data.sakura.regular.evasionAdd,
						data.sakura.nexus2.name
					]
				},
				optional: {
					[data.eden.name]: [
						data.eden.regular.dmgTotal,
						data.eden.regular.dmgPhysEle,
						data.eden.regular.spCapInitial
					]
				}
			},
			notes: `Recommended to swap sigil on 5F, if managed to get Kalpas nexus early, use BR to reduce HP in shop before continuing.
					Can pick Aponia's signet <span>${data.aponia.regular.dmgTotal}</span>, or Griseo's signets <span>${data.griseo.regular.red}</span>, and <span>${data.griseo.regular.yellow}</span> as reinforcement.`
		}
	]
};
// Lone Destruction: Shadowchaser
const lantern: Guide = {
	name: 'Lone Destruction: Shadowchaser',
	acr: 'lantern',
	version: '7.6',
	builds: [
		{
			buff: [
				data.buffs[0][11],
				data.buffs[1][13],
				data.buffs[2][20],
				data.buffs[3][6]
			],
			signet: {
				main: [
					[data.eden, '1']
				],
				secondary: [
					[data.sakura, '2'],
					[data.hua, '2'],
					[data.su, '2']
				],
				optional: [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.goldGoblet, data.dreamfulGold],
				[data.forgetMeNot, data.dreamfulGold],
				[data.keyToTheDeep, data.dreamfulGold]
			],
			support: [
				[ [data.vke], [data.bke] ],
				[ [data.dafl, data.ae], [data.br] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Blazing Torch'
					],
					[data.optional]: [
						'Illuminated Night',
						'Luminance'
					],
					[data.no]: [
						'Raging Fire',
						'Scorching Flames'
					]
				},
				main: {
					[data.eden.name]: [
						data.eden.regular.dmgTotal,
						data.eden.regular.dmgPhysEle,
						data.eden.regular.spCapInitial,
						data.eden.regular.spRestore,
						data.eden.nexus1.name,
						data.eden.nexus1.vuln
					]
				},
				secondary: {
					[data.sakura.name]: [
						data.sakura.regular.dmgTotal,
						data.sakura.regular.vuln,
						data.sakura.regular.evasionReset,
						data.sakura.nexus2.name
					],
					[data.hua.name]: [
						data.hua.regular.breachEle,
						data.hua.regular.dmgTotal,
						data.hua.regular.dmgEle,
						data.hua.nexus2.name,
						data.hua.nexus2.stackCap
					],
					[data.su.name]: [
						data.su.regular.dmgTotal,
						data.su.regular.vuln,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.regular.spRestore,
						data.su.nexus2.name
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Recommended to swap sigil on 5F. Rotation : Tap basic then weapon, then hold evade and steer. If Luminance is obtained, wait until evasion charges are finished before using ultimate.
					Can pick Griseo's signets <span>${data.griseo.regular.red}</span>, and <span>${data.griseo.regular.black}</span>, or Kalpas's signets <span>${data.kalpas.regular.dmgTotal}</span>, <span>${data.kalpas.regular.dmgPhysEle}</span> and <span>${data.kalpas.regular.hp}</span> or Vill-V's signets <span>${data.vv.regular.vuln}</span>, and <span>${data.vv.regular.dmgTotal}</span> as reinforcement.`
		}
	]
};
// Luna Kindred
const lk: Guide = {
	name: 'Luna Kindred',
	acr: 'lk',
	version: '5.9',
	builds: [
		{
			signet: {
				main: [
					[data.kalpas, '2'],
					[data.aponia, '2']
				],
				secondary: [
					[data.griseo, '2'],
					[data.pardofelis, '1'],
					[data.mobius, '1']
				]
			},
			emblem: [
				[data.madKingsMask, data.theLonelyMoon],
				[data.veilOfTears, data.theLonelyMoon],
				[data.tinFlask, data.dreamfulGold]
			],
			support: [
				[ [data.sn], [data.le] ],
				[ [data.dp], [data.le] ]
			],
			gear: [
				[data.heso, data.drat, data.dram, data.drab],
				[data.elas, data.elyt, data.murm, data.elyb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Penumbra'
					],
					[data.first]: [
						'Blood Feast'
					],
					[data.second]: [
						'Imprint'
					],
					[data.no]: [
						'Immortality',
						'Thirst'
					]
				},
				main: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.vuln,
						data.kalpas.regular.hp,
						data.kalpas.nexus2.name,
						data.kalpas.nexus2.breachPhysEle
					],
					[data.aponia.name]: [
						data.aponia.regular.basicAtk,
						data.aponia.regular.spRestore,
						data.aponia.nexus2.name,
						data.aponia.nexus2.dmgPhysEle,
						data.aponia.nexus2.breachPhysEle,
						data.aponia.nexus2.vuln
					]
				},
				secondary: {
					[data.griseo.name]: [
						data.griseo.regular.grey,
						data.griseo.regular.red,
						data.griseo.regular.yellow
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name,
						data.pardofelis.nexus1.evasion,
						data.pardofelis.nexus1.ult
					],
					[data.mobius.name]: [
						data.mobius.regular.vuln,
						data.mobius.regular.dmgTotal
					]
				}
			},
			notes: `If equipped with Hekate's Sombre, can buy Su signets.
					<p>${data.kalpas.regular.hp}, ${data.aponia.nexus2.breachPhysEle}</p>Recommended to upgrade.
					<p>${data.mobius.regular.vuln}, ${data.mobius.regular.dmgTotal}</p>If using dracula set.`
		}
	]
};
// Luna Kindred
const lp: Guide = {
	name: 'Lone Planetfarer',
	acr: 'lp',
	version: '7.8',
	builds: [
		{
			name: 'No Ring',
			buff: [
				data.buffs[0][13],
				data.buffs[3][6],
				data.buffs[3][20]
			],
			signet: {
				main: [
					[data.eden, '1']
				],
				secondary: [
					[data.su, '1'],
					[data.griseo, '1'],
					[data.hua, '2']
				],
				optional: [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.goldGoblet, data.dreamfulGold],
				[data.lightAsABodhiLeaf, data.dreamfulGold],
				[data.heavyAsAMillionLives, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.fr] ],
				[ [data.dosa], [data.br] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Cosmos'
					],
					[data.second]: [
						'Lonesome Feather',
						'Lovely Wishes'
					],
					[data.no]: [
						'Abyssal Aid',
						'Deep Love'
					]
				},
				main: {
					[data.eden.name]: [
						data.eden.regular.dmgTotal,
						data.eden.regular.dmgPhysEle,
						data.eden.regular.spCapInitial,
						data.eden.nexus1.name
					]
				},
				secondary: {
					[data.su.name]: [
						data.su.regular.vuln,
						data.su.regular.dmgTotal,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.nexus1.name,
						data.su.nexus1.vuln,
						data.su.nexus1.breachPhysEle,
						data.su.nexus1.dmgShield
					],
					[data.griseo.name]: [
						data.griseo.regular.black,
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.nexus1.name
					],
					[data.hua.name]: [
						data.hua.regular.breachEle,
						data.hua.regular.dmgTotal,
						data.hua.regular.dmgEle,
						data.hua.nexus2.name,
						data.hua.nexus2.stackCap
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Recommended to swap sigil on 5F. Rotation : Start by using ultimate, then use weapon skill > basic attack to fill the bar, then hold basic to use combo attack. Repeat the weapon and basic atks to keep triggering combo attacks.
					Can pick Aponia's signets <span>${data.aponia.regular.basicAtk}</span>, <span>${data.aponia.regular.spRestore}</span>, and <span>${data.aponia.regular.vuln}</span> as reinforcemnt.`
		},
		{
			name: 'Ring',
			buff: [
				data.buffs[0][13],
				data.buffs[3][6],
				data.buffs[3][20]
			],
			signet: {
				main: [
					[data.eden, '1']
				],
				secondary: [
					[data.su, '1'],
					[data.griseo, '1'],
					[data.hua, '2']
				],
				optional: [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.goldGoblet, data.dreamfulGold],
				[data.lightAsABodhiLeaf, data.dreamfulGold],
				[data.heavyAsAMillionLives, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.fr] ],
				[ [data.dosa], [data.br] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Abyssal Aid'
					],
					[data.second]: [
						'Deep Love',
						'Lonesome Feather'
					],
					[data.no]: [
						'Cosmos',
						'Lovely Wishes'
					]
				},
				main: {
					[data.eden.name]: [
						data.eden.regular.dmgTotal,
						data.eden.regular.dmgPhysEle,
						data.eden.regular.spCapInitial,
						data.eden.nexus1.name
					]
				},
				secondary: {
					[data.su.name]: [
						data.su.regular.vuln,
						data.su.regular.dmgTotal,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.nexus1.name,
						data.su.nexus1.vuln,
						data.su.nexus1.breachPhysEle,
						data.su.nexus1.dmgShield
					],
					[data.griseo.name]: [
						data.griseo.regular.black,
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.nexus1.name
					],
					[data.hua.name]: [
						data.hua.regular.breachEle,
						data.hua.regular.dmgTotal,
						data.hua.regular.dmgEle,
						data.hua.nexus2.name,
						data.hua.nexus2.stackCap
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Recommended to swap sigil on 5F. Rotation : Enter Stellar Outburst, tap basic attack until you exit Intelligence Unleashed mode, then tap weapon skill > basic attack to fill up the bar, then hold basic attack to enter the mode again. Repeat until stage cleared.
					Can pick Aponia's signets <span>${data.aponia.regular.basicAtk}</span>, <span>${data.aponia.regular.spRestore}</span>, and <span>${data.aponia.regular.vuln}</span> as reinforcemnt.`
		}
	]
};
// Lunar Vow: Crimson Love
const lv: Guide = {
	name: 'Lunar Vow: Crimson Love',
	acr: 'lv',
	version: '7.8',
	builds: [
		{
			buff: [
				data.buffs[0][13],
				data.buffs[3][6],
				data.buffs[3][20]
			],
			signet: {
				main: [
					[data.kalpas, '1']
				],
				secondary: [
					[data.su, '1'],
					[data.hua, '2'],
					[data.griseo, '1']
				],
				optional: [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.madKingsMask, data.anOldPalsLegacy],
				[data.lightAsABodhiLeaf, data.anOldPalsLegacy],
				[data.tinFlask, data.anOldPalsLegacy]
			],
			support: [
				[ [data.ae], [data.vc] ],
				[ [data.br], [data.rc] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Vessel'
					],
					[data.second]: [
						'Lasting Embrace'
					],
					[data.optional]: [
						'Hermit'
					],
					[data.no]: [
						'Chase',
						'Divine Pact'
					]
				},
				main: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.vuln,
						data.kalpas.regular.hp,
						data.kalpas.nexus1.name
					]
				},
				secondary: {
					[data.su.name]: [
						data.su.regular.dmgTotal,
						data.su.regular.vuln,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.nexus1.name,
						data.su.nexus1.vuln,
						data.su.nexus1.breachPhysEle
					],
					[data.hua.name]: [
						data.hua.regular.dmgTotal,
						data.hua.regular.dmgEle,
						data.hua.regular.breachEle,
						data.hua.nexus2.name
					],
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.grey,
						data.griseo.nexus1.name
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Recommended to swap sigil on 5F; Rotation : Use AE 1s before the wave spawns to gather, then evade > hold basic while using BR > using combo ATK after finished then evade again and repeat. Use ultimate after a few rotations. After getting Griseo Red, remember to tap weapon active.
					Can pick Kosma's signets <span>${data.kosma.regular.atk}</span>, <span>${data.kosma.regular.evasion}</span>, and <span>${data.kosma.regular.ult}</span> as reinforcement.`
		}
	]
};
// Schicksal's Imperative
const si: Guide = {
	name: 'Schicksal\'s Imperative',
	acr: 'si',
	version: '7.7',
	builds: [
		{
			name: 'sleepy',
			buff: [
				data.buffs[0][12],
				data.buffs[3][6],
				data.buffs[3][21]
			],
			signet: {
				main: [
					[data.mobius, '2']
				],
				secondary: [
					[data.hua, '2'],
					[data.aponia, '2'],
					[data.kalpas, '2']
				],
				optional: [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.forbiddenSeed, data.outOfReach],
				[data.memory, data.outOfReach],
				[data.tinFlask, data.outOfReach]
			],
			support: [
				[ [data.ae], [data.fr] ],
				[ [data.ae], [data.br] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Saturday'
					],
					[data.second]: [
						'Sunday'
					],
					[data.optional]: [
						'Work\'s End'
					],
					[data.no]: [
						'Annual Leave',
						'Day Off Work'
					]
				},
				main: {
					[data.mobius.name]: [
						data.mobius.regular.dmgTotal,
						data.mobius.regular.dmgEntity,
						data.mobius.regular.vuln,
						data.mobius.nexus2.name,
						data.mobius.nexus2.vuln,
						data.mobius.nexus2.dmgPhysEle,
						data.mobius.nexus2.extend
					]
				},
				secondary: {
					[data.hua.name]: [
						data.hua.regular.dmgTotal,
						data.hua.regular.dmgEle,
						data.hua.regular.breachEle,
						data.hua.nexus2.name,
						data.hua.nexus2.stackCap
					],
					[data.aponia.name]: [
						data.aponia.regular.spRestore,
						data.aponia.regular.dmgPhysEle,
						data.aponia.regular.vuln,
						data.aponia.nexus2.name
					],
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.hp,
						data.kalpas.nexus2.name
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Can pick Eden's signets <span>${data.eden.regular.dmgTotal}</span>, and <span>${data.eden.regular.dmgPhysEle}</span> as reinforcement.
					Recommended to swap sigil on 6F. Rotation : Use AE at start to gather then use ultimate followed by supports. Use Kosmos support when the enemies are scattered, or reset for Sunday on 2F to help with gathering.`
		},
		{
			name: 'astral ring',
			buff: [
				data.buffs[0][12],
				data.buffs[3][6],
				data.buffs[3][21]
			],
			signet: {
				main: [
					[data.eden, '1']
				],
				secondary: [
					[data.mobius, '1'],
					[data.su, '1'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.aponia, '2']
				]
			},
			emblem: [
				[data.goldGoblet, data.dreamfulGold],
				[data.forbiddenSeed, data.dreamfulGold],
				[data.heavyAsAMillionLives, data.dreamfulGold]
			],
			support: [
				[ [data.dafl], [data.rc] ],
				[ [data.dafl], [data.br] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Annual Leave'
					],
					[data.second]: [
						'Day Off Work'
					],
					[data.optional]: [
						'Work\'s End'
					],
					[data.no]: [
						'Saturday',
						'Sunday'
					]
				},
				main: {
					[data.eden.name]: [
						data.eden.regular.dmgTotal,
						data.eden.regular.dmgPhysEle,
						data.eden.regular.spCapInitial,
						data.eden.nexus1.name
					]
				},
				secondary: {
					[data.mobius.name]: [
						data.mobius.regular.dmgTotal,
						data.mobius.regular.dmgEntity,
						data.mobius.regular.vuln,
						data.mobius.nexus1.name,
						data.mobius.nexus1.dmgTotal,
						data.mobius.nexus1.breachPhysEle
					],
					[data.su.name]: [
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.regular.vuln,
						data.su.regular.dmgTotal,
						data.su.nexus1.name,
						data.su.nexus1.vuln
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.aponia.name]: [
						data.aponia.regular.basicAtk,
						data.aponia.regular.spRestore,
						data.aponia.regular.vuln,
						data.aponia.nexus2.name
					]
				}
			},
			notes: 'Recommended to resete for Day Off Work on 2F, recommended to swap sigil on 5F. Rotation : Enter Stellar Outburst, use supports and ultimate, hold basic ATK to use combo ATK, then once the bar is past half, use combo ATK again. If the bar is not past half yet, tap basic or weapon to fill the bar.'
		}
	]
};
// Miracle ☆ Magical Girl
const sirin: Guide = {
	name: 'Miracle ☆ Magical Girl',
	acr: 'sirin',
	version: '7.8',
	builds: [
		{
			buff: [
				data.buffs[0][13],
				data.buffs[1][13],
				data.buffs[2][18],
				data.buffs[3][20]
			],
			signet: {
				main: [
					[data.kalpas, '2']
				],
				secondary: [
					[data.vv, '1'],
					[data.sakura, '1'],
					[data.griseo, '1'],
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.madKingsMask, data.anOldPalsLegacy],
				[data.forgetMeNot, data.anOldPalsLegacy],
				[data.tinFlask, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.vke] ],
				[ [data.br], [data.ae, data.rc] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Resplendence'
					],
					[data.first]: [
						'Inner Blaze'
					],
					[data.optional]: [
						'Stellar Breach'
					],
					[data.no]: [
						'Dreamstitch',
						'Tailor'
					]
				},
				main: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.vuln,
						data.kalpas.regular.hp,
						data.kalpas.nexus2.name,
						data.kalpas.nexus2.breachPhysEle
					]
				},
				secondary: {
					[data.vv.name]: [
						data.vv.regular.dmgWeap,
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.nexus1.name
					],
					[data.sakura.name]: [
						data.sakura.regular.dmgTotal,
						data.sakura.regular.vuln,
						data.sakura.regular.evasionAdd,
						data.sakura.nexus1.name
					],
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.black,
						data.griseo.nexus1.name
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.regular.curr,
						data.pardofelis.regular.currKill,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: 'Recommended to have full signature before attempting, otherwise performance is not good; recommended to reset for Inner Blaze on 2F; recommended to swap sigil on 6F.'
		}
	]
};
// Infinite Ouroboros
const mobius: Guide = {
	name: 'Infinite Ouroboros',
	acr: 'mobius',
	version: '7.8',
	builds: [
		{
			buff: [
				data.buffs[0][13],
				data.buffs[3][6],
				data.buffs[3][20]
			],
			signet: {
				main: [
					[data.mobius, '1']
				],
				secondary: [
					[data.hua, '2'],
					[data.griseo, '1'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.sakura, '1']
				]
			},
			emblem: [
				[data.forbiddenSeed, data.boundlessLogos],
				[data.memory, data.boundlessLogos],
				[data.ruinedLegacy, data.boundlessLogos]
			],
			support: [
				[ [data.ae], [data.le] ],
				[ [data.br], [data.rc] ]
			],
			gear: [
				[data.baim, data.lint, data.linm, data.linb],
				[data.hawp, data.hant, data.hanm, data.hanb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Ascension',
						'Dark Assault'
					],
					[data.second]: [
						'Ill Fortune'
					],
					[data.optional]: [
						'Mirage',
						'Ravenousness'
					]
				},
				main: {
					[data.mobius.name]: [
						data.mobius.regular.vuln,
						data.mobius.regular.dmgEntity,
						data.mobius.regular.dmgTotal,
						data.mobius.nexus1.name,
						data.mobius.nexus1.dmgTotal,
						data.mobius.nexus1.breachPhysEle,
						data.mobius.nexus1.reduce
					]
				},
				secondary: {
					[data.hua.name]: [
						data.hua.regular.dmgTotal,
						data.hua.regular.dmgEle,
						data.hua.regular.breachEle,
						data.hua.nexus2.name
					],
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.black,
						data.griseo.regular.grey
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.sakura.name]: [
						data.sakura.regular.dmgTotal,
						data.sakura.regular.vuln,
						data.sakura.regular.spRestore
					]
				}
			},
			notes: `Recommended to only attempt with signature gear, otherwise performance is not good; recommended to swap sigil on 6F, roll Mobius on 7F.
					Can pick Eden's signet <span>${data.eden.regular.spCapInitial}</span>, or Kalpas's signets<span>${data.kalpas.regular.dmgTotal}</span>, and <span>${data.kalpas.regular.dmgPhysEle}</span> as reinforcemnet.
					<p>${data.mobius.nexus1.breachPhysEle}</p>Priority.`
		}
	]
};
// Starchasm Nyx
const nyx: Guide = {
	name: 'Starchasm Nyx',
	acr: 'nyx',
	version: '6.1',
	builds: [
		{
			signet: {
				transitional: [
					[data.hua, '2']
				],
				main: [
					[data.vv, '2']
				],
				secondary: [
					[data.kosma, '2'],
					[data.kalpas, '2'],
					[data.griseo, '2']
				]
			},
			emblem: [
				[data.memory, data.fallingInPastLight],
				[data.psuedoMiracle, data.becauseOfYou],
				[data.tinFlask, data.fallingInPastLight]
			],
			support: [
				[ [data.ae], [data.le] ],
				[ [data.ae], [data.hb] ]
			],
			gear: [
				[data.saun, data.vert, data.verm, data.verb],
				[data.saga, data.wilt, data.wilm, data.wilb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Frigidity'
					],
					[data.first]: [
						'Toxic Bath'
					],
					[data.second]: [
						'Abyssal Gaze',
						'Cocoon Break'
					],
					[data.no]: [
						'Nightmare'
					]
				},
				transitional: {
					[data.hua.name]: [
						data.hua.regular.dmgEle,
						data.hua.regular.dmgTotal,
						data.hua.regular.breachPhys,
						data.hua.nexus2.name
					]
				},
				main: {
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.nexus2.name,
						data.vv.nexus2.breachPhysEle,
						data.vv.nexus2.vuln
					]
				},
				secondary: {
					[data.kosma.name]: [
						data.kosma.regular.extend,
						data.kosma.regular.ult,
						data.kosma.regular.evasion,
						data.kosma.nexus2.name
					],
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.vuln,
						data.kalpas.nexus2.name
					],
					[data.griseo.name]: [
						data.griseo.regular.black,
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.nexus2.name
					]
				}
			},
			notes: `Can pick Sakura's signets <span>${data.sakura.regular.vuln}</span> and <span>${data.sakura.regular.speed}</span> as reinforcement.`
		}
	]
};
//Reign Solaris
const rs: Guide = {
	name: 'Reign Solaris',
	acr: 'rs',
	version: '8.0',
	builds: [
		{
			name: 'Ring',
			buff: [
				data.buffs[0][14],
				data.buffs[3][6],
				data.buffs[3][19]
			],
			signet: {
				main: [
					[data.su, '1'],
					[data.eden, '1']
				],
				secondary: [
					[data.hua, '2'],
					[data.kalpas, '1']
				],
				optional: [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.lightAsABodhiLeaf, data.emptyLikeShala],
				[data.goldGoblet, data.dreamfulGold],
				[data.heavyAsAMillionLives, data.dreamfulGold]
			],
			support: [
				[ [data.sa], [data.vc] ],
				[ [data.sa], [data.br, data.ss] ]
			],
			gear: [
				[data.venv, data.itut, data.itum, data.itub]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Daylight'
					],
					[data.optional]: [
						'Iridescene',
						'Everlasting Radiance'
					],
					[data.no]: [
						'Dominance',
						'Perseverance'
					]
				},
				main: {
					[data.su.name]: [
						data.su.regular.dmgTotal,
						data.su.regular.vuln,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.nexus1.name,
						data.su.nexus1.vuln,
						data.su.nexus1.breachPhysEle
					],
					[data.eden.name]: [
						data.eden.regular.dmgTotal,
						data.eden.regular.dmgPhysEle,
						data.eden.regular.spCapInitial,
						data.eden.nexus1.name
					]
				},
				secondary: {
					[data.hua.name]: [
						data.hua.regular.dmgTotal,
						data.hua.regular.dmgPhys,
						data.hua.regular.breachPhys,
						data.hua.nexus2.name,
						data.hua.nexus2.stackCap
					],
					
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.hp,
						data.kalpas.regular.vuln,
						data.kalpas.nexus1.name,
						data.kalpas.nexus1.fire,
						data.kalpas.nexus1.dmgBonus
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `<p>Recommended to bring Dreamseeker. After obtaining Kalpas, remember to lower HP. Can also pick Griseo Red, Aponia 2(1 3 5) as reinforcement.

					Rotation:</p>
					Tap weapon to get on the hoverboard, then keep moving around. 
					After getting <p>${data.su.nexus1.name}</p>, must get close to enemies to damage them. When fighting bosses, can hold evade to accelerate and dodge`
		},
		{
			name: 'Charge',
			buff: [
				data.buffs[0][14],
				data.buffs[3][6],
				data.buffs[3][19]
			],
			signet: {
				main: [
					[data.vv, '1'],
					[data.eden, '1']
				],
				secondary: [
					[data.griseo, '1'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.aponia, '2']
				]
			},
			emblem: [
				[data.psuedoMiracle, data.fallingInPastLight],
				[data.goldGoblet, data.fallingInPastLight],
				[data.farawayShip, data.fallingInPastLight]
			],
			support: [
				[ [data.sa], [data.vc] ],
				[ [data.sa], [data.ss] ]
			],
			gear: [
				[data.venv, data.itut, data.itum, data.itub]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Dominance'
					],
					[data.second]: [
						'Perseverance'
					],
					[data.no]: [
						'Everlasting Radiance',
						'Daylight',
						'Iridescence'
					]
				},
				main: {
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.regular.dmgWeap,
						data.vv.regular.dmgPhysEle,
						data.vv.nexus1.name,
						data.vv.nexus1.breachPhys,
						data.vv.nexus1.blades
					],
					[data.eden.name]: [
						data.eden.regular.dmgTotal,
						data.eden.regular.dmgPhysEle,
						data.eden.regular.spCapInitial,
						data.eden.nexus1.name
					]
				},
				secondary: {
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.black,
						data.griseo.nexus1.name
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.aponia.name]: [
						data.aponia.regular.basicAtk,
						data.aponia.regular.spRestore,
						data.aponia.regular.vuln,
						data.aponia.nexus2.name
					],
				}
			},
			notes: `<p>Rotation:</p>
					Tap weapon to get on the hoverboard, hold basic to charge attack, tap basic to recharge. 
					Hold weapon to get off the board, then repeat, don't need to outburst
					
					Pick only 1 from Aponia 2 enhanced, can also pick Su 1 (Both combo boosts, TDM, vulnerability) as reinforcement.`
		}
	]
};


// Reveris Calico
const pardo: Guide = {
	name: 'Reverist Calico',
	acr: 'pardo',
	version: '7.3',
	builds: [
		{
			buff: [
				data.buffs[0][10],
				data.buffs[1][12],
				data.buffs[2][15],
				data.buffs[3][16]
			],
			signet: {
				main: [
					[data.eden, '1']
				],
				secondary: [
					[data.su, '1'],
					[data.griseo, '1'],
					[data.kalpas, '1']
				],
				optional: [
					[data.aponia, '1']
				]
			},
			emblem: [
				[data.goldGoblet, data.dreamfulGold],
				[data.lightAsABodhiLeaf, data.dreamfulGold],
				[data.heavyAsAMillionLives, data.fallingInPastLight]
			],
			support: [
				[ [data.bke], [data.ae] ],
				[ [data.ae], [data.br] ]
			],
			gear: [
				[data.puph, data.cect, data.cecm, data.cecb],
				[data.hawp, data.brot, data.wilm, data.brob],
				[data.hawp, data.brot, data.welm, data.brob],
				[data.hawp, data.wilt, data.wilm, data.wilb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Cat\'s Eyes',
						'Hidden Claws'
					],
					[data.no]: [
						'the Tailpiece',
						'Nighteye',
						'Phantasma'
					]
				},
				main: {
					[data.eden.name]: [
						data.eden.regular.dmgTotal,
						data.eden.regular.dmgPhysEle,
						data.eden.regular.spCapInitial,
						data.eden.regular.spRestore,
						data.eden.nexus1.name
					]
				},
				secondary: {
					[data.su.name]: [
						data.su.regular.vuln,
						data.su.regular.dmgTotal,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.nexus1.name,
						data.su.nexus1.vuln,
						data.su.nexus1.breachPhysEle
					],
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.black,
						data.griseo.regular.yellow,
						data.griseo.nexus1.name
					],
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.hp,
						data.kalpas.regular.vuln,
						data.kalpas.nexus1.name,
						data.kalpas.nexus1.fire,
						data.kalpas.nexus1.dmgBonus
					]
				},
				optional: {
					[data.aponia.name]: [
						data.aponia.regular.spRestore,
						data.aponia.regular.dmgPhysEle,
						data.aponia.regular.dmgTotal,
						data.aponia.nexus1.name
					]
				}
			},
			notes: `After getting Kalpas1 nexus, reduce HP at shop; Cecilia: Youth > N-EX TB + Willows M > N-EX TB + Welt M > Willows set; recommended to swap sigil on 5F.
					Can pick Vill-V's signets <span>${data.vv.regular.vuln}</span>, and <span>${data.vv.regular.dmgTotal}</span>, or Pardofelis's signets <span>${data.pardofelis.regular.dmgTotal}</span>, <span>${data.pardofelis.regular.dmgPhysEle}</span>, and <span>${data.pardofelis.regular.spHpCap}</span> as reinforcement.
					<p>Blessing of Tailpiece</p>1st if Infinity +2.
					<p>${data.griseo.regular.red}</p>Buy from shop.`
		}
	]
};
// Palatinus Equinox
const pe: Guide = {
	name: 'Palatinus Equinox',
	acr: 'pe',
	version: '6.1',
	builds: [
		{
			signet: {
				transitional: [
					[data.vv, '1']
				],
				main: [
					[data.griseo, '2']
				],
				secondary: [
					[data.aponia, '2'],
					[data.pardofelis, '1'],
					[data.sakura, '1']
				]
			},
			emblem: [
				[data.psuedoMiracle, data.theLonelyMoon],
				[data.rainbowOfAbsence, data.theLonelyMoon],
				[data.farawayShip, data.fallingInPastLight]
			],
			support: [
				[ [data.ss], [data.bke] ],
				[ [data.ss], [data.br] ]
			],
			gear: [
				[data.miat, data.biat, data.biam, data.biab],
				[data.miec, data.mict, data.danm, data.micb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Exodus'
					],
					[data.first]: [
						'Abyssal Chant'
					],
					[data.second]: [
						'Commitment',
						'Equinox'
					],
					[data.no]: [
						'Gallop'
					]
				},
				transitional: {
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.nexus1.name
					]
				},
				main: {
					[data.griseo.name]: [
						data.griseo.regular.black,
						data.griseo.regular.blue,
						data.griseo.regular.grey,
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.nexus2.name,
						data.griseo.nexus2.orange,
						data.griseo.nexus2.green,
						data.griseo.nexus2.purple
					]
				},
				secondary: {
					[data.aponia.name]: [
						data.aponia.regular.basicAtk,
						data.aponia.regular.vuln,
						data.aponia.nexus2.name,
						data.aponia.nexus2.vuln
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.nexus1.name
					],
					[data.sakura.name]: [
						data.sakura.regular.dmgTotal,
						data.sakura.regular.evasionAdd,
						data.sakura.regular.vuln
					]
				}
			},
			notes: `<p>${data.griseo.nexus2.purple}</p>Priority.`
		}
	]
};
const thelema: Guide = {
	name: 'Mad Pleasure: Shadowbringer',
	acr: 'thelema',
	version: '7.7',
	builds: [
		{
			buff: [
				data.buffs[0][12],
				data.buffs[1][13],
				data.buffs[2][9],
				data.buffs[3][6]
			],
			signet: {
				main: [
					[data.mobius, '1']
				],
				secondary: [
					[data.sakura, '2'],
					[data.su, '1'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.eden, '1']
				]
			},
			emblem: [
				[data.forbiddenSeed, data.boundlessLogos],
				[data.forgetMeNot, data.tsukimiHimiko],
				[data.heavyAsAMillionLives, data.tsukimiHimiko]
			],
			support: [
				[ [data.vc], [data.sn] ],
				[ [data.ae], [data.br, data.rc] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Feast'
					],
					[data.second]: [
						'Goblet'
					],
					[data.optional]: [
						'Nobility'
					],
					[data.no]: [
						'Fine Clothes',
						'Waltz'
					]
				},
				main: {
					[data.mobius.name]: [
						data.mobius.regular.dmgEntity,
						data.mobius.regular.dmgTotal,
						data.mobius.regular.vuln,
						data.mobius.nexus1.name,
						data.mobius.nexus1.dmgTotal,
						data.mobius.nexus1.breachPhysEle,
						data.mobius.nexus1.reduce
					]
				},
				secondary: {
					[data.sakura.name]: [
						data.sakura.regular.vuln,
						data.sakura.regular.dmgTotal,
						data.sakura.regular.evasionAdd,
						data.sakura.regular.evasionReset,
						data.sakura.nexus2.name
					],
					[data.su.name]: [
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.regular.vuln,
						data.su.regular.dmgTotal,
						data.su.nexus1.name,
						data.su.nexus1.vuln
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.eden.name]: [
						data.eden.regular.dmgTotal,
						data.eden.regular.dmgPhysEle,
						data.eden.regular.spCapInitial,
						data.eden.nexus1.name
					]
				}
			},
			notes: `Recommended to swap sigil on 6F. Rotation: Evade then keep pressing basic ATK, use ultimate whenever available. If [Goblet] is obtained, can wait till evasion charges are used up to cast ultimate. Advanced rotation: Tap weapon - hold weapon - basic 3x, repeat twice to fill Enjoyment.
					Can pick Griseo's signets <span>${data.griseo.regular.red}</span>, and <span>${data.griseo.regular.yellow}</span>, or Vill-V's signets <span>${data.vv.regular.vuln}</span>, and <span>${data.vv.regular.dmgTotal}</span> as reinforcement.
					<p>${data.mobius.nexus1.breachPhysEle}</p>Priority.`
		}
	]
};
// Midnight Absinthe
const raven: Guide = {
	name: 'Midnight Absinthe',
	acr: 'raven',
	version: '5.9',
	builds: [
		{
			signet: {
				main: [
					[data.vv, '2']
				],
				secondary: [
					[data.aponia, '2'],
					[data.griseo, '1'],
					[data.eden, '2'],
					[data.sakura, '2']
				]
			},
			emblem: [
				[data.psuedoMiracle, data.fallingInPastLight],
				[data.veilOfTears, data.fallingInPastLight],
				[data.goodOldDays, data.fallingInPastLight]
			],
			support: [
				[ [data.ae], [data.vc] ],
				[ [data.ae], [data.br] ]
			],
			gear: [
				[data.obwi, data.aslt, data.aslm, data.aslb],
				[data.hawp, data.leet, data.tham, data.leeb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Ominous Mist'
					],
					[data.first]: [
						'Arrowhead'
					],
					[data.no]: [
						'Raven Plume',
						'Suppression',
						'Wild Hunt'
					]
				},
				main: {
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.regular.dmgRanged,
						data.vv.nexus2.name,
						data.vv.nexus2.breachPhysEle,
						data.vv.nexus2.vuln,
						data.vv.nexus2.gravField
					]
				},
				secondary: {
					[data.aponia.name]: [
						data.aponia.regular.dmgReduc,
						data.aponia.regular.dmgPhysEle,
						data.aponia.regular.vuln,
						data.aponia.nexus2.name,
						data.aponia.nexus2.dmgPhysEle,
						data.aponia.nexus2.breachPhysEle,
						data.aponia.nexus2.vuln
					],
					[data.griseo.name]: [
						data.griseo.regular.black,
						data.griseo.regular.red,
						data.griseo.regular.yellow
					],
					[data.eden.name]: [
						data.eden.regular.dmgPhysEle,
						data.eden.regular.dmgTotal,
						data.eden.nexus2.name
					],
					[data.sakura.name]: [
						data.sakura.regular.dmgTotal,
						data.sakura.regular.vuln,
						data.sakura.nexus2.name
					]
				}
			},
			notes: `<p>${data.vv.nexus2.breachPhysEle}, ${data.vv.nexus2.vuln}</p>Priority.
					<p>${data.aponia.nexus2.breachPhysEle}</p>If lacking breach.
					<p>Griseo</p>Buy signets in shop if possible.`
		}
	]
};
// Ritual Imayoh
const ri: Guide = {
	name: 'Ritual Imayoh',
	acr: 'ri',
	version: '5.9',
	builds: [
		{
			signet: {
				main: [
					[data.aponia, '2'],
					[data.kevin, '1']
				],
				secondary: [
					[data.griseo, '2'],
					[data.sakura, '2'],
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.veilOfTears, data.theLonelyMoon],
				[data.burden, data.theLonelyMoon],
				[data.tinFlask, data.homeTown]
			],
			support: [
				[ [data.sn], [data.le] ],
				[ [data.vc], [data.br] ]
			],
			gear: [
				[data.pobl, data.elyt, data.elym, data.elyb],
				[data.dovo, data.mict, data.danm, data.micb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Prosperity'
					],
					[data.first]: [
						'Dawn'
					],
					[data.second]: [
						'Blossom'
					],
					[data.no]: [
						'Fertility',
						'Torch'
					]
				},
				main: {
					[data.aponia.name]: [
						data.aponia.regular.basicAtk,
						data.aponia.regular.spRestore,
						data.aponia.regular.vuln,
						data.aponia.nexus2.name,
						data.aponia.nexus2.dmgPhysEle,
						data.aponia.nexus2.breachPhysEle,
						data.aponia.nexus2.vuln
					],
					[data.kevin.name]: [
						data.kevin.regular.breachPhys,
						data.kevin.nexus1.name
					]
				},
				secondary: {
					[data.griseo.name]: [
						data.griseo.regular.black,
						data.griseo.regular.red,
						data.griseo.regular.yellow
					],
					[data.sakura.name]: [
						data.sakura.regular.dmgTotal,
						data.sakura.regular.vuln,
						data.sakura.nexus2.name
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `<p>${data.aponia.nexus2.breachPhysEle}</p>Priority.`
		}
	]
};
// Deepspace Anchor: First Light
const sena: Guide = {
	name: 'Deepspace Anchor: First Light',
	acr: 'sena',
	version: '7.8',
	builds: [
		{
			buff: [
				data.buffs[3][6],
				data.buffs[3][20]
			],
			signet: {
				main: [
					[data.vv, '1']
				],
				secondary: [
					[data.hua, '2'],
					[data.su, '1'],
					[data.griseo, '1']
				],
				optional: [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.psuedoMiracle, data.fallingInPastLight],
				[data.memory, data.fallingInPastLight],
				[data.heavyAsAMillionLives, data.fallingInPastLight]
			],
			support: [
				[ [data.ae], [data.fr] ],
				[ [data.rc], [data.br] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Initial Dawning'
					],
					[data.second]: [
						'Effortlessness',
						'Stellar Drive'
					],
					[data.no]: [
						'Increment',
						'Sudden Thunderbolt'
					]
				},
				main: {
					[data.vv.name]: [
						data.vv.regular.dmgWeap,
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.regular.dmgPhysEle,
						data.vv.nexus1.name
					]
				},
				secondary: {
					[data.hua.name]: [
						data.hua.regular.dmgTotal,
						data.hua.regular.dmgEle,
						data.hua.regular.breachEle,
						data.hua.nexus2.name,
						data.hua.nexus2.stackCap
					],
					[data.su.name]: [
						data.su.regular.dmgTotal,
						data.su.regular.vuln,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.nexus1.name,
						data.su.nexus1.vuln
					],
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.black,
						data.griseo.nexus1.name
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `If not using full gear, recommended to reset for Stellar Drive on 2F; recommended to swap sigil on 5F. After Kalpas nexus is obtained, leave around 1k HP to have a margin of error. Rotation : tap weapon active - evade - attack - tap whatever button lights up. when the bottom bar is light blue, use ultimate then continue to press the buttons that light up.
					Can pick Sakura's signet <span>${data.sakura.regular.dmgTotal}</span> or Eden's signets <span>${data.eden.regular.dmgTotal}</span>, and <span>${data.eden.regular.dmgPhysEle}</span> as reinforcement.`
		}
	]
};
// Stygian Nymph
const sn: Guide = {
	name: 'Stygian Nymph',
	acr: 'sn',
	version: '5.9',
	builds: [
		{
			signet: {
				transitional: [
					[data.sakura, '1']
				],
				main: [
					[data.kosma, '2'],
					[data.hua, '2']
				],
				secondary: [
					[data.kalpas, '2'],
					[data.griseo, '2']
				]
			},
			emblem: [
				[data.forgetMeNot, data.theLonelyMoon],
				[data.fragileFriend, data.itWillBeWritten],
				[data.stainedSakura, data.tsukimiHimiko]
			],
			support: [
				[ [data.sa, data.vc], [data.ss] ],
				[ [data.ss], [data.br] ]
			],
			gear: [
				[data.paac, data.biat, data.biam, data.biab],
				[data.hawp, data.allt, data.allm, data.allb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Vurnerable Duality'
					],
					[data.first]: [
						'Intergrowth'
					],
					[data.second]: [
						'Kindred',
						'Might of Duality',
						'Union'
					]
				},
				transitional: {
					[data.sakura.name]: [
						data.sakura.regular.evasionAdd,
						data.sakura.regular.vuln,
						data.sakura.nexus1.name
					]
				},
				main: {
					[data.kosma.name]: [
						data.kosma.regular.extend,
						data.kosma.regular.ult,
						data.kosma.regular.evasion,
						data.kosma.nexus2.name,
						data.kosma.nexus2.hpRestore,
						data.kosma.nexus2.breachPhysEle,
						data.kosma.nexus2.dmgPhysEle
					],
					[data.hua.name]: [
						data.hua.regular.dmgReduc,
						data.hua.nexus2.name,
						data.hua.nexus2.extend
					]
				},
				secondary: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.vuln,
						data.kalpas.nexus2.name
					],
					[data.griseo.name]: [
						data.griseo.regular.black,
						data.griseo.regular.yellow
					]
				}
			},
			notes: `<p>${data.sakura.regular.evasionAdd}</p>If not SS.
					<p>${data.kosma.nexus2.breachPhysEle}</p>Priority.
					<p>${data.hua.regular.dmgReduc}</p>Recommended to upgrade.`
		}
	]
};
// Jovial Deception: Shadowdimmer
const songque: Guide = {
	name: 'Jovial Deception: Shadowdimmer',
	acr: 'songque',
	version: '7.8',
	builds: [
		{
			buff: [
				data.buffs[1][13],
				data.buffs[2][18],
				data.buffs[3][6]
			],
			signet: {
				main: [
					[data.vv, '1']
				],
				secondary: [
					[data.hua, '2'],
					[data.mobius, '1'],
					[data.kalpas, '2']
				],
				optional: [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.psuedoMiracle, data.fallingInPastLight],
				[data.memory, data.fallingInPastLight],
				[data.farawayShip, data.fallingInPastLight]
			],
			support: [
				[ [data.ae], [data.vc] ],
				[ [data.dafl], [data.br] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Lingering Shadows'
					],
					[data.second]: [
						'Divination'
					],
					[data.optional]: [
						'Premonition'
					],
					[data.no]: [
						'Ambush',
						'Summonings'
					]
				},
				main: {
					[data.vv.name]: [
						data.vv.regular.dmgWeap,
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.regular.dmgRanged,
						data.vv.nexus1.name
					]
				},
				secondary: {
					[data.hua.name]: [
						data.hua.regular.breachPhys,
						data.hua.regular.dmgPhys,
						data.hua.regular.dmgTotal,
						data.hua.nexus2.name,
						data.hua.nexus2.stackCap
					],
					[data.mobius.name]: [
						data.mobius.regular.dmgTotal,
						data.mobius.regular.dmgEntity,
						data.mobius.regular.vuln,
						data.mobius.nexus1.name,
						data.mobius.nexus1.dmgTotal,
						data.mobius.nexus1.breachPhysEle
					],
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.hp,
						data.kalpas.nexus2.name
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Recommended to swap sigil on 5F. Rotation : Tap basic to gather then use supports, then use stellar outburst, tap shadow to fill up bar, keep basic attacking to use up bar. After finishing the bar, can either use combo ATK or tap another shadow to fill up the bar again and repeat.
					Can pick Griseo's signets <span>${data.griseo.regular.red}</span>, <span>${data.griseo.regular.yellow}</span>, and <span>${data.griseo.regular.black}</span> as reinforcement.`
		}
	]
};
// Spina Astera
const spa: Guide = {
	name: 'Spina Astera',
	acr: 'spa',
	version: '7.6',
	builds: [
		{
			buff: [
				data.buffs[0][11],
				data.buffs[1][12],
				data.buffs[2][20],
				data.buffs[3][6]
			],
			signet: {
				main: [
					[data.kalpas, '1']
				],
				secondary: [
					[data.hua, '2'],
					[data.su, '1'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.eden, '1']
				]
			},
			emblem: [
				[data.madKingsMask, data.anOldPalsLegacy],
				[data.memory, data.becauseOfYou],
				[data.heavyAsAMillionLives, data.anOldPalsLegacy]
			],
			support: [
				[ [data.vke], [data.bke] ],
				[ [data.br], [data.ae] ]
			],
			gear: [
				[data.asdi, data.fltt, data.fltm, data.fltb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Wild Flare'
					],
					[data.first]: [
						'Star Quillon'
					],
					[data.second]: [
						'Alrescha',
						'Holy Flame'
					],
					[data.optional]: [
						'Radiant Formation'
					]
				},
				main: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.vuln,
						data.kalpas.regular.hp,
						data.kalpas.nexus1.name,
						data.kalpas.nexus1.fire,
						data.kalpas.nexus1.dmgBonus
					]
				},
				secondary: {
					[data.hua.name]: [
						data.hua.regular.dmgTotal,
						data.hua.regular.dmgEle,
						data.hua.regular.breachEle,
						data.hua.nexus2.name,
						data.hua.nexus2.stackCap
					],
					[data.su.name]: [
						data.su.regular.vuln,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.regular.dmgTotal,
						data.su.nexus1.name,
						data.su.nexus1.breachPhysEle,
						data.su.nexus1.vuln
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.eden.name]: [
						data.eden.regular.dmgTotal,
						data.eden.regular.dmgPhysEle,
						data.eden.regular.spCapInitial,
						data.eden.nexus1.name
					]
				}
			},
			notes: `Only Fire G4 or Flavors of Time set are recommended, recommended to reset for Star Quillon on 2F; Can swap to Hometown on 2nd shop, swap AE support to VKE / BKE vs Heimdall, if taking Kalpas early need to reduce HP in shop.
					Can pick Griseo's signets <span>${data.griseo.regular.red}</span>, and <span>${data.griseo.regular.yellow}</span> as reinforcement.`
		}
	]
};
// Sixth Serenade
const ss: Guide = {
	name: 'Sixth Serenade',
	acr: 'ss',
	version: '6.9',
	builds: [
		{
			buff: [
				data.buffs[1][7],
				data.buffs[2][13],
				data.buffs[3][6]
			],
			signet: {
				main: [
					[data.eden, '1']
				],
				secondary: [
					[data.sakura, '2'],
					[data.su, '1'],
					[data.pardofelis, '1'],
					[data.aponia, '2']
				]
			},
			emblem: [
				[data.goldGoblet, data.dreamfulGold],
				[data.forgetMeNot, data.dreamfulGold],
				[data.heavyAsAMillionLives, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.le, data.bke] ],
				[ [data.ae], [data.br, data.rc] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Nocturnal Tides',
						'Finale'
					],
					[data.first]: [
						'Tragedy'
					],
					[data.optional]: [
						'Expiation',
						'Raven Eye'
					]
				},
				main: {
					[data.eden.name]: [
						data.eden.regular.dmgPhysEle,
						data.eden.regular.dmgTotal,
						data.eden.regular.spCapInitial,
						data.eden.nexus1.name
					]
				},
				secondary: {
					[data.sakura.name]: [
						data.sakura.regular.dmgTotal,
						data.sakura.regular.evasionAdd,
						data.sakura.regular.vuln,
						data.sakura.regular.evasionReset,
						data.sakura.nexus2.name
					],
					[data.su.name]: [
						data.su.regular.dmgTotal,
						data.su.regular.vuln,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.nexus1.name,
						data.su.nexus1.breachPhysEle,
						data.su.nexus1.vuln
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					],
					[data.aponia.name]: [
						data.aponia.regular.basicAtk,
						data.aponia.regular.spRestore,
						data.aponia.regular.vuln,
						data.aponia.nexus2.name
					]
				}
			},
			notes: `Recommended to reset for 2F Tragedy; Eden SP recovery can improve rotations, recommended to buy from shop.
					Can pick Griseo's signets <span>${data.griseo.regular.red}</span>, <span>${data.griseo.regular.yellow}</span>, and <span>${data.griseo.regular.grey}</span> as reinforcement.`
		}
	]
};
// Jade Knight
const sus: Guide = {
	name: 'Jade Knight',
	acr: 'sus',
	version: '7.6',
	builds: [
		{
			buff: [
				data.buffs[0][11],
				data.buffs[1][12],
				data.buffs[2][20],
				data.buffs[3][20]
			],
			signet: {
				main: [
					[data.eden, '2']
				],
				secondary: [
					[data.griseo, '1'],
					[data.hua, '2'],
					[data.su, '1']
				],
				optional: [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.goldGoblet, data.dreamfulGold],
				[data.memory, data.homeTown],
				[data.keyToTheDeep, data.dreamfulGold]
			],
			support: [
				[ [data.le], [data.bke] ],
				[ [data.le], [data.br, data.rc] ]
			],
			gear: [
				[data.nost, data.list, data.lism, data.lisb],
				[data.codu, data.wilt, data.wilm, data.wilb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Great Blade'
					],
					[data.second]: [
						'Cloudwalker'
					],
					[data.no]: [
						'Jade Moon',
						'Shaft',
						'Smoky Waft'
					]
				},
				main: {
					[data.eden.name]: [
						data.eden.regular.dmgTotal,
						data.eden.regular.dmgPhysEle,
						data.eden.regular.spCapInitial,
						data.eden.regular.spRestore,
						data.eden.nexus2.name
					]
				},
				secondary: {
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.black,
						data.griseo.nexus1.name
					],
					[data.hua.name]: [
						data.hua.regular.dmgTotal,
						data.hua.regular.dmgEle,
						data.hua.regular.breachEle,
						data.hua.nexus2.name,
						data.hua.nexus2.stackCap
					],
					[data.su.name]: [
						data.su.regular.vuln,
						data.su.regular.dmgTotal,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.nexus1.name,
						data.su.nexus1.breachPhysEle
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Recommended to swap sigil on 5F.
					Can pick Kalpas's signets <span>${data.kalpas.regular.dmgTotal}</span>, and <span>${data.kalpas.regular.dmgPhysEle}</span> as reinforcement.`
		}
	]
};
// Shadow Knight
const sk: Guide = {
	name: 'Shadow Knight',
	acr: 'sk',
	version: '7.7',
	builds: [
		{
			buff: [
				data.buffs[0][12],
				data.buffs[1][12],
				data.buffs[2][9],
				data.buffs[3][21]
			],
			signet: {
				main: [
					[data.kalpas, '1']
				],
				secondary: [
					[data.su, '1'],
					[data.hua, '2'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.sakura, '1']
				]
			},
			emblem: [
				[data.madKingsMask, data.anOldPalsLegacy],
				[data.lightAsABodhiLeaf, data.anOldPalsLegacy],
				[data.heavyAsAMillionLives, data.anOldPalsLegacy]
			],
			support: [
				[ [data.vc], [data.sn] ],
				[ [data.br], [data.ae, data.rc] ]
			],
			gear: [
				[data.nure, data.swet, data.swem, data.sweb],
				[data.hawp, data.zent, data.zenm, data.zenb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Forces',
						'Lunar Eclipse'
					],
					[data.optional]: [
						'Form & Spirit',
						'Mindfulness'
					],
					[data.no]: [
						'Six Fists'
					]
				},
				main: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.hp,
						data.kalpas.nexus1.name,
						data.kalpas.nexus1.fire,
						data.kalpas.nexus1.dmgBonus
					]
				},
				secondary: {
					[data.su.name]: [
						data.su.regular.vuln,
						data.su.regular.dmgTotal,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.nexus1.name,
						data.su.nexus1.vuln,
						data.su.nexus1.breachPhysEle
					],
					[data.hua.name]: [
						data.hua.regular.dmgTotal,
						data.hua.regular.dmgEle,
						data.hua.regular.breachEle,
						data.hua.nexus2.name,
						data.hua.nexus2.stackCap
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.sakura.name]: [
						data.sakura.regular.dmgTotal,
						data.sakura.regular.vuln,
						data.sakura.regular.evasionAdd,
						data.sakura.nexus1.name
					]
				}
			},
			notes: `Must have at least Nuada's ; lower HP to around 1000, pay attention to dodging Huodou's phase 2 transition fire breath attack; recommended to swap sigil on 5F.
					Can pick Griseo's signet <span>${data.griseo.regular.red}</span>, or Kosma's signets <span>${data.kosma.regular.atk}</span>, <span>${data.kosma.regular.ult}</span>, and <span>${data.kosma.regular.evasion}</span> as reinforcement.`
		}
	]
};
// Silverwing N-EX
const sw: Guide = {
	name: 'Silverwing N-EX',
	acr: 'sw',
	version: '6.4',
	builds: [
		{
			buff: [
				data.buffs[0][1],
				data.buffs[1][4],
				data.buffs[2][4],
				data.buffs[3][3]
			],
			signet: {
				main: [
					[data.aponia, '2']
				],
				secondary: [
					[data.hua, '2'],
					[data.su, '2'],
					[data.griseo, '2']
				],
				optional: [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.veilOfTears, data.outOfReach],
				[data.memory, data.outOfReach],
				[data.keyToTheDeep, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.vc, data.br] ],
				[ [data.ae], [data.br] ]
			],
			gear: [
				[data.fafl, data.brot, data.brom, data.brob],
				[data.hawp, data.elyt, data.elym, data.elyb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Phantom Plumes'
					],
					[data.first]: [
						'Grey Falcon'
					],
					[data.second]: [
						'Silver Eagle'
					],
					[data.no]: [
						'Pale Feathers',
						'Sharp Eyes'
					]
				},
				main: {
					[data.aponia.name]: [
						data.aponia.regular.basicAtk,
						data.aponia.regular.spRestore,
						data.aponia.regular.dmgTotal,
						data.aponia.nexus2.name,
						data.aponia.nexus2.dmgPhysEle,
						data.aponia.nexus2.breachPhysEle,
						data.aponia.nexus2.vuln
					]
				},
				secondary: {
					[data.hua.name]: [
						data.hua.regular.dmgEle,
						data.hua.regular.dmgTotal,
						data.hua.regular.breachEle,
						data.hua.nexus2.name
					],
					[data.su.name]: [
						data.su.regular.spRestore,
						data.su.regular.vuln,
						data.su.regular.combo60,
						data.su.regular.dmgTotal,
						data.su.nexus2.name
					],
					[data.griseo.name]: [
						data.griseo.regular.grey,
						data.griseo.regular.red,
						data.griseo.regular.yellow
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Can pick Kalpas and Eden signets as reinforcement.
					<p>${data.aponia.nexus2.breachPhysEle}</p>Priority.`
		}
	]
};
// Terminal Aide 0017
const ta: Guide = {
	name: 'Terminal Aide 0017',
	acr: 'ta',
	version: '7.1',
	builds: [
		{
			buff: [
				data.buffs[3][2],
				data.buffs[3][14]
			],
			signet: {
				main: [
					[data.vv, '1']
				],
				secondary: [
					[data.kevin, '1'],
					[data.griseo, '1'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.eden, '1']
				]
			},
			emblem: [
				[data.psuedoMiracle, data.fallingInPastLight],
				[data.burden, data.fallingInPastLight],
				[data.farawayShip, data.fallingInPastLight]
			],
			support: [
				[ [data.sa], [data.bke] ],
				[ [data.ss], [data.sa] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Guilding'
					],
					[data.first]: [
						'Recursion'
					],
					[data.optional]: [
						'Restructuring'
					],
					[data.no]: [
						'Override',
						'Stimulus'
					]
				},
				main: {
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.regular.spRestore,
						data.vv.nexus1.name,
						data.vv.nexus1.blades
					]
				},
				secondary: {
					[data.kevin.name]: [
						data.kevin.regular.dmgTotal,
						data.kevin.regular.dmgPhys,
						data.kevin.regular.breachPhys,
						data.kevin.nexus1.name,
						data.kevin.nexus1.effect
					],
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.black,
						data.griseo.nexus1.name
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.eden.name]: [
						data.eden.regular.dmgTotal,
						data.eden.regular.dmgPhysEle,
						data.eden.regular.spCapInitial,
						data.eden.nexus1.name
					]
				}
			},
			notes: `Recommended to reset for Recursion on 2F; recommended to swap sigil on 5F.
					Can pick Kalpas's signet <span>${data.kalpas.regular.vuln}</span> as reinforcement.`
		}
	]
};
// Striker Fulminata
const vb: Guide = {
	name: 'Striker Fulminata',
	acr: 'vb',
	version: '5.9',
	builds: [
		{
			signet: {
				transitional: [
					[data.su, '2']
				],
				main: [
					[data.kevin, '1']
				],
				secondary: [
					[data.griseo, '2'],
					[data.aponia, '2'],
					[data.eden, '2']
				]
			},
			emblem: [
				[data.lightAsABodhiLeaf, data.theLonelyMoon],
				[data.burden, data.theLonelyMoon],
				[data.heavyAsAMillionLives, data.dreamfulGold]
			],
			support: [
				[ [data.le], [data.sn] ],
				[ [data.vc], [data.ss] ]
			],
			gear: [
				[data.dabr, data.dirt, data.dirm, data.dirb],
				[data.dosa, data.elyt, data.dirm, data.elyb],
				[data.thsa, data.rebt, data.marm, data.rebb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Current'
					],
					[data.first]: [
						'Karma'
					],
					[data.second]: [
						'Idea',
						'Thunder'
					],
					[data.no]: [
						'Zanshin'
					]
				},
				transitional: {
					[data.su.name]: [
						data.su.regular.combo25,
						data.su.regular.spRestore,
						data.su.regular.combo60,
						data.su.regular.dmgTotal,
						data.su.nexus2.name
					]
				},
				main: {
					[data.kevin.name]: [
						data.kevin.regular.breachPhys,
						data.kevin.regular.spRestore,
						data.kevin.nexus1.name,
						data.kevin.nexus1.effect,
						data.kevin.nexus1.dur
					]
				},
				secondary: {
					[data.griseo.name]: [
						data.griseo.regular.black,
						data.griseo.regular.grey,
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.nexus2.name
					],
					[data.aponia.name]: [
						data.aponia.regular.dmgPhysEle,
						data.aponia.nexus2.name,
						data.aponia.nexus2.dmgPhysEle,
						data.aponia.nexus2.vuln
					],
					[data.eden.name]: [
						data.eden.regular.dmgReduc,
						data.eden.regular.dmgPhysEle,
						data.eden.regular.dmgTotal,
						data.eden.nexus2.name
					]
				}
			},
			notes: `<p>Recommended Gear</p>Build 2: If not enough breach or impair, pick breach from signets.
					<p>${data.su.regular.combo25}, ${data.su.regular.combo60}</p>Buy from shop if possible.
					<p>${data.griseo.regular.grey}, ${data.eden.regular.dmgReduc}</p>If needed.`
		}
	]
};
// Twilight Paladin
const ve: Guide = {
	name: 'Twilight Paladin',
	acr: 've',
	version: '5.9',
	builds: [
		{
			signet: {
				main: [
					[data.su, '2'],
					[data.aponia, '2']
				],
				secondary: [
					[data.griseo, '2'],
					[data.eden, '2'],
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.lightAsABodhiLeaf, data.theLonelyMoon],
				[data.veilOfTears, data.dreamfulGold],
				[data.goodOldDays, data.dreamfulGold]
			],
			support: [
				[ [data.sa], [data.sn] ],
				[ [data.ss], [data.br] ]
			],
			gear: [
				[data.heso, data.kaft, data.kafm, data.kafb],
				[data.hawp, data.elyt, data.siem, data.elyb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Banishment'
					],
					[data.first]: [
						'Penalty'
					],
					[data.second]: [
						'Dusk'
					],
					[data.reinforcement]: [
						'Radiance',
						'Sanction'
					]
				},
				main: {
					[data.su.name]: [
						data.su.regular.combo25,
						data.su.regular.spRestore,
						data.su.regular.vuln,
						data.su.regular.dmgTotal
					],
					[data.aponia.name]: [
						data.aponia.regular.basicAtk,
						data.aponia.regular.dmgPhysEle,
						data.aponia.nexus2.name,
						data.aponia.nexus2.breachPhysEle
					]
				},
				secondary: {
					[data.griseo.name]: [
						data.griseo.regular.grey,
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.nexus2.name,
						data.griseo.nexus2.orange
					],
					[data.eden.name]: [
						data.eden.regular.dmgPhysEle,
						data.eden.regular.dmgTotal,
						data.eden.nexus2.name
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `<p>Su</p>Don't pick enhanced signets. Double Ego start.
					<p>${data.su.regular.spRestore}</p>Priority.
					<p>${data.griseo.nexus2.orange}</p>If lacking breach.`
		}
	]
};
// Valkyrie Gloria
const vg: Guide = {
	name: 'Valkyrie Gloria',
	acr: 'vg',
	version: '5.9',
	builds: [
		{
			signet: {
				transitional: [
					[data.kalpas, '1']
				],
				main: [
					[data.aponia, '2']
				],
				secondary: [
					[data.vv, '2'],
					[data.griseo, '1'],
					[data.hua, '2']
				]
			},
			emblem: [
				[data.madKingsMask, data.theLonelyMoon],
				[data.veilOfTears, data.theLonelyMoon],
				[data.proofOfGoodAndEvil, data.fallingInPastLight]
			],
			support: [
				[ [data.ae], [data.le] ],
				[ [data.ae], [data.br, data.ma] ]
			],
			gear: [
				[data.eogl, data.leet, data.tham, data.leeb],
				[data.saas, data.ragt, data.tham, data.ireb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Battle Song'
					],
					[data.first]: [
						'Gloria'
					],
					[data.no]: [
						'Impetus',
						'Sol',
						'Triumph'
					]
				},
				transitional: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.nexus1.name
					]
				},
				main: {
					[data.aponia.name]: [
						data.aponia.regular.spRestore,
						data.aponia.regular.dmgPhysEle,
						data.aponia.regular.vuln,
						data.aponia.nexus2.name,
						data.aponia.nexus2.dmgPhysEle,
						data.aponia.nexus2.breachPhysEle,
						data.aponia.nexus2.vuln
					]
				},
				secondary: {
					[data.vv.name]: [
						data.vv.regular.dmgWeap,
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.nexus2.name,
						data.vv.nexus2.breachPhysEle,
						data.vv.nexus2.vuln
					],
					[data.griseo.name]: [
						data.griseo.regular.black,
						data.griseo.regular.grey,
						data.griseo.regular.red,
						data.griseo.regular.yellow
					],
					[data.hua.name]: [
						data.hua.regular.breachEle,
						data.hua.nexus2.name
					]
				}
			},
			notes: `<p>${data.aponia.nexus2.dmgPhysEle}, ${data.aponia.nexus2.breachPhysEle}</p>Priority.
					<p>${data.vv.nexus2.breachPhysEle}</p>If lacking breach.`
		}
	]
};
// Valkyrie Boltstorm
const helia: Guide = {
	name: 'Valkyrie Boltstorm',
	acr: 'helia',
	version: '7.8',
	builds: [
		{
			buff: [
				data.buffs[0][13],
				data.buffs[1][7],
				data.buffs[2][18],
				data.buffs[3][20]
			],
			signet: {
				main: [
					[data.eden, '1']
				],
				secondary: [
					[data.hua, '2'],
					[data.vv, '1'],
					[data.su, '2']
				],
				optional: [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.goldGoblet, data.dreamfulGold],
				[data.memory, data.dreamfulGold],
				[data.keyToTheDeep, data.dreamfulGold]
			],
			support: [
				[ [data.vc], [data.ae] ],
				[ [data.dosa, data.rc], [data.br] ]
			],
			gear: [
				[data.elar, data.vont, data.hanm, data.vonb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Vivace'
					],
					[data.first]: [
						'Resolution'
					],
					[data.no]: [
						'Improvisation',
						'Meditation',
						'Sparkling Lightning'
					]
				},
				main: {
					[data.eden.name]: [
						data.eden.regular.dmgTotal,
						data.eden.regular.dmgPhysEle,
						data.eden.regular.spCapInitial,
						data.eden.nexus1.name
					]
				},
				secondary: {
					[data.hua.name]: [
						data.hua.regular.dmgTotal,
						data.hua.regular.dmgEle,
						data.hua.regular.breachEle,
						data.hua.nexus2.name,
						data.hua.nexus2.stackCap
					],
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.regular.dmgRanged,
						data.vv.nexus1.name
					],
					[data.su.name]: [
						data.su.regular.dmgTotal,
						data.su.regular.vuln,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.nexus2.name
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Recommended to swap sigil on 5F. Rotation : Activate Stellar Outburst whenever possible, after bar is full, tap weapon active to start shooting. Once the bar is depleted, tap weapon active then basic ATK to recharge the bar.
					Can pick pick Griseo's signets <span>${data.griseo.regular.red}</span>, and <span>${data.griseo.regular.black}</span> as reinforcement.`
		}
	]
};
// Thousand-Faced Maestro: Cameo!
const sparkle: Guide = {
	name: 'Thousand-Faced Maestro: Cameo!',
	acr: 'sparkle',
	version: '7.9',
	builds: [
		{
			name: 'No ring',
			buff: [
				data.buffs[3][6],
				data.buffs[3][22]
			],
			signet: {
				main: [
					[data.eden, '1']
				],
				secondary: [
					[data.vv, '2'],
					[data.su, '1'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.kalpas, '2']
				]
			},
			emblem: [
				[data.goldGoblet, data.becauseOfYou],
				[data.psuedoMiracle, data.fallingInPastLight],
				[data.heavyAsAMillionLives, data.fallingInPastLight]
			],
			support: [
				[ [data.vke], [data.ma] ],
				[ [data.dafl], [data.br] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Radiant Flames'
					],
					[data.second]: [
						'Thousand-Faced',
						'Opulence'
					],
					[data.no]: [
						'Deceit',
						'Dream Scales'
					]
				},
				main: {
					[data.eden.name]: [
						data.eden.regular.dmgTotal,
						data.eden.regular.dmgPhysEle,
						data.eden.regular.spCapInitial,
						data.eden.nexus1.name
					]
				},
				secondary: {
					[data.vv.name]: [
						data.vv.regular.dmgWeap,
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.nexus2.name,
						data.vv.nexus2.breachPhysEle,
						data.vv.nexus2.vuln,
						data.vv.nexus2.gravField
					],
					[data.su.name]: [
						data.su.regular.dmgTotal,
						data.su.regular.vuln,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.nexus1.name,
						data.su.nexus1.vuln,
						data.su.nexus1.dmgShield
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.hp,
						data.kalpas.nexus2.name
					]
				}
			},
			notes: `Recommended to start with Because of You, take Thousand-Faced and Opulence on 7F. Rotation: Keep tapping weapon active, after obtaining Thousand-Faced, use ultimate whenever available.
					Can pick pick Griseo's signet <span>${data.griseo.regular.red}</span> as reinforcement.`
		},
		{
			name: 'Ring',
			buff: [
				data.buffs[3][6],
				data.buffs[3][22]
			],
			signet: {
				main: [
					[data.eden, '1']
				],
				secondary: [
					[data.griseo, '1'],
					[data.su, '1'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.kalpas, '2']
				]
			},
			emblem: [
				[data.goldGoblet, data.becauseOfYou],
				[data.rainbowOfAbsence, data.dreamfulGold],
				[data.heavyAsAMillionLives, data.dreamfulGold]
			],
			support: [
				[ [data.vke], [data.ma] ],
				[ [data.dafl], [data.br] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Deceit'
					],
					[data.first]: [
						'Dream Scales'
					],
					[data.second]: [
						'Thousand-Faced'
					],
					[data.optional]: [
						'Opulence'
					],
					[data.no]: [
						'Radiant Flames'
					]
				},
				main: {
					[data.eden.name]: [
						data.eden.regular.dmgTotal,
						data.eden.regular.dmgPhysEle,
						data.eden.regular.spCapInitial,
						data.eden.nexus1.name,
						data.eden.nexus1.vuln,
						data.eden.nexus1.lightning
					]
				},
				secondary: {
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.black,
						data.griseo.nexus1.name
					],
					[data.su.name]: [
						data.su.regular.dmgTotal,
						data.su.regular.vuln,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.nexus1.name,
						data.su.nexus1.vuln,
						data.su.nexus1.dmgShield
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.hp,
						data.kalpas.regular.vuln,
						data.kalpas.nexus2.name
					]
				}
			},
			notes: `Recommended to start with Because of You, take Dream Scales and Thousand-Faced on 7F. Rotation: 1) Tap weapon active then activate Stellar Outburst. 2) Tap basic until bar depleted, then use ultimate to exit Stellar Outburst. 3) Use red combo ATK, repeat from beginning. Can also use red combo ATK to gather enemies if needed, once Thousand-Faced is obtained, can use ultimate at the beginning.
					Can pick pick Kevin's signets <span>${data.kevin.regular.dmgTotal}</span>, <span>${data.kevin.regular.dmgEle}</span>, and <span>${data.kevin.regular.spRestore}</span> or Kosma's signets <span>${data.kosma.regular.atk}</span>, <span>${data.kosma.regular.ult}</span>, and <span>${data.kosma.regular.extend}</span> as reinforcement.`
		}
	]
};
// Helical Contraption
const villv: Guide = {
	name: 'Helical Contraption',
	acr: 'villv',
	version: '6.8',
	builds: [
		{
			buff: [
				data.buffs[1][4],
				data.buffs[1][7],
				data.buffs[3][10]
			],
			signet: {
				main: [
					[data.vv, '2'],
					[data.mobius, '1']
				],
				secondary: [
					[data.griseo, '1'],
					[data.su, '2']
				],
				optional: [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.psuedoMiracle, data.fallingInPastLight],
				[data.forbiddenSeed, data.fallingInPastLight],
				[data.tinFlask, data.fallingInPastLight]
			],
			support: [
				[ [data.ae], [data.vc, data.vke] ],
				[ [data.ma], [data.ae, data.rc] ]
			],
			gear: [
				[data.topa, data.cart, data.carm, data.carb],
				[data.hawp, data.leet, data.tham, data.leeb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Facade',
						'Sleight'
					],
					[data.optional]: [
						'Reversal'
					],
					[data.no]: [
						'Assemblage',
						'Transmission'
					]
				},
				main: {
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.regular.dmgRanged,
						data.vv.nexus2.name,
						data.vv.nexus2.breachPhysEle,
						data.vv.nexus2.vuln,
						data.vv.nexus2.gravField
					],
					[data.mobius.name]: [
						data.mobius.regular.vuln,
						data.mobius.regular.dmgEntity,
						data.mobius.regular.dmgTotal,
						data.mobius.nexus1.name,
						data.mobius.nexus1.dmgTotal,
						data.mobius.nexus1.breachPhysEle
					]
				},
				secondary: {
					[data.griseo.name]: [
						data.griseo.regular.black,
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.nexus1.name
					],
					[data.su.name]: [
						data.su.regular.vuln,
						data.su.regular.combo25,
						data.su.regular.dmgTotal,
						data.su.nexus2.name
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Can buy Sakura's signet <span>${data.sakura.regular.dmgTotal}</span>, or Eden's signets <span>${data.eden.regular.dmgPhysEle}</span>, and <span>${data.eden.regular.dmgTotal}</span> as reinforcement.`
		}
	]
};
// Valkyrie Quicksand
const vq: Guide = {
	name: 'Valkyrie Quicksand',
	acr: 'vq',
	version: '7.6',
	builds: [
		{
			buff: [
				data.buffs[0][11],
				data.buffs[1][13],
				data.buffs[2][19],
				data.buffs[3][20]
			],
			signet: {
				main: [
					[data.vv, '1']
				],
				secondary: [
					[data.kosma, '1'],
					[data.eden, '1'],
					[data.griseo, '1']
				],
				optional: [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.psuedoMiracle, data.fallingInPastLight],
				[data.fragileFriend, data.outOfReach],
				[data.farawayShip, data.outOfReach]
			],
			support: [
				[ [data.sa], [data.bke] ],
				[ [data.ss], [data.sa, data.br] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Dappled Shade'
					],
					[data.second]: [
						'Luster'
					],
					[data.optional]: [
						'Rarities'
					],
					[data.no]: [
						'Tambourine',
						'Whimsy'
					]
				},
				main: {
					[data.vv.name]: [
						data.vv.regular.dmgWeap,
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.regular.spRestore,
						data.vv.nexus1.name,
						data.vv.nexus1.blades,
						data.vv.nexus1.breachPhys,
						data.vv.nexus1.dmgShield
					]
				},
				secondary: {
					[data.kosma.name]: [
						data.kosma.regular.atk,
						data.kosma.regular.ult,
						data.kosma.regular.evasion,
						data.kosma.regular.dmgShield,
						data.kosma.nexus1.name,
						data.kosma.nexus1.breachPhysEle,
						data.kosma.nexus1.dmgPhysEle
					],
					[data.eden.name]: [
						data.eden.regular.dmgTotal,
						data.eden.regular.dmgPhysEle,
						data.eden.regular.spCapInitial,
						data.eden.nexus1.name
					],
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.black
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.curr,
						data.pardofelis.regular.currKill,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Recommended to swap sigils on 5F; if having difficulty then reset for Luster on 2F.
					Can pick Kalpas's signet <span>${data.kalpas.regular.vuln}</span> as reinforcement.
					<p>${data.pardofelis.regular.curr}, ${data.pardofelis.regular.currKill}</p>Buy from early shop.`
		}
	]
};
// Vermilion Knight: Eclipse
const vkek: Guide = {
	name: 'Vermilion Knight: Eclipse',
	acr: 'vke',
	version: '7.4',
	builds: [
		{
			buff: [
				data.buffs[0][4],
				data.buffs[1][12],
				data.buffs[2][17],
				data.buffs[3][18]
			],
			signet: {
				main: [
					[data.kalpas, '1']
				],
				secondary: [
					[data.aponia, '1'],
					[data.su, '1'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.griseo, '1']
				]
			},
			emblem: [
				[data.madKingsMask, data.anOldPalsLegacy],
				[data.veilOfTears, data.anOldPalsLegacy],
				[data.tinFlask, data.anOldPalsLegacy]
			],
			support: [
				[ [data.ae], [data.le] ],
				[ [data.br], [data.ae, data.rc] ]
			],
			gear: [
				[data.shur, data.litt, data.litm, data.litb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Sharp Flames'
					],
					[data.first]: [
						'Blaze'
					],
					[data.second]: [
						'Wild Flare'
					],
					[data.no]: [
						'Burning Flow',
						'Fiery Mind'
					]
				},
				main: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.vuln,
						data.kalpas.regular.hp,
						data.kalpas.nexus1.name,
						data.kalpas.nexus1.fire,
						data.kalpas.nexus1.dmgBonus
					]
				},
				secondary: {
					[data.aponia.name]: [
						data.aponia.regular.basicAtk,
						data.aponia.regular.spRestore,
						data.aponia.regular.vuln,
						data.aponia.nexus1.name,
						data.aponia.nexus1.breachPhysEle
					],
					[data.su.name]: [
						data.su.regular.dmgTotal,
						data.su.regular.vuln,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.nexus1.name,
						data.su.nexus1.vuln,
						data.su.nexus1.breachPhysEle
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.griseo.name]: [
						data.griseo.regular.yellow,
						data.griseo.regular.grey
					]
				}
			},
			notes: `Recommended to reset for Blaze on 2F; 3 charge attacks for every 1 ultimate; recommended to swap sigil on 5F.
					Can pick Eden's signets <span>${data.eden.regular.dmgPhysEle}</span>, <span>${data.eden.regular.dmgTotal}</span>, and <span>${data.eden.regular.spCapInitial}</span> as reinforcement.`
		}
	]
};



export const valks: any[] = [
	aka,	bke,	ce,		cn,		da,		sena,	aponia,	dw,		fr,		fv,
	mc,		eden,	gm,		villv,	hofi, 	hofs,	hoh,	hoo,	hor,	horb,
	hos,	hov,	hot,	hotr,	mobius,	sus,	songque, lantern,	lp,	lk,
	lv,		thelema, raven,	sirin,	elysia,	pe,		fischl,	pardo, rs,	ri,		si,
	sk,		sw,		ss,		spa,	griseo,	nyx,	sn,		vb,		kira,	carole,
	ta,		sparkle, ve, coralie, 	helia,	vg,		vq,		vkek
];
export const valksLength: number = valks.length;