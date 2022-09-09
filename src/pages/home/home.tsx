import styles from './home.module.css'
import Image from 'next/image'
import { Grid, Stack } from '@mui/material'
import Section from './components/Section/Section'
import ProjectCard, { IProjectCardProps } from './components/ProjectCard/ProjectCard'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {

  const [loading, setLoading] = useState(true);
  
  const projects: IProjectCardProps[] = [
    {
      title: "SPOONS",
      description: "Online multiplayer based on the popular card game Spoons",
      imgSrc: "/assets/home/Spoons.svg",
      href: "https://drkdql.com/spoons"
    }
  ]

  const blogPosts = [

  ]

  const [instagramPosts, setInstagramPosts] = useState<number[]>([])

  useEffect(() => {
    const posts:any[] = []
    setInstagramPosts(posts)
    setLoading(false)
  }, [])

 
  return (
    <>
      {/* HEADER */}
      <header className={styles.header}>
          <Stack alignItems={"center"} padding="10px">
            <Image src="/assets/home/Logo.svg" height={70} width={1000} alt="DRKDQL personal brand logo"/>
          </Stack>
      </header>
      {/* MAIN CONTENT */}
      <main className={styles.main}>
        { loading && <Stack> Loading ... </Stack>}
        { !loading && 
          <Stack> 
            {/* SECTION - PROJECTS */}
            <Section title="projects"> 
              <Grid container> 
                {projects.map((p, i) => {
                  return (
                    <Grid item xs key={`project-${p.title}`}> 
                      <ProjectCard title={p.title} description={p.description} imgSrc={p.imgSrc} href={p.href}/>
                    </Grid>
                  )
                })}
              </Grid>
            </Section>

            {/* SECTION - BLOG POSTS */}
            <Section title="Blog Posts"> 
              
              Coming soon...
            </Section>
            
            {/* SECTION - SOCIAL FEEDS */}
            <Section title="Social Feeds"> 
                <Stack>
                   {/* INSTAGRAM */}
                  <h3> Instagram </h3>
                  Coming soon...
                </Stack>
                <br/>
                <Stack>
                  {/* TIKTOK */}
                  <h3> TikTok </h3>
                  Coming soon...
                </Stack>
            </Section>
          </Stack>
        }
        
      </main>
      {/* FOOTER */}
      <footer>
      </footer>
    </>
  )
}

export default Home
