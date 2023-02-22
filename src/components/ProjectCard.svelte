<script>
    export let name;
    export let link = null;
    export let tech = [];
    export let dates = null;
</script>


<style lang="less">
    .parent {
      background-color: rgb(17, 24, 38);
      border-radius: 10%;
      padding: 2%;
      height: 100%;
      width: 100%;
      transition: all 0.1s;

      &:hover {
        transform: translateY(-3%);
      }
    }

    h4 {
        color: rgb(170, 182, 194);
        margin: 3%;
    }
  
    .container {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  
    .date {
      font-size: smaller;
    }

    p {
      margin: 3%;
      color: rgb(154, 161, 166);
    }
  
    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      padding: 0%;
      width: 80%;
      margin-left: 3%;
  
      li {
        margin-right: 4%;
      }
    }

    a {
        text-decoration: none;
        color: inherit;
        stroke: rgb(154, 145, 129);

    }

    .desc {
        color: #a8b2d1;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 5%;
      padding-right: 5%;
    }
  </style>

  <div class="parent">
    <a href={link} target="_blank" rel="noreferrer">
      <div class="container">
          <div class="header">
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
          </div>
          <h4>{name}</h4>
          {#if dates != null}
            <p class="date">{dates}</p>
          {/if}
          <p class="desc"><slot /></p>
      </div>
    </a>
</div>