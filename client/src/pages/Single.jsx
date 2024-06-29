import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'
const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://media.istockphoto.com/id/1151307397/vector/flat-cartoon-character.jpg?s=1024x1024&w=is&k=20&c=qBROYpbloa21JgZODjhjUlgo8SXTXliHfeoO1YrKqkg="
          alt=""
        />
        <div className="user">
          <img
            src="https://media.istockphoto.com/id/1151307397/vector/flat-cartoon-character.jpg?s=1024x1024&w=is&k=20&c=qBROYpbloa21JgZODjhjUlgo8SXTXliHfeoO1YrKqkg="
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <h3>edit</h3>
            </Link>
            <Link>
              <h3>delete</h3>
            </Link>
          </div>
        </div>
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit nobis magni odio voluptas inventore excepturi consequuntur veritatis eaque quisquam! Perspiciatis ad eius quaerat nostrum dolor maiores assumenda vero nihil corrupti.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ducimus officia quod autem ad asperiores repellendus aperiam neque voluptatum, aspernatur alias? Officia voluptate, voluptas quaerat ipsam officiis hic non quisquam!
        Accusantium, laudantium repudiandae blanditiis in facere expedita? Ipsam molestiae voluptas animi doloremque blanditiis placeat voluptatem cumque modi ducimus sint quis, repellendus natus, aperiam soluta atque! Quis architecto inventore quasi delectus?
        Eius similique ipsa enim modi placeat vel quo magnam ratione, molestias ad consequuntur consectetur nisi ullam, eos tempora quidem cumque. Id maxime voluptatum animi quae delectus, ipsam consectetur reiciendis harum!
        Ipsum excepturi animi ex sequi a mollitia nisi nulla, consectetur eius assumenda dolore perferendis esse soluta dolor accusantium sint eaque quidem voluptatem odio expedita ab fuga officiis eveniet explicabo? Cumque!
        Voluptatem similique recusandae temporibus quo. Libero, molestias fugiat atque dolores harum nisi, quas maiores neque provident laborum veritatis error! Rerum sunt dignissimos esse repellendus odio cumque odit pariatur vel adipisci!
        Veritatis accusantium repellat ratione quae saepe fuga, hic vitae facilis repellendus mollitia nesciunt laborum vel soluta quisquam molestias aliquam rerum modi tempora odio temporibus placeat sint doloremque magni. Iure, molestiae!
        A perspiciatis odit debitis labore reiciendis maiores molestias repellat dolorem alias. Error reprehenderit officia nam nobis vitae aspernatur tempora ratione. Soluta excepturi porro, debitis quam in voluptatum itaque odit quasi!
        Cumque ipsum error eligendi porro perspiciatis rerum sit incidunt recusandae, cum eos aliquid nobis facilis sapiente exercitationem voluptas cupiditate iure doloremque earum et culpa quam assumenda maiores deleniti voluptate. Quia.
        Commodi modi nemo laudantium! Est porro quibusdam molestiae veniam qui at rem ipsam magni, illum possimus suscipit sed, voluptatum explicabo quam dolores blanditiis, veritatis accusantium dicta doloribus aliquid earum autem?
        Illo sit provident culpa optio accusamus, id quas. Veniam iusto fugit aut, neque quos cumque minima minus ratione, at quam accusamus voluptates laborum, ipsa sapiente inventore earum harum eum. Corporis!</p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single
