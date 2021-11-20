/* eslint-disable jsx-a11y/alt-text */
export default function MyComponent(props: any) {
    return (
      <>
      <div className="div">
        <div className="div-2">
          <picture>
            <source
              srcSet="https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2F1be876979fba4e2f8293c0d11a8ac21e?format=webp&width=100&height=1000 100w, https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2F1be876979fba4e2f8293c0d11a8ac21e?format=webp&width=200&height=1000 200w, https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2F1be876979fba4e2f8293c0d11a8ac21e?format=webp&width=400&height=1000 400w, https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2F1be876979fba4e2f8293c0d11a8ac21e?format=webp&width=800&height=1000 800w, https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2F1be876979fba4e2f8293c0d11a8ac21e?format=webp&width=1200&height=1000 1200w, https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2F1be876979fba4e2f8293c0d11a8ac21e?format=webp&width=1600&height=1000 1600w, https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2F1be876979fba4e2f8293c0d11a8ac21e?format=webp&width=2000&height=1000 2000w, https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2F1be876979fba4e2f8293c0d11a8ac21e?format=webp&width=638&height=1000 638w, https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2F1be876979fba4e2f8293c0d11a8ac21e?format=webp&width=998&height=1000 998w"
              type="image/webp"
            />

            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2F1be876979fba4e2f8293c0d11a8ac21e?width=1200&height=1000"
              sizes="(max-width: 638px) 100vw, 100vw"
              srcSet="https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2F1be876979fba4e2f8293c0d11a8ac21e?width=100&height=1000 100w, https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2F1be876979fba4e2f8293c0d11a8ac21e?width=200&height=1000 200w, https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2F1be876979fba4e2f8293c0d11a8ac21e?width=400&height=1000 400w, https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2F1be876979fba4e2f8293c0d11a8ac21e?width=800&height=1000 800w, https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2F1be876979fba4e2f8293c0d11a8ac21e?width=1200&height=1000 1200w, https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2F1be876979fba4e2f8293c0d11a8ac21e?width=1600&height=1000 1600w, https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2F1be876979fba4e2f8293c0d11a8ac21e?width=2000&height=1000 2000w, https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2F1be876979fba4e2f8293c0d11a8ac21e?width=638&height=1000 638w, https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2F1be876979fba4e2f8293c0d11a8ac21e?width=998&height=1000 998w"
              className="image"
            />
          </picture>

          <div className="builder-image-sizer image-sizer" />
        </div>
        <div className="title">
          <p>Something Great to Say</p>
        </div>
        <div className="subtitle">
          <p>
            Some more great things to elaborate on that wonderful things you
            have to tell your audience
          </p>
        </div>
        <span
          dangerouslySetInnerHTML={{ __html: "Let's go" }}
          className="span"
        />
      </div>
      </>
    );
  }