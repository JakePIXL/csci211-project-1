use actix_files as fs;
use actix_web::{
    middleware::Logger,
    web::{self, scope, Data},
    App, HttpServer, Responder,
};
use env_logger::Env;
use tracing::info;

use csci211_project::routes::{books, borrowings, health_check, members};

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv::dotenv().ok();

    env_logger::Builder::from_env(Env::default().default_filter_or("info")).init();

    let database_url = std::env::var("DATABASE_URL").expect("DATABASE_URL must be set");

    let host = std::env::var("HOST").unwrap_or_else(|_| "127.0.0.1".to_string());
    let port = std::env::var("PORT").unwrap_or_else(|_| "8080".to_string());

    let address = format!("{}:{}", host, port);

    let pool = sqlx::MySqlPool::connect(&database_url).await.unwrap();

    info!("Starting server at {}", address);

    HttpServer::new(move || {
        App::new()
            .wrap(Logger::default())
            .app_data(Data::new(pool.clone()))
            .service(
                scope("/api")
                    .service(health_check)
                    .configure(books::books_config)
                    .configure(members::members_config)
                    .configure(borrowings::borrowings_config),
            )
            .service(fs::Files::new("/", "./frontend/build").index_file("index.html"))
            .default_service(web::route().to(spa_index))
    })
    .bind(address)?
    .run()
    .await
}

async fn spa_index() -> impl Responder {
    actix_web::HttpResponse::PermanentRedirect()
        .append_header(("Location", "/"))
        .finish()
}
