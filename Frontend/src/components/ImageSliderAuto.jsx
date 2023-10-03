import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom, Slide } from 'react-slideshow-image'


const SliderData = [
    {
      url:
        'https://i0.wp.com/www.escuelaayurveda.com/wp-content/uploads/2021/07/tonificacion-ayurveda.jpg?fit=840%2C635&ssl=1'
    },
    {
      url:
        'https://i0.wp.com/www.escuelaayurveda.com/wp-content/uploads/2021/07/especias-ayurveda.jpg?fit=1500%2C1000&ssl=1'
    },
    {
      url:
      'https://img.freepik.com/free-photo/attractive-african-woman-enjoying-face-massage-spa-salon_176420-13955.jpg?w=1380&t=st=1696315056~exp=1696315656~hmac=1ef682041b55f5ba147f9a2d60bc86b270b1e8c753e1c865101fce491ce98185'
      
      // 'https://5.imimg.com/data5/YV/AB/GLADMIN-55768055/panchakarma-250x250.png'
        //  'https://chopra.brightspotcdn.com/dims4/default/bdcaf68/2147483647/strip/true/crop/643x254+0+23/resize/1420x562!/quality/90/?url=http%3A%2F%2Fchopra-brightspot.s3.amazonaws.com%2F12%2Fd8%2F312411aaccee9fed90884c0e3fa6%2Fthe-6-tastes-of-ayurveda.jpg'
    },
    {
      url:
        'https://www.mahatayurveda.com/wp-content/uploads/2020/09/Especias-segun-doshas-1.jpg'
    },
    {
      url:'https://welthy.es/wp-content/uploads/2023/04/MEDICINA-AYURVEDA-768x512.jpg.webp'
    },
    {
      url:'https://img.freepik.com/free-photo/buddhist-meditates-by-lotus-pond-tranquil-harmony-generative-ai_188544-12696.jpg?w=826&t=st=1696316059~exp=1696316659~hmac=954a3df36fee22c5cfb7d15381be6a5162b42816a57759b0b7186adc5edaa096'
      // 'https://www.landhotel-talblick.de/fileadmin/user_upload/04_Wellness/02_unterseiten/03_ayurveda/02_einleitung/landhotel-talblick-schwarzwald-urlaub-hotel-wellness-ayurveda-beauty-oel-behandlung.jpg'
    },
    {
      url:'https://birlaayurveda.co.in/wp-content/uploads/2021/09/About-Birla-Ayurveda.jpg'
    },
    {
      url:'https://edit.meinmed.at/assets/418162fd-4645-4fea-9189-8826362c8e63.jpg?key=content-image-1600x900'
    }
    // {
    //   url:
    //     'https://img.freepik.com/premium-photo/natural-spa-background-illustration-ai-generative_118124-25432.jpg'
    // },
    // {
    //   url:
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfeodtvH2SFIrqn8Lyl2p54RB0HFcoKdssLE7goP6hmXWQHDudgRCCGtiAXj6qGk6I0b8&usqp=CAU'
    // },
    // {
    //   url:
    //     'https://previews.123rf.com/images/ninetechno/ninetechno2103/ninetechno210300345/165059748-neem-leaf-used-as-ayurvedic-medicine-with-neem-oil-and-stick-on-wooden-background.jpg'
    // },
    // {
    //   url:
    //     'https://e1.pxfuel.com/desktop-wallpaper/896/979/desktop-wallpaper-poushtika-lepa-ayurveda.jpg'
    // },
    // {
    //   url:'https://ayurcentralonline.com/wp-content/uploads/2022/12/Ayurveda_Section-image.jpg'
    // },
    // {
    //   url:'https://wallpaperaccess.com/full/1251782.jpg'
    // },
    // {
    //   url:'https://e0.pxfuel.com/wallpapers/678/102/desktop-wallpaper-spa-background-high-quality-ayurveda.jpg'
    // },
    // {
    //   url:'https://qph.cf2.quoracdn.net/main-qimg-94405e8dcc34bbb98b78f8291752746a-pjlq'
    // }
    // {
    //   image:
    //   'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUFRgWFhcYGRgaHBocGRocHBkfGRwfGRwdHB4ZHBwkIS4lHCErIR4aJjgmKy8xNTU1HCU9QDszPy40NTEBDAwMEA8QHxISHjosJSw0NzY9NT40NDY2Pzc9ND02Nj00NDY2Nj02NDY0NjQ0NDo0PTQ0NDQ0NDQ2NDQ0NDQ0NP/AABEIAKoBKAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcCAf/EAEAQAAICAAUCBAQDBgQEBgMAAAECABEDBBIhMQVBBiJRYRNxgZEyQqFSscHR4fAHI2KSFHLS8UNUY4KiwxUkM//EABkBAQADAQEAAAAAAAAAAAAAAAACAwQBBf/EACoRAAICAQQBAwMEAwAAAAAAAAABAhEDBBIhMUETIlFhcZEUgaHBIzJC/9oADAMBAAIRAxEAPwDr8REAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAETFi46rWo1qIUXxZ4F9r4HuQOTMpYRYERK14r6w+ChGGyBu4LFXH+pQdnHt++RlJRVs7GLk6RZLnl3oE+18gX9ZxjF8V4+K4GI5I06fKQCVJs2BsTsOa4EsmZ6iXy7ujKE1HQFJLYL1WlgfyYgLqBwGK1yAtTzosyYnCN3ZYcl1HGGafDcaVcBkXEKgrp0qQpUkOCTwD63RsSyzm2Xz5xGRnxlVkLuUZgiIGZiWduSzMxGlR+EL+G5fem5oYiBl1lezsunV/qVaB0+lgX78zuKW6ylG5ETwuICxUcrV/Xj90uOnuImDGzIUheXbhRzQ5Y+ijuT7DckA8sGeIkJ1jqDI+kCxQ4NEE/2JHJkUI7mShFydIm4lSw/EJU8kj0bf8ArJrI9YTE2uj+n37fWVQ1MJurplksEoq+yTiImgpEREAREQBERAEREAREQBERAEREAREQBERAE+M1bnYT7K74g6bmMydCsqYQqwTu59TQNAen9ivJJxjaVsEd1nxEp14aOmMhVgwKkV8nBph7hfTeVxPE2MHUsQVw2DKGYs4tHSmYVqBDKCdidN1Za5XOeEvhIWfGKrsGKkir4s1Z+n7tpUCiJiUtldwC27UP2q71v/PmedknlX+3DfgUX7J+NgSNaDT3ZCTXvX9ZseIM/l8fCP8AnMVXfQmgOx45cWK52ra+ZznKYp16AUBGo2TtSizsNzsNq5lhzPhnMsqBW0M4YqH0jUyjUFAW9DEAkWfynipHHl1DTi1aJR4ZVczlF1a0YMG3UFPODdaWUCq9xd3z2k9ls0pRcPDw11BQuIpRFcld2ZMRQCVsA6TZ22O01cDqOC2Y1JhMgTDUhApLatJt9Qoi7HY3fymLO9TGI6OWA0CgKBP4gxSz6bkEVR+cscfb3zf8FmSVm1k8TDwsZ2ZA2hyoDqzpYrzN/q/rQ5nS+idaw8wvkIDDlb49x6iccws22ttW5DNfFli1k/OzXebzZ3Fy7JijCxEfUNLspQHuQfKAwIvaVwyZMc+OV8FB2qVvH6jpzoRdR83nCgnyLg2pYDsXf/4e0iG8bDFw1Bw3Ul1sghgVUhjQ/F5q01R/F9DoYL5jOO76GRCR8UqyK4I8ujS5Uc7eYHji5tlm3UonSczPiXFLsqKiKu1OwZ2N1aohJYij5Rd789svS+qOmovl3cua+IpUsxF2rh2VkYdk0it6EyZDKYeVohFA1IhLKFxwXYKupgdOICTyKqjyQRNpc/gnEL61Q97P40FUzDhd/wAJO9exqSjf/T5BJpmho1sGQAEkMKYAeonPeseKsFCzNepvykXXv/WWfr3UkZThhtqBbb6haI+vHpKHmenYeOw1ICb53Br6V+soz5Yt7X4NmDE63fIyPURmGAQk320nt3PYCXvpPQitMxodh3/pM3h3oWHgIpCBTzXpJ6TxaeL9zRzLna9sQooVERNhkEREAREQBERAEREAREQBERAEREAREQBERAERIjxF1lcthlti7bIp7nuSB2HJ+3eQlOMIuUugbnUOnYeOpRwSD6Eg/cSo9X8F4CIxwlxi54IbUqnnUVPN8EiyO3pKv1HxHmMW9WK4HotIv2FX9bkO/UMSmQs7Ka1WWVSCeCRs3vQmCWojkul+/kklZlzOM2G6hERPhjUQxvWVB8xOxIrbRxtXsGZ8QZjMKfi4rsAwKCgBandgFAHt9/WRuYW1AVQD5igCqL3tvMBbXxuTW3aMJSihQV7b9uN73+X3kGmonXF1bN3Ja8RXBxkTSiaFLhNZU0EvQA50g8kbkb8zwUw8RsQOXAXRepfP+zS0d+AO3A2EmMlksxgYxwWZFL5fUyspZWUnUEc1SEkaS/C3chuqZpMUs/nTchFIAbSNyHqgCpJF96HFVJ80Gi8dCGSy+XV8NVfMaNTMT+BmWqDnZDflVV3JB5osPPX+ufGQOSyrh1iBCh1qVpRisx0r+NwNKkllaxR55107GdSGDlCG2cHcH1HB29Zu9W67j5gqjuWpdAJ7jWGOpvzAsF5utA7ye/wconuhdZAVmIdidOuwtIDY1KzfiYenJ2NHcyxdL65hYPx2B1q4RilaBr86vdkgLoGGSeNx3NSlZXp2pQUWiwAN6i/JoINq7A7cfOTuWw7T4a/FXHD/AOUEIANbMWPINl2sbeXtI+s01FUcZu9UzeI+Fh4WIlYbuGS75sjSnLaBdCwTuOAQBsno65P/ADcRCWP4EGKCV2olqRATudwa7b8nXxMxiLiHHONhI2GG+HhNiHMONQrgsdJ2FsG2327SMXO42ZYnEYtv6AD5CgBUTmopt8stxYt0ueiTRziEkg7kk6rsnbv3lk6D0oUGYbDj3P8AKanRchrPG21+wluw0AAA2A4jT4d73y6NGfLtWxdnqIieiYRERAEREAREQBERAEREAREQBERAEREAREQBERAE5l4xwsfExi5W1ACgAny17e5szps08505MTcimqrH8fWZNXinkj7X+3ySVeTieNhlTvQIO432/r/fz+4GgGybN99yT7it50DrPhNW3q/9S7H6zP04ZLKAD4JDj8TEB2/3Gq+QAnlxpPble37nfTfa5KF1/L4jsuPiKyHhi6KpYgUoC2DwPxVXvchMpnQMQnSG0MCQ1MHoGlIOxRjsQd6P0nRPFONlMwo+GuLiYrNWjDLjEOw/KVZSooWbFeu9Sh9Q1YD/AA8TA+CyqLPlDsQrUTQ4Oo7bz0UlXDtJcMnFvpmynW2XFDriYqlMLSjNpZ0NHy7jzpZ776dr2BkZ1PNpiElQqhdhWwrVewu73IodvqZ6wc+rqAuHdAi7AHlHG454955w8uWt8S0RQFBdm2AApRdGqO3tIpSb5Rw8ZHDTGYozMulPJQJvfcae3JO1b+slUyuGijQ+pR2Kre5/Nzpo1vyav5esj0xKDm97Ki+x4Jrmx29J4fKa2CYekOTQJNLZ7SmWaMnsX5OcGQDGYoiAOzAgBSLQKaLFQLUcCzQJG17yVx+moMMkZlWYbuhRxZOx0krbe+4kr0vCORy4xcZCqlhzpXEYg7DSfMTseeAPSRYzwzBdyqq+otpHGkngfKcnGknQceLRojp6P5lJB9NyP5iT2Qy4RbPH7zMOUIr0o7ye8MZf4+KWP4MKq9GY7j7c/aV48bnJJGzG1DHuvgtPScr8NACKYgFvY+n0m9ET2YxUYqKMMpOTbYiIkiIiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCeMRCeGI+VfxnufCZySTVMELn8xi4Q3ZXB9PK32/lKP17q1mkBX9ri79NgKlo62NWIXQhgQBYNi17bGc8cszu/ZbO/F71c8HU4f8AJ22vCfJqaailHtmHNhwhaiT6fsg9z/KQePmAyhKXYk2EGokjfU34mHGxNCtqk7k83isQpYgd6AHP0m07Ifxlj87P8JZjbgqosjprXDIFetphLpw8MLqA16h+YCgy70e9kizPCv8A8VmMIEGjsbP7OpmPzIFXJtsDAP5E+qgzDllRHDIqijYpSOQQePYmXyz3F/NHJaaS8m/1DFvyigBz6V6e01+m9VXL4yOq/EZDYF0osGjfermbEwlb8Q1d6o19d94TKYZ7afkpH8Zjx1Hk4tJPvgwde6hj5vF14h8o2RR+FR7D19T3+095DD0kN3m5h5JONZH2/lN7LZVF2LFvehf6CTlkcu2aceFpU0R2dxAmwNa/vQ9PXn9JfvDuZXCwUQKbq2Pued/0+kg0wUFbfpNv4yKANRHtO4c3puzr0/tUfBaf/wAivee06ghNXV+sraC6+XrPpFH9JrjrJN1RS9JH5LbE+LPs9E88REQBERAEREAREQBERAEREAREQBERAERPJcXXJ9pGUlFW2D1PhkR4l6t/w+XdwWUiqITXp33JWwKruTW4lI8R9Qxxhph5c6WdTmcXErDw6VCpDgps4ZmA2LWdtw0g80b45ON06ovXV+v4OXw/iO43OlVBGpm/ZrsfW+Jz/qnXcxmiCA7YVAthoupRYNhmH4mB3GrbaxwdMb4X8MDMN8fFOtSQyhgac8lmDDzC6/5qN+hvXTemZfLqwwkCM9amXbg7XXbc/eYc2pt0/wAFuNyi+Uv7IDwljMcN8JhTKwYb7FX21L+yLU2nKmwe0j+r5ZUFKPNqJN8te5krl8TEw31Zh0csdAZQBSmt28o3JAPHb5VqeI0JYheB377c/KFKM6aNkJJ2VLGxwtgE2eR6b39DtNbEzXuajOZY3Y3uYHZWA2o1v7y2UI0IzldGdM1dbkSSyuZA24kA6FdxuP7+8yYGao77f3+kzTxX0XRn8ltyp1Gyb9hNjG8tDf6yByecHF7f39pI/Hsc7dplkmmXpo38BNVbbXJHLqCTUhcg9V2Mk8seW9TKm2TRIuxUDeZlQNZI9AJqO2sgDt3mzrqgPr8h/Yi2do3QwUT3kvO6+5/qf0mgz6iOZM+HcHUzPWy+Vfc9z9Bt9Zt0sHKSM2okoQfyWGIieyeOIiIAiIgCIiAIiIAiIgCInx3Cgk9pxulbBr5vqGFhaRiOiar06mAuuavnkfeQyeM8mSo1kaiRupAXii18A3zxzdVK34q6e2Niaw7Fbsq7NoXYDSqgbXUi8ToBIUoFApgbAJrawCeD787/AEnmy13updEWp3wjrU+YjgAkkAAWSeABySe04/ncyuSr4GbzBxSur4I3VebLFjoOkA2dPA3qTqZfNdTQHMYq4WCRa4eCbLhlG7sdj32oj951fqEo7mgm3wlyTzeMsu+Mcvgt8R9OrWpU4YFgHfVd7jtW4kll8zvQ57yqY3Q8HJ4SrgkkKSSaTW17+dgoLVvQPFzZyfUlI539Z5mp1DlNfQvhFpclqxmsEN3H0nNvHWcVFwssMPyqGbUDQ0qwZcOgN0Gw0+yVvLi/UwVAvjvKrnOpI+OAU17E6iLVe2/Yk2ZzHmqXD4JKk7oxeGeqqMFVGoVqB1Xd6iRpJ/EtGgf9NbVUnMPqAQE2N+3qO/8AKZch0rCLDEdQbql/KO96e5PvJjHwsF0I0LXbyipCXum5JnJNNnLvEGfZyyopJYjSigk/IAbnvJ9kY5ZXxQdYGnE7nUvlLUB3r03kZnvD3/7alHKoQ3l3NMeL9VAtqPdRzdS1NgKEKAeUKECcGgPy+tV++aMTUa+vZoxxqNnNcfMhWK3tvxwfmJHY4KtqG49B6SW630d8JyNyBZB7V3+X85DJmCBXcf3vNcuFaIxbb5PrsDxwZqawrgnix+hkr07KfEJdgBhoCznjYC6v3/nILGxC7Fv+wHp8hxKoc2SlJPhFu0K4vuQPMOT6H3mIWh0m9+D2IkN0zqYWkbjsfT5yZbMq6sLsgWCK57fL/vMs8coyp9EcWSUJV2iRwMQmzt7elTcGK42vjYbCaHSXJGkjivl95vtjAH19gQPvMc7UqEp5ZzqL/BJZbFb2A/X6TdVwNyd+NpCLmiTZqvnx9dpn+LYsfIdh9Byf75k8OOT8m/Gnjj73bJPDLYjhE5Y0B6e8vWTyww0VF4UV8/UyI8NdK+Eut/xsNvYfzMnp7uDFsieZqMu+XHQiImgziIiAIiIAiIgCIiAIiIBjzGKEUn7D1PpIZsw7OdbAJ+VRd/M/rJHqikpfof4ESHwT5p5OvyT3KK6LYJVZlz2WRwSvPP1EjcggeywAA20+pHc/uklm3A3G22/zkR0zNBtVftMPsxEwNtOiTSJzBVKrSCNxx69vrPmKF7bT5l2ofUTB1TMgAkTrlJRuyJqNhnFUqo3urJpR7e/0mh0voCpjuHxEZgARhK24vfUVNEj5bbyZyT6Vv+yTJLBJZSwq6q6Gquav+EKW7teCXRkwVTTpoV6VKh4t6OuGjY2EKC74ijjT3cDsR39rPztK4wDA+vM0Ov46rgvZ2KNfyo3OrkEScwQg0EMTWmyKF9+RfyuZR1R0JRcNnGwZt1UWQBpYjzmzwOe05v4e8RYgRsNkLnDA8yUwrsSVv2APex3luIxwFxQoKgqGRhpamBF7XW+5B3BAviXrB6cnu8HGm1fg3sBwqPinzlbWwrcgm770WsE7UBNfI9awXLc4egXpfgkkbr3vtW1fevGcyrYpK4IfTepgt1q+hI0jUeK3Y+siMHCxMIknCIJsEkE0w52G9VRuu86ssa4Vk/WqPPLLL1VcByUd0231G9yfYdvf5esoOa6U7Yi7aVY70FFKDv8AhPt78yXdMRmLMqKordmpu44u/pzt9sWLmiBWrC9yTtRoDnYd+fUem8YZJ7vn+iqOV82afVcXTgfCQbu1V6j+vH/umhhdPXDALAM/ccqvsB3+Zm9r8y2UoehXuNtx7337TVz2eVLpvm4Baif2R9Duf0k1ub2x88sjudUj0+IqKWYKBzQUX86+vMxZR1xN1Gle/Nk/KgJpYwWi10bBBN2b7miaPz/jNnomOpbTsLNijyeP5frJSx1BtdhSceie6ipw8JWw1s3pYD8wI3J99v1kXls5ht+JHX3RrH2a5u9axgqIr3uboCyQAf59pE4+cwlFefUwtiKNbbE8C/l9Tcr08Lhzz2X4sziiyZfCACMLZCDRZaOoHuO+xFdtjLl4Y6LqrGxBt+RT3/1H2lEy+axMA4bMquMRFxEDWQ6qdK2oege1Xe30kv1XxXnvJq/yVdQy6FWmU8MHLMa+VTRi2w9zXR3JnlKNHVInHMPxDmv/ADGJ9Wb+om5heIM4CP8AOf24N/QiWPXwXaZltHV4lN6T4qfZcZCw/bUAEfNeD9P1lwRrAIvcXuCD9QdxNOHUQzL2sHqIiXgREQBERAEREAREQD46ggg8GQWZ6diq3kGpe24B+Rk9EpzYI5V7iSk0QeWyTlrxF2Ha/wB8w9XyxofDwTqHdSoHuCO8sUSC0sIxcV5G5lSwsbEAIOHiAj/QT9iNjNHOYjMwV0dU/M2kj6C5eqgoD2Eq/QR+Tu4qWWxlrTd1x8pKZbHABA7ibWP0bAc6igDeq2p+4qE6Phr+0fYsZnloJqVxao7uRE57Ee1CIz82RVD07/3UiuudMz2MgXDRNJ/HqcBjuNgpUqRV3Z+kvKIFFAUBPU0w0UI8vk5vd2igdI8F4uEjBSmEWABos7GjdNwBR9CefbeRznQMVVVhmMJAq+d2QtZ5YgFgq37hjx6S3SudV8ONjuXbEUbaVGg+Uc1+KdzYko+2Nv7nZZZMqHUMXCVmfBxsYsbvSulLPJVmIKgkDgGR+b6xjHWQ1lyrMWVSLpAdjekDRtp5v5AW1/AzH/xx/sP/AFTCP8Pj3xx/sP8A1TEsGou9tfQpdlb6pl8MYeFqR1bEwwyHCYNrxSTbOxUj20rvsd9hUDj5DGpvjDERQKDhDsVOnz3z5hpuwRXcip1jpfhJcDdcfFBr8pCjf2IM2m8N4RRcNmxWRWsoXIVtySGAq7Y2fX5EzXDDKuVRI4qbbRxY1B7b34INk7cUJjbBBFlbX2ct3A4HF87ztWP4OyLIV+Ai+4ux9zK1i/4Z+YnDzAQEjY4dmgOL1jvvftOvDJOqJcHNfg4ZUino1vSni/ejzMAxEG4XSQaLUBe3caiTOiv/AIVubrNIL/8ARN/cOJtZD/DZsJ8PE/4hG0MG0thNRo2R/wD0Nd/kd4eKVdB11ZU8p005tAcN7cWGw2oOQPLaH9k77bbnvNPMdDzKKR8NzRJ/B+llP4/WdfxfDGGz/EpfiXesglgfY35fpPGL0XM/kzCD/mwi37nEyKGpUqUOPrRKo/JxZcPMoK0Yqiiv4SLDWdN+l2fnU32x8xiYaIy42nDLBVCKALs7Oy6tNmyt1t22nQM74KzmKSTnUWzZ04DD/wCyeE/w7avNmSx9dFfuaX+nmrlL8lbZSmZsNV1IQSRZtSCKBoDse3P0EsnRcDCdv87EREAYm20sACoU+Zao2TzsBJbC/wAPgDvigjt5WLf7mc0PkJ9zHgMurBsVSxI0PpfyrfmQrrKuCPkb39pWtI5PmJ2o19Sb6X/wqvpwwCeA58xLBtJUHgVaGxt5hJ6V/pXhdcuzsjlGatIUDQoArSFa7F2eb35k7hBgPMQT3IBAP0JNfebsMNiqkvscPcREvAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIB//9k='
    // }
  ];

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height:'70vh',
    // width: '80vw',
    margin: '0px 0px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    // backgroundPositionX: '70%'
  }
const ImageSliderAuto = () => {
  return (
    <div className="containerSlideAuto">
    <div className='slide-container-auto'>
        <Fade>
        { SliderData.map((slideImage, index) => ( <div key={index}>
           <div style={{...divStyle, backgroundImage:`url(${slideImage.url})`}}> 
           {/* <span>{slide}</span> */}
            </div> 

        </div>)) }
        </Fade>
      
    </div>
    </div>
  )
}

export default ImageSliderAuto
