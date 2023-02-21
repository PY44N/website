<script>
    export let name;
    export let link = null;
    export let tech = [];
    export let dates = null;
</script>


<style lang="less">
    .parent {
      background-color: #112240;
      border-radius: 10%;
      width: 17vw;
      height: 40vh;
      padding: 2%;
      transition: all 0.1s;

      &:hover {
        width: 19vw;
        height: 43vh;
      }
    }

    h4 {
        color: #ccd6f6;
    }
  
    .container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }
  
    img {
      width: 100%;
      border-radius: 10%;
    }
  
    .date {
      font-size: smaller;
    }
  
    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
  
      li {
        padding: 5%;
      }
    }

    a {
        text-decoration: none;
        color: inherit;
        stroke: #8892b0;

    }
  
    footer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .desc {
        color: #a8b2d1;
    }
  </style>
  
  <div class="parent">
    <a href={link}>
      <div class="container">
        <header>
          <h4>{name}</h4>
          {#if dates != null}
            <p class="date">{dates}</p>
          {/if}
          <p class="desc"><slot /></p>
        </header>
        <footer>
          <ul>
            {#each tech as v}
                <li>{v}</li>
            {/each}
          </ul>
          {#if link != null}
            <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                ><path
                d="M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z"
                ></path></svg
            >
          {/if}
          <!-- <p class="tech">{tech}</p> -->
        </footer>
      </div>
    </a>
</div>