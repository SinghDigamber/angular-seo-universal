// routes/song-route.ts

import { Request, Response, NextFunction } from 'express';
import Song from '../models/song';


export class SongRoute {
    songRoute(app): void {

        // Create Song
        app.route('/api/create-song').post((req: Request, res: Response, next: NextFunction) => {
            Song.create(req.body, (error, data) => {
                if (error) {
                    return next(error)
                } else {
                    res.json(data)
                }
            })
        });

        // Get All Songs
        app.route('/api/get-songs').get((req: Request, res: Response, next: NextFunction) => {
            Song.find((error, data) => {
                if (error) {
                    return next(error)
                } else {
                    res.json(data)
                }
            })
        })

        // Get Single Song
        app.route('/api/get-song/:id').get((req: Request, res: Response, next: NextFunction) => {
            Song.findById(req.params.id, (error, data) => {
                if (error) {
                    return next(error)
                } else {
                    res.json(data)
                }
            })
        })


        // Update Song
        app.route('/api/update-song/:id').put((req: Request, res: Response, next: NextFunction) => {
            Song.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, (error, data) => {
                if (error) {
                    return next(error);
                } else {
                    res.json(data)
                    console.log('Data updated successfully')
                }
            })
        })

        // Delete Song
        app.route('/api/delete-song/:id').delete((req: Request, res: Response, next: NextFunction) => {
            Song.findOneAndRemove(req.params.id, (error, data) => {
                if (error) {
                    return next(error);
                } else {
                    res.status(200).json({
                        msg: data
                    })
                }
            })
        })

    }
}