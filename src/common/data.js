import {BarSvg, BTCSvg, ChartSvg, LightSvg, MenuSvg, NewsSvg, OrganizationSvg, SentimentSvg, TimeSvg} from "../svg";

export const slider = [
    {
        id: 1,
        title: 'Real-Time Crypto Signals',
        description: 'Get hourly updates on cryptocurrencies worth watching. Each signal comes with detailed reasons why it\'s important right now.',
        icon: <ChartSvg className="slider_logo"/>
    },
    {
        id: 2,
        title: 'Smart Analysis',
        description: 'Our algorithm identifies key market movements, institutional activity, and technical breakouts to bring you the most relevant opportunities.',
        icon: <LightSvg className="slider_logo"/>
    },
    {
        id: 3,
        title: 'No Registration Required',
        description: 'Start using MagnetXt immediately. No sign-ups, no personal data required. Just pure crypto analysis delivered every hour.',
        icon: <TimeSvg className="slider_logo"/>
    }
]

export const see = [
    {
        id: 1,
        title: 'Crypto name & current price',
        description: 'Real-time market data',
        icon: <BTCSvg className="see_logo"/>
    },
    {
        id: 2,
        title: 'Multiple analysis reasons',
        description: 'Why this crypto is important now',
        icon: <MenuSvg className="see_logo"/>
    },
    {
        id: 3,
        title: 'Signal strength indicator',
        description: 'Confidence level of each signal',
        icon: <BarSvg className="see_logo"/>
    }
]

export const work = [
    {
        id:1,
        description: 'Our system analyzes thousands of cryptocurrencies every hour'
    },
    {
        id:2,
        description: 'We identify the most important ones based on multiple factors'
    },
    {
        id:3,
        description: 'You get clear reasons why each crypto is worth watching'
    }
]

export const home_footer = [
    {
        id: 1,
        number: '24/7',
        text: 'Monitoring'
    },
    {
        id: 2,
        number: '1000+',
        text: 'Cryptos Tracked'
    },
    {
        id: 3,
        number: 'Hourly',
        text: 'Updates'
    }
]

export const crypto_data = [
    {
        id: 1,
        iconURL: "",
        iconALT: "BTC",
        name: "Bitcoin",
        tag: "BTC",
        percentage: "+2.4% (24h)",
        source: ["Large institutional buying detected in the last 4 hours","Breaking above key resistance at $67,000","Volume spike of 340% compared to daily average"],
        fee: "$67,432",
        strength: 3,
    },
    {
        id: 2,
        iconURL: "",
        iconALT: "ETH",
        name: "Ethereum",
        tag: "ETH",
        percentage: "+5.7% (24h)",
        source: ["Major DeFi protocol upgrade announcement", "Staking rewards increased by 15%"],
        fee: "$3,847",
        strength: 4,
    },
    {
        id: 3,
        iconURL: "",
        iconALT: "SOL",
        name: "Solana",
        tag: "SOL",
        percentage: "+8.2% (24h)",
        source: ["New partnership with major gaming platform","Network activity up 45% this week","Technical breakout confirmed above $230"],
        fee: "$234.56",
        strength: 5,
    }
]

export const details_card = [
    {
        id: 1,
        icon: <NewsSvg className="details_card_logo"/>,
        category: "News",
        signal: 2,
        description: [
            {
                title: "Major institutional adoption announcement from BlackRock",
                sub_title: "2 hours ago"
            },
            {
                title: "SEC approves new Bitcoin ETF applications",
                sub_title: "4 hours ago"
            }
        ]
    },
    {
        id: 2,
        icon: <ChartSvg className="details_card_logo"/>,
        category: "Technical",
        signal: 3,
        description: [
            {
                title: "Breaking above key resistance at $67,000 with strong volume",
            },
            {
                title: "RSI showing bullish divergence on 4-hour chart",
            },
            {
                title: "Golden cross formation detected on daily timeframe",
            }
        ]
    },
    {
        id: 3,
        icon: <OrganizationSvg className="details_card_logo"/>,
        category: "Fundamental",
        signal: 1,
        description: [
            {
                title:"Mining difficulty adjustment shows network strength increasing"
            }
        ]
    },
    {
        id: 4,
        icon: <SentimentSvg className="details_card_logo"/>,
        category: "Sentiment",
        signal: 2,
        description: [
            {
                title: "Social media sentiment reached 85% bullish in last 24h",
            },
            {
                title: "Whale accumulation detected with 2,400 BTC bought"
            }
        ]
    }
]