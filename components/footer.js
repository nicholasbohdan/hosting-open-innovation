import Head from 'next/head'

export default function Footer() {
  return (
    <div>
        <div style={{ padding: 20, marginTop: 20, backgroundColor: '#fbfbfb' }}>
            <div style={{ margin: '0 auto', width: '100%', maxWidth: '1000px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '80% 20%' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '25% 25% 25% 25%' }}>
                        <div>
                            Home
                            <div>
                                Trending Ideas
                            </div>
                            <div>
                                Top 10 Idea Giver
                            </div>
                            <div>
                                Learn More
                            </div>
                            <div>
                                Inbox
                            </div>
                            <div>
                                Notification
                            </div>
                        </div>
                        <div>
                            Idea Catalog
                            <div>
                                All Topics
                            </div>
                            <div>
                                Submit Idea
                            </div>
                            <div>
                                Download Guide
                            </div>
                        </div>
                        <div>
                            Konvensi Inovasi
                            <div>
                                Participant List
                            </div>
                            <div>
                                Join Competition
                            </div>
                        </div>
                        <div>
                            Profile
                            <div>
                                My Ideas
                            </div>
                            <div>
                                My Konvensi Inovasi
                            </div>
                            <div>
                                Achievement
                            </div>
                            <div>
                                Stats
                            </div>
                        </div>
                    </div>
                    <div>
                        Kalbe
                    </div>
                </div>
            </div>
        </div>
        <div style={{ backgroundColor: '#306964' }}>
            <div style={{ padding: 20, margin: '0 auto', width: '100%', maxWidth: '1000px', color: 'white' }}>
                2021 Hak Cipta Terpelihara PT Kalbe Farma Tbk
            </div>
        </div>
    </div>
  )
}

