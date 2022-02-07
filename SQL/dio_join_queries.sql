INSERT INTO `videos_canais` (fk_canal,fk_video) VALUES (2,4);

SELECT * FROM `videos_canais` JOIN videos on videos_canais.fk_canal = videos.id_video;

/* simplificando com AS */
SELECT * FROM `videos_canais` as vc JOIN videos AS v on vc.fk_canal = v.id_video;

SELECT * FROM `videos_canais` as vc JOIN videos AS v on vc.fk_video = v.id_video
JOIN canais as c on vc.fk_canal = c.id_canal

SELECT v.nome_video,v.autor_video,c.nome_canal 
FROM `videos_canais` as vc 
JOIN videos AS v on vc.fk_video = v.id_video 
JOIN canais as c on vc.fk_canal = c.id_canal; 

SELECT * FROM videos_canais 
JOIN videos ON videos_canais.fk_video = videos.id_video
JOIN canais ON videos_canais.fk_canal = canais.id_canal;