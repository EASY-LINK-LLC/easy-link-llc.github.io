import { Grid } from "@geist-ui/core"
import { Facebook, Github, Gitlab, Linkedin, Spacer, Twitter } from "@geist-ui/react-icons"

export default function SocicalMedia() {
  return (
    <>
      {/* Section: Social media */};
      <Grid.Container justify="center">
        <Grid xs={4} justify="center" alignContent="center" className="socialIcons">
          <a href="https://github.com/EASY-LINK-LLC" rel="noopener noreferrer">
            <Github size={20} />
          </a>
          <Spacer inline w={0.35} />
          <a href="https://about.gitlab.com" rel="noopener noreferrer">
            <Gitlab size={20} />
          </a>
          <Spacer inline w={0.35} />
          <a href="https://www.facebook.com" rel="noopener noreferrer">
            <Facebook size={20} />
          </a>
          <Spacer inline w={0.35} />
          <a href="https://twitter.com" rel="noopener noreferrer">
            <Twitter size={20} />
          </a>
          <Spacer inline w={0.35} />
          <a href="https://www.linkedin.com" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
        </Grid>
      </Grid.Container>
      {/* Section: Social media */}
    </>
  )
}
